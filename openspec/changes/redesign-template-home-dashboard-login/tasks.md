# Tasks: Redesign Template Home, Dashboard, and Login

## Phase 1: Infrastructure & Theming

- [x] 1.1 In `apps/web/src/index.css`, update the `--primary` and `--primary-foreground` CSS variables across both `:root` and `.dark` scopes to match `#50986b` (OKLCH value equivalent).
- [x] 1.2 Use CLI to install required `shadcn/ui` components for the project: `bunx --bun shadcn@latest add sidebar card badge button input label separator`.

## Phase 2: Refactor Layout Architecture

- [x] 2.1 Refactor `apps/web/src/app/layout.tsx` to conditionally hide or remove the global marketing `<Header />` if it conflicts with the Dashboard application shell, or move it strictly into a `(marketing)/layout.tsx` and `(auth)/layout.tsx`.
- [x] 2.2 Create `apps/web/src/app/(app)/layout.tsx`. Implement `SidebarProvider`, a generic `<Sidebar>` wrapper (from `shadcn/ui`), and the main `<SidebarTrigger>` header layout to establish the authenticated dashboard shell.

## Phase 3: Authentication Flow UI

- [x] 3.1 Update `apps/web/src/components/sign-in-form.tsx` to utilize `shadcn/ui` primitives (e.g. `Card`, `CardHeader`, `CardTitle`, `CardContent`, native `Input`, native `Button`, `Label`). Do not alter `@tanstack/react-form` logic.
- [x] 3.2 Update `apps/web/src/components/sign-up-form.tsx` to utilize `shadcn/ui` primitives matching the SignIn design.
- [x] 3.3 Modify `apps/web/src/app/(auth)/login/page.tsx` to wrap the imported SignIn/SignUp forms in a centered visually appealing layout (e.g., a modern split-screen or centered glass-like grid container).

## Phase 4: Dashboard Integrations

- [x] 4.1 Refactor `apps/web/src/app/(app)/dashboard/page.tsx` to remove old basic styles and gracefully inject content directly inside the newly established `(app)/layout.tsx` shell.
- [x] 4.2 Verify that `verifySession()` in the dashboard `page.tsx` correctly provides the session context to the rendered views within the Shell.

## Phase 5: Landing Page Redesign

- [x] 5.1 Update proper metadata for SEO in `apps/web/src/app/(marketing)/page.tsx`.
- [x] 5.2 Completely rebuild the UI of `apps/web/src/app/(marketing)/page.tsx` using full-width semantic `<section>`s and `shadcn/ui` elements (Cards, Buttons, Badges).
- [x] 5.3 Implement a "Features" section in `(marketing)/page.tsx` with mock icons to fulfill the specs requirements.
- [x] 5.4 Implement a "Technologies Used" section in `(marketing)/page.tsx` displaying the stack (Next.js, Prisma, PostgreSQL, Better Auth, Ultracite, etc.).

## Phase 6: Verification & Cleanup

- [x] 6.1 Validate routing visually (switch from Home -> Login -> Dashboard) to ensure layouts resolve properly and sidebar functions.
- [x] 6.2 Ensure there are no outstanding TypeScript or Lint errors using `bun x ultracite check`.
