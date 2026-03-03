# Auth Specification

## Purpose

This spec covers the visual redesign of the authentication flows (`/(auth)/login/page.tsx`), providing a modern, premium wrapper around the existing forms while maintaining current functional logic.

## Requirements

### Requirement: Modern Layout Wrapper

The authentication forms MUST be encased in a visually striking layout (e.g., a centered glass-morphic card or a sleek split-screen design).

#### Scenario: User views the login page

- GIVEN an unauthenticated user navigates to `/login`
- WHEN the page loads
- THEN the form sits within a modern, visually appealing container
- AND the overall background complements the primary brand color (#50986b)
- AND there is a clear distinction between the form area and the background

### Requirement: Use shadcn/ui Components for Layout

While the internal `react-form` logic remains untouched, the external wrappers and aesthetic overlays MUST utilize `shadcn/ui` components or standard Tailwind v4 utility classes.

#### Scenario: Layout adheres to design system

- GIVEN the login page is rendered
- WHEN the user views the form container
- THEN elements like Cards, structural Divs, and Typography styles conform to the `shadcn/ui` aesthetic

### Requirement: Preserve Form Functionality

The redesign SHALL NOT alter the existing `useForm` logic, validation schemas, or API endpoints.

#### Scenario: User successfully logs in

- GIVEN a user is on the redesigned login page
- WHEN they enter valid credentials and submit the original `SignInForm`
- THEN the submission succeeds without errors
- AND the user is redirected to the dashboard

#### Scenario: Form validation triggers correctly

- GIVEN a user is on the redesigned login page
- WHEN they submit the form with an invalid email format
- THEN the original validation error messages are displayed underneath the inputs
