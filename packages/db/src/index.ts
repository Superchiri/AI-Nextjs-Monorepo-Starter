import { PrismaPg } from "@prisma/adapter-pg";
// oxlint-disable import/no-relative-parent-imports
import { env } from "@your-repo-name/env/server";

import { PrismaClient } from "../prisma/generated/client";

const adapter = new PrismaPg({ connectionString: env.DATABASE_URL });
const prisma = new PrismaClient({ adapter });

export default prisma;
