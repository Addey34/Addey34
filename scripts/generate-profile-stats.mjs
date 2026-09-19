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
const latest =
  owned.find((repo) => !repo.archived && repo.name !== username) ?? null;

const escapeXml = (value) =>
  String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&apos;');

const pad = (value) => String(value).padStart(2, '0');
const latestName = latest?.name ?? 'no-public-signal';
const latestDate = latest?.pushed_at?.slice(0, 10) ?? '—';
const forkLabel = forks === 1 ? 'FORK' : 'FORKS';

const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="260" viewBox="0 0 1200 260" role="img" aria-labelledby="title desc">
  <title id="title">AG GitHub telemetry</title>
  <desc id="desc">${owned.length} public repositories. Latest public activity: ${escapeXml(latestName)} on ${latestDate}. Generated from the GitHub REST API.</desc>
  <rect width="1200" height="260" rx="24" fill="#0B0F17"/>
  <rect x="1" y="1" width="1198" height="258" rx="23" fill="none" stroke="#1D2632"/>
  <text x="72" y="54" fill="#778290" font-family="SFMono-Regular,Consolas,monospace" font-size="11" letter-spacing="3">AG // PUBLIC TELEMETRY</text>
  <circle cx="1118" cy="48" r="5" fill="#168CFF"/>
  <text x="1100" y="52" fill="#65C7FF" text-anchor="end" font-family="SFMono-Regular,Consolas,monospace" font-size="9" letter-spacing="1.7">API SYNC</text>

  <text x="72" y="119" fill="#F2D58A" font-family="Inter,Segoe UI,Arial,sans-serif" font-size="44" font-weight="760">${pad(owned.length)}</text>
  <text x="72" y="145" fill="#8F99A6" font-family="SFMono-Regular,Consolas,monospace" font-size="9" letter-spacing="1.7">PUBLIC REPOSITORIES</text>

  <path d="M255 76 V174" stroke="#263140"/>

  <text x="300" y="102" fill="#778290" font-family="SFMono-Regular,Consolas,monospace" font-size="9" letter-spacing="2">LATEST PUBLIC SIGNAL</text>
  <text x="300" y="139" fill="#F5F3ED" font-family="Inter,Segoe UI,Arial,sans-serif" font-size="28" font-weight="700">${escapeXml(latestName)}</text>
  <text x="300" y="165" fill="#65C7FF" font-family="SFMono-Regular,Consolas,monospace" font-size="10" letter-spacing="1.5">${latestDate}</text>

  <path d="M745 76 V174" stroke="#263140"/>

  <text x="790" y="102" fill="#778290" font-family="SFMono-Regular,Consolas,monospace" font-size="9" letter-spacing="2">AUTOMATION</text>
  <text x="790" y="137" fill="#F5F3ED" font-family="Inter,Segoe UI,Arial,sans-serif" font-size="20" font-weight="650">SELF-HOSTED PROFILE SIGNAL</text>
  <text x="790" y="164" fill="#8F99A6" font-family="Inter,Segoe UI,Arial,sans-serif" font-size="13">GitHub Actions + REST API · no stats service</text>

  <path d="M72 210 H370" stroke="#D9AE57" stroke-width="2"/>
  <path d="M370 210 L411 200" stroke="#D9AE57" stroke-width="2"/>
  <path d="M411 200 H738" stroke="#168CFF" stroke-width="3"/>
  <path d="M738 200 H1128" stroke="#263140"/>
  <text x="72" y="234" fill="#66717E" font-family="SFMono-Regular,Consolas,monospace" font-size="9" letter-spacing="1.5">${stars} STARS · ${forks} ${forkLabel} · REFRESHES WHEN PUBLIC DATA CHANGES</text>
</svg>
`;

await mkdir('assets/github', { recursive: true });
await writeFile('assets/github/telemetry.svg', svg);
