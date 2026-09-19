import { mkdir, writeFile } from 'node:fs/promises';

const username = 'Addey34';
const token = process.env.GITHUB_TOKEN;

const headers = {
  Accept: 'application/vnd.github+json',
  'X-GitHub-Api-Version': '2022-11-28',
  ...(token ? { Authorization: `Bearer ${token}` } : {}),
};

const response = await fetch(
  `https://api.github.com/users/${username}/repos?type=owner&sort=pushed&direction=desc&per_page=100`,
  { headers }
);

if (!response.ok) {
  throw new Error(`GitHub API failed with status ${response.status}`);
}

const repos = await response.json();
const owned = repos.filter((repo) => !repo.fork);
const stars = owned.reduce((total, repo) => total + repo.stargazers_count, 0);
const forks = owned.reduce((total, repo) => total + repo.forks_count, 0);
const latest = owned.find((repo) => !repo.archived) ?? null;

const escapeXml = (value) =>
  String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&apos;');

const latestLabel = latest
  ? `Latest public activity: ${latest.name}`
  : 'No public repository activity';

const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="760" height="190" viewBox="0 0 760 190" role="img" aria-labelledby="title desc">
  <title id="title">Addey34 public GitHub snapshot</title>
  <desc id="desc">${owned.length} public repositories, ${stars} stars and ${forks} forks.</desc>
  <rect width="760" height="190" rx="18" fill="#0d1117"/>
  <rect x="1" y="1" width="758" height="188" rx="17" fill="none" stroke="#30363d"/>
  <text x="34" y="43" fill="#f0f6fc" font-family="system-ui,-apple-system,Segoe UI,sans-serif" font-size="22" font-weight="700">Public GitHub snapshot</text>
  <text x="34" y="67" fill="#8b949e" font-family="system-ui,-apple-system,Segoe UI,sans-serif" font-size="13">Generated from the GitHub REST API</text>

  <text x="34" y="118" fill="#f0f6fc" font-family="system-ui,-apple-system,Segoe UI,sans-serif" font-size="28" font-weight="700">${owned.length}</text>
  <text x="34" y="140" fill="#8b949e" font-family="system-ui,-apple-system,Segoe UI,sans-serif" font-size="13">public repos</text>

  <text x="210" y="118" fill="#f0f6fc" font-family="system-ui,-apple-system,Segoe UI,sans-serif" font-size="28" font-weight="700">${stars}</text>
  <text x="210" y="140" fill="#8b949e" font-family="system-ui,-apple-system,Segoe UI,sans-serif" font-size="13">stars</text>

  <text x="350" y="118" fill="#f0f6fc" font-family="system-ui,-apple-system,Segoe UI,sans-serif" font-size="28" font-weight="700">${forks}</text>
  <text x="350" y="140" fill="#8b949e" font-family="system-ui,-apple-system,Segoe UI,sans-serif" font-size="13">forks</text>

  <text x="500" y="111" fill="#f0f6fc" font-family="system-ui,-apple-system,Segoe UI,sans-serif" font-size="15" font-weight="600">${escapeXml(latestLabel)}</text>
  <text x="500" y="136" fill="#8b949e" font-family="system-ui,-apple-system,Segoe UI,sans-serif" font-size="12">refreshes automatically</text>
</svg>
`;

await mkdir('assets', { recursive: true });
await writeFile('assets/github-stats.svg', svg);
