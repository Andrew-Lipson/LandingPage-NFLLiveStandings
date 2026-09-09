import { SITE, METADATA } from 'astrowind:config';
import { getCanonical } from '~/utils/permalinks';

export const landing = {
  name: SITE.name as string,
  url: String(getCanonical('/')),
  appUrl: 'https://standings.nfllivestandings.com',
  title: 'Real-Time NFL Standings | NFL Live Standings',
  description: METADATA.description as string,
  intro:
    'Follow realtime NFL standings as scores change, with division, conference and first-round draft order updates, giving you the full playoff picture.',
  rulesUrl: 'https://www.nfl.com/standings/tie-breaking-procedures',
  previewNote: 'Screenshots and example positions illustrate the app. Open the live standings to see current results.',
  features: [
    'Real-time NFL standings and final results',
    'Division and conference standings',
    'Playoff position and clinch status',
    'First-round NFL draft order and traded picks',
    'Current and full-season strength of schedule',
  ],
  questions: [
    {
      question: 'How do realtime NFL standings work?',
      answer:
        'Live mode treats each in-progress score as final and recalculates affected standings as scores change. It shows the actual order if games ended with their current scores.',
    },
    {
      question: 'What is the difference between Live and Final standings?',
      answer:
        'Live standings include results from games in progress, treated as final. Final standings use only completed games. Switch between the two views in the app.',
    },
    {
      question: 'How are tied teams ranked?',
      answer:
        "The app follows NFL tiebreaker procedures for division, conference and draft order standings. Open a tied team's tiebreak details to see the reason behind its position.",
    },
    {
      question: 'What do Current SOS and Season SOS mean?',
      answer:
        'SOS means strength of schedule. Current SOS uses games already played. Season SOS uses the full 17-game schedule. You can toggle between them in any view.',
    },
    {
      question: 'Does the draft order include traded picks?',
      answer:
        'Yes. The first-round draft-order view assigns traded picks to their current owner and updates the order with live results.',
    },
  ],
};
