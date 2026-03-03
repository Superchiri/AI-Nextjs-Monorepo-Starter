# Proposal: Redesign Template Home, Dashboard, and Login

## Intent

The current application template has robust routing and authentication mechanisms but lacks a premium, production-ready design. We must overhaul the visual aesthetics of the landing page, dashboard, and login interactions, implementing high-quality design standards and SEO optimizations while adhering strictly to Next.js App Router constraints. This is a public template, so the structure must be reusable and serve as a showcase.

## Scope

### In Scope

- Complete visual redesign of the **Landing Page** (Home) to display template features, technologies used, and tech icons (mock icons allowed).
- Redesign of the **Dashboard** to introduce a premium shell layout.
- Redesign of the **Authentication flow** (Login).
- Use of ONLY `shadcn/ui` components for the UI.
- Update Tailwind v4 theme in `index.css` to use the primary brand color `#50986b`.
- Removal of the previous home, dashboard, and login implementations.
- Strict adherence to `architect-next`, `next-best-practices`, and design skills (layout hierarchy, spacing scale, accessibility).

### Out of Scope

- Altering the underlying authentication API (`better-auth` config).
- Complex new features inside the dashboard beyond the core application wrapper/navigation.

## Approach

- Add proper `metadata` exports and semantic sectioning (e.g., `<h1>`, `<section>`) in `(marketing)/page.tsx` for SEO enhancements.
- Construct Dashboard layout utilizing Server Components to securely fetch session data and pass it to modern navigational client chunks.
- Restyle Authentication views seamlessly wrapping the pre-existing form structures utilizing `shadcn/ui` blocks.
- If a `shadcn/ui` component is missing, install it using: `bunx --bun shadcn@latest add "<component>"`
- Overhaul `globals.css` (Tailwind v4) to inject the custom brand color `#50986b`.

## Affected Areas

| Area                                     | Impact   | Description                                                                      |
| ---------------------------------------- | -------- | -------------------------------------------------------------------------------- |
| `apps/web/src/app/(marketing)/page.tsx`  | Modified | Complete visual and SEO layout overhaul (Template features, technologies, icons) |
| `apps/web/src/app/(app)/dashboard/`      | Modified | New premium shell and dashboard design                                           |
| `apps/web/src/app/(auth)/login/page.tsx` | Modified | Redesigned layout wrapper for auth forms                                         |
| `apps/web/src/app/globals.css`           | Modified | Add primary brand color `#50986b` to Tailwind v4 theme                           |
| `apps/web/src/components/ui/*`           | Added    | New `shadcn/ui` components as required                                           |

## Risks

| Risk                     | Likelihood | Mitigation                                                                                  |
| ------------------------ | ---------- | ------------------------------------------------------------------------------------------- |
| Breaking auth form logic | Low        | Directly styling the forms without touching their `useForm` event handlers and validations. |

## Rollback Plan

Revert changes via `git checkout` targeting the original commits for the affected layout and page files.

## Dependencies

- `shadcn/ui` CLI for component installation.

## Success Criteria

- [ ] Landing page showcases features and technologies with a premium feel and has SEO metadata.
- [ ] Dashboard renders a fully responsive premium shell architecture using `shadcn/ui`.
- [ ] Login screen is visually stunning and authentication flows continue to work flawlessly.
- [ ] Primary brand color `#50986b` is correctly implemented across the template.
- [ ] Obsolete implementation details from previous versions are completely removed.
