# Marketing / Landing Page Specification

## Purpose

This spec covers the visual redesign and functional requirements of the marketing landing page (`/(marketing)/page.tsx`), transforming it from a basic placeholder into a premium, high-conversion showcase for the template.

## Requirements

### Requirement: Show Template Features

The system MUST display a section highlighting the core features of the template (e.g., Auth, DB, Architecture).

#### Scenario: User views the features section

- GIVEN a user visits the landing page
- WHEN they scroll to the features section
- THEN they see a grid or list of template features
- AND each feature has a title, description, and an accompanying mock icon

### Requirement: Display Technologies Used

The system MUST prominently display the technologies included in the stack (Next.js, Better Auth, Prisma, PostgreSQL, Ultracite, Tailwind v4, shadcn/ui).

#### Scenario: User views the technologies section

- GIVEN a user visits the landing page
- WHEN they view the technologies area
- THEN they see logos or styled badges representing the core stack
- AND the presentation utilizes the primary brand color (#50986b) for accents

### Requirement: Use shadcn/ui Components

The system MUST construct the landing page UI strictly using `shadcn/ui` components (e.g., Cards, Buttons, Typography).

#### Scenario: Interface adheres to design system

- GIVEN a developer inspecting the code or visual layout
- WHEN they review the components used on the landing page
- THEN all standard UI elements (buttons, cards) are instances of `shadcn/ui` components

### Requirement: SEO Metadata Optimization

The landing page MUST export proper Next.js `metadata` configured for search engine discoverability.

#### Scenario: Search engine bot crawls the page

- GIVEN a search engine crawler processes the landing page
- WHEN the crawler reads the `<head>` of the document
- THEN it finds a descriptive `<title>` and `<meta name="description">`
- AND semantic HTML tags (e.g., `<h1>`, `<section>`) are properly structured inside the `<body>`
