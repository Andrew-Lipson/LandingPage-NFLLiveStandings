import type { APIRoute } from 'astro';
import { landing } from '~/data/landing';

export const GET: APIRoute = () =>
  new Response(
    `# ${landing.name}

> ${landing.description}

Canonical homepage: ${landing.url}

${landing.intro}

## Standings views

- Division standings cover all eight NFL divisions, with win-loss records, division and conference records, strength of victory, and strength of schedule.
- Conference standings show the AFC and NFC order, playoff cutoff, live position movement, and clinch or elimination markers.
- First-round draft order tracks pick ownership, including traded picks, with current and full-season strength of schedule options.

The app works on desktop and mobile. Team, record and position data remain visible on mobile, with the same detail as desktop.

## Common questions

${landing.questions.map(({ question, answer }) => `### ${question}\n\n${answer}`).join('\n\n')}

See the [official NFL tiebreaking procedures](${landing.rulesUrl}) for division, conference and draft order rules.

## App previews

${landing.previewNote}

## Open the app

[View live NFL standings](${landing.appUrl})
`,
    { headers: { 'Content-Type': 'text/markdown; charset=utf-8' } }
  );
