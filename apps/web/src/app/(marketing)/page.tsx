import type { Metadata } from "next";
import Link from "next/link";

import { Badge } from "@/shared/components/ui/badge";
import { Button } from "@/shared/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/shared/components/ui/card";

export const metadata: Metadata = {
  description:
    "A production-ready Next.js 15 starter template with Better Auth, Prisma ORM, PostgreSQL, Tailwind CSS v4, shadcn/ui, and best-practice tooling via Ultracite.",
  keywords: [
    "Next.js template",
    "Better Auth",
    "Prisma",
    "PostgreSQL",
    "shadcn/ui",
    "Tailwind CSS",
    "TypeScript",
    "starter kit",
  ],
  openGraph: {
    description:
      "A production-ready Next.js 15 template with authentication, database ORM, and best-practice tooling.",
    title: "Next.js Starter Template — Better Auth, Prisma & PostgreSQL",
    type: "website",
  },
  title: "Next.js Starter Template — Better Auth, Prisma & PostgreSQL",
};

const FEATURES = [
  {
    badge: "Auth",
    description:
      "Full-featured authentication with email/password, session management, and extensible plugins.",
    icon: "🔐",
    title: "Better Auth",
  },
  {
    badge: "Database",
    description:
      "Type-safe database access with auto-generated queries, migrations, and Prisma Studio.",
    icon: "🗄️",
    title: "Prisma ORM",
  },
  {
    badge: "Storage",
    description:
      "Production-grade relational database with ACID compliance, indexing, and scalable storage.",
    icon: "🐘",
    title: "PostgreSQL",
  },
  {
    badge: "UI",
    description:
      "Accessible, composable UI components built on Radix primitives with Tailwind CSS v4 theming.",
    icon: "🎨",
    title: "shadcn/ui + Tailwind v4",
  },
  {
    badge: "DX",
    description:
      "Zero-config linting and formatting powered by Oxlint and Oxfmt for clean, consistent code.",
    icon: "🧹",
    title: "Ultracite",
  },
  {
    badge: "AI",
    description:
      "Built-in AI agent skills, Model Context Protocol tools, and Spec-Driven Development workflow.",
    icon: "🤖",
    title: "AI-Ready Skills & MCP",
  },
] as const;

const TECH_STACK = [
  {
    color: "bg-black text-white dark:bg-white dark:text-black",
    icon: "▲",
    name: "Next.js 15",
  },
  { color: "bg-sky-500 text-white", icon: "⚛", name: "React 19" },
  { color: "bg-blue-600 text-white", icon: "TS", name: "TypeScript" },
  { color: "bg-indigo-600 text-white", icon: "◈", name: "Prisma" },
  { color: "bg-blue-800 text-white", icon: "🐘", name: "PostgreSQL" },
  { color: "bg-violet-600 text-white", icon: "🔐", name: "Better Auth" },
  { color: "bg-cyan-500 text-white", icon: "🌊", name: "Tailwind v4" },
  {
    color: "bg-neutral-800 text-white dark:bg-neutral-200 dark:text-black",
    icon: "🎨",
    name: "shadcn/ui",
  },
  { color: "bg-orange-500 text-white", icon: "🥟", name: "Bun" },
  { color: "bg-red-500 text-white", icon: "⚡", name: "Turborepo" },
  { color: "bg-emerald-600 text-white", icon: "✦", name: "Ultracite" },
] as const;

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden border-b bg-gradient-to-br from-background via-background to-primary/5 px-6 py-24 md:py-32 text-center">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent pointer-events-none" />
        <div className="relative mx-auto max-w-4xl">
          <Badge
            variant="outline"
            className="mb-6 border-primary/30 text-primary"
          >
            ✨ Public Template — Free to use
          </Badge>
          <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            Production-Ready{" "}
            <span className="text-primary">Next.js Starter</span>
          </h1>
          <p className="mx-auto mb-10 max-w-2xl text-lg text-muted-foreground md:text-xl">
            A full-stack template with authentication, database ORM, modern UI
            components, AI tooling, and strict code quality — everything you
            need to ship fast.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row justify-center">
            <Button size="lg">
              <Link href="/login">Get Started</Link>
            </Button>
            <Button size="lg" variant="outline">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                View on GitHub
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="px-6 py-20 md:py-28">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <h2 className="mb-3 text-3xl font-bold tracking-tight">
              Everything You Need
            </h2>
            <p className="text-muted-foreground">
              Batteries-included tooling so you can focus on your product.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {FEATURES.map((feature) => (
              <Card
                key={feature.title}
                className="group relative overflow-hidden border-muted/50 transition-shadow hover:shadow-md"
              >
                <CardHeader className="pb-3">
                  <div className="mb-2 flex items-center justify-between">
                    <span className="text-3xl" aria-hidden="true">
                      {feature.icon}
                    </span>
                    <Badge variant="secondary" className="text-xs">
                      {feature.badge}
                    </Badge>
                  </div>
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="border-t bg-muted/20 px-6 py-20 md:py-28">
        <div className="mx-auto max-w-5xl">
          <div className="mb-12 text-center">
            <h2 className="mb-3 text-3xl font-bold tracking-tight">
              Technology Stack
            </h2>
            <p className="text-muted-foreground">
              Built on battle-tested, modern open-source technologies.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {TECH_STACK.map((tech) => (
              <div
                key={tech.name}
                className={`flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold shadow-sm ${tech.color}`}
              >
                <span aria-hidden="true">{tech.icon}</span>
                <span>{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="border-t px-6 py-20 md:py-28 text-center">
        <div className="mx-auto max-w-2xl">
          <h2 className="mb-4 text-3xl font-bold tracking-tight">
            Ready to build?
          </h2>
          <p className="mb-8 text-muted-foreground">
            Clone the template, configure your environment, and start shipping
            your product today.
          </p>
          <Button size="lg">
            <a
              href="https://github.com/IvanTsxx/AI-Nextjs-Monorepo-Starter"
              target="_blank"
              rel="noopener noreferrer"
            >
              View on GitHub
            </a>
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t px-6 py-8 text-center text-sm text-muted-foreground">
        <p>
          Open-source starter template. Built with ❤️ using Next.js, Prisma &
          Better Auth.
        </p>
      </footer>
    </div>
  );
}
