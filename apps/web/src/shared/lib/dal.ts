import { auth } from "@your-repo-name/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

export const verifySession = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session?.user) {
    redirect("/login");
  }

  return session;
};
