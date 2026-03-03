# Design: Redesign Template Home, Dashboard, and Login

## Technical Approach

We will replace the current rudimentary layouts with highly polished interfaces built strictly using `shadcn/ui` and Tailwind v4. The landing page (`(marketing)`) will be constructed using responsive design practices, showcasing features and technologies. The authentication pages (`(auth)`) will securely wrap the existing `react-form` states with a stunning glass-like or split-screen container. Finally, the dashboard (`(app)`) will use `shadcn/ui`'s `Sidebar` provider and layout primitives to form a premium application shell.

To satisfy the primary brand color requirement (`#50986b`), the CSS variables in `index.css` for `--primary` will be updated to match the OKLCH equivalent of this hex color.

## Architecture Decisions

### Decision: Layout Separation for Dashboard

**Choice**: Introduce a separate layout file (`(app)/layout.tsx`) that implements the `SidebarProvider` and internal dashboard header.
**Alternatives considered**: Keeping the single global `Header` inside `src/app/layout.tsx`.
**Rationale**: The marketing and authentication pages require a standard top-navigation (or simple headers), whereas the Dashboard requires a dedicated application shell (Sidebar + App Header). By scoping the Sidebar to `(app)/layout.tsx`, we avoid polluting public pages with dashboard-specific layout components. Note: We will evaluate if `apps/web/src/app/layout.tsx` should yield its global header to specific route groups or keep it for marketing only.

### Decision: Strict Usage of shadcn/ui

**Choice**: Use `bunx --bun shadcn@latest add <component>` to add any necessary components (e.g., `card`, `sidebar`, `badge`, `separator`).
**Alternatives considered**: Building bespoke Tailwind components.
**Rationale**: Adhering to the constraints, a public template built over `shadcn/ui` acts as a recognizable, extendable foundation for other developers.

## Data Flow

Data fetching and authentication flow remains entirely Server-Side optimized.

    Client Request ──→ Next.js App Router
                             │
     (app)/dashboard/layout.tsx ──→ Fetches `verifySession()` from DAL
                             │
     (app)/dashboard/page.tsx ──→ Receives session, passes to client chunks
                             │
     UI Renders (Sidebar, UserProfile, Navigation)

## File Changes

| File                                        | Action | Description                                                                                                                                |
| ------------------------------------------- | ------ | ------------------------------------------------------------------------------------------------------------------------------------------ |
| `apps/web/src/app/(marketing)/page.tsx`     | Modify | Rebuild using full-width sections, Cards, and Badges to showcase features and tech.                                                        |
| `apps/web/src/app/(auth)/login/page.tsx`    | Modify | Wrap existing `SignInForm` & `SignUpForm` component imports in a polished `shadcn/ui` layout grid.                                         |
| `apps/web/src/components/sign-in-form.tsx`  | Modify | Minor restyling using `shadcn/ui` primitive components to ensure visual consistency.                                                       |
| `apps/web/src/components/sign-up-form.tsx`  | Modify | Minor restyling using `shadcn/ui` primitive components to ensure visual consistency.                                                       |
| `apps/web/src/app/(app)/layout.tsx`         | Create | New layout wrapper to initialize `SidebarProvider` and `AppSidebar` for the dashboard.                                                     |
| `apps/web/src/app/(app)/dashboard/page.tsx` | Modify | Update to render dashboard content elements within the new shell.                                                                          |
| `apps/web/src/app/layout.tsx`               | Modify | Ensure the global header doesn't conflict with the `(app)` structure (e.g., move global header out of root layout, or hide if within app). |
| `apps/web/src/index.css`                    | Modify | Update `--primary` and `--primary-foreground` to represent `#50986b` in Tailwind v4 format.                                                |
| `shadcn/ui` components                      | Add    | `npx shadcn@latest add sidebar card badge button input label separator`                                                                    |

## Interfaces / Contracts

No new database models or external API contracts are being defined. The visual components will strictly adhere to the props accepted by standard `shadcn/ui` components.

## Testing Strategy

| Layer       | What to Test   | Approach                                                                                                          |
| ----------- | -------------- | ----------------------------------------------------------------------------------------------------------------- |
| Unit        | Form Visuals   | Ensure `SignInForm` renders without crashing when wrapped in new layouts.                                         |
| Integration | Layouts        | Ensure routing from `/(marketing)` to `/(auth)` and `/(app)` correctly swaps from Global Header to Sidebar Shell. |
| E2E         | Authentication | Verify that the overarching login logic still correctly redirects to `/dashboard` upon success.                   |

## Migration / Rollout

No migration required. This is a UI swap within a template.

## Open Questions

- [ ] Does the current global `<Header />` in `app/layout.tsx` need to be shifted to `(marketing)/layout.tsx` and `(auth)/layout.tsx` to completely isolate the Dashboard layout? (Assumption: Yes, it is better to isolate it).
