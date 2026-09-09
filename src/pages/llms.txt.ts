import type { APIRoute } from 'astro';
import { landing } from '~/data/landing';

export const GET: APIRoute = () =>
  new Response(
    `# ${landing.name}

> ${landing.description}

${landing.intro}

This website explains NFL Live Standings. The interactive app is a separate destination linked below.

Live mode treats in-progress games as if they ended with their current scores. Final mode uses completed games only. Current SOS means strength of schedule from games already played; Season SOS covers the full 17-game schedule.

${landing.previewNote}

## Overview

- [Product overview and common questions](${landing.url}/index.md): Markdown description of the app's standings views and methodology.
- [NFL Live Standings homepage](${landing.url}): Canonical landing page with screenshots and feature explanations.

## Use the app

- [Open live standings](${landing.appUrl}): Interactive division, conference, playoff and first-round draft-order views.

## References

- [Official NFL tiebreaking procedures](${landing.rulesUrl}): NFL division, conference and draft order tiebreak rules.
`,
    { headers: { 'Content-Type': 'text/plain; charset=utf-8' } }
  );
