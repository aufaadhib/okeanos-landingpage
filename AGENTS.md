# Okeanos Landing Page - Refactor Direction

## Scope

This is a Vite + React corporate landing page for Okeanos. Treat the site as
an industrial and research-company presence: credible, calm, and clear before
it is decorative.

The visual reference is the restraint and information hierarchy of the main
Pertamina website (https://www.pertamina.com/), not its branding, assets,
copy, or layout.

## Non-negotiable visual direction

- Prefer a clean editorial-corporate layout with generous whitespace, strong
  typography, meaningful photography or diagrams, and thin structural rules.
- Use solid surfaces and solid brand colors. Do not use gradients in section
  backgrounds, cards, buttons, badges, icons, text, borders, or glows unless a
  written product requirement explicitly calls for one.
- Use a restrained palette: white/off-white surfaces, deep navy for primary
  text and navigation, Okeanos blue as the main action color, and one muted
  supporting color only when it conveys status or category.
- A section gets one visual emphasis. Avoid stacked effects such as gradients,
  glass cards, glows, particles, oversized rounded corners, and animated
  backgrounds in the same area.
- Use border radius sparingly. Corporate content blocks should feel structured
  and stable, not like consumer-app tiles.

## Icons and illustration

- Icons must explain an action or a concept; never add them as decoration.
- Do not place an icon beside every heading, bullet, tag, statistic, or CTA.
- Prefer one small semantic icon per component at most. Omit it when the label
  is already clear.
- Use Lucide icons when an icon is needed. Keep one consistent outline weight,
  neutral color, and accessible label for icon-only controls.
- Replace decorative icon clusters, floating symbols, and looping particles
  with whitespace, a divider, a real project image, or a simple technical
  diagram when visual support is genuinely needed.

## Content and hierarchy

- Write in clear Indonesian with a professional, factual tone. State what the
  company does, who it helps, and the expected outcome; avoid generic claims
  such as "terdepan", "revolusioner", or "standar global" unless evidenced.
- A section should have one eyebrow (optional), one `h2`, a short supporting
  paragraph, and content grouped by a real business distinction.
- Headings must remain sequential: page `h1`, section `h2`, card or item `h3`.
- CTAs must describe the action precisely, for example "Hubungi tim kami" or
  "Lihat layanan", not vague wording such as "Pelajari lebih lanjut".

## Service section guidance

- Refactor "Layanan Kami" into a quiet service overview, not a colorful
  feature showcase.
- Each service should contain a title, a concise description, and a tangible
  scope or outcome. Use a small label or divider for structure instead of a
  large service code, decorative number, gradient, or icon panel.
- Favor a white or soft-gray section with navy typography, thin gray-blue
  dividers, and a single solid blue CTA. Reserve dark navy for one deliberate
  high-contrast band, such as the final contact CTA - not every card.
- Avoid hiding supporting visuals on mobile. Core service information must be
  available at every breakpoint.

## Responsive and accessibility requirements

- Build mobile-first, then enhance at `md` and `lg`/`xl`. Verify at 375px,
  768px, 1024px, and 1440px with no horizontal overflow.
- Mobile: one clear content column, comfortable gutters, no clipped text, and
  no interaction that relies on hover.
- Medium: use two columns only when card text remains readable and aligned.
- Desktop: use wider editorial spacing and up to three service columns; do not
  stretch paragraph measure merely to fill the viewport.
- Keep body text at 16px or larger, line-height around 1.5, visible keyboard
  focus, and contrast of at least 4.5:1 for normal text.
- Respect `prefers-reduced-motion`. Motion must be subtle (150-300ms), useful,
  and never required to understand or access content.

## Implementation guardrails

- Reuse the existing Tailwind tokens and UI primitives before adding a new
  dependency, font, animation library, or design system.
- Remove superseded decorative markup and CSS during refactors; do not leave
  commented-out UI blocks or dormant animation code behind.
- Keep components focused and preserve existing data/interaction contracts
  unless the task explicitly asks to change them.
- After UI work, run `npm.cmd run lint` and `npm.cmd run build`.
