import { auth } from "@next-prisma-postgresql-better-auth-ultracite-skills-ruler-mcp/auth";
import { toNextJsHandler } from "better-auth/next-js";

export const { GET, POST } = toNextJsHandler(auth.handler);
