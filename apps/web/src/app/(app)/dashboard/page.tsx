import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { verifySession } from "@/lib/dal";

export default async function DashboardPage() {
  const session = await verifySession();

  return (
    <div className="flex flex-col gap-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Session Active
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              Welcome, {session.user.name}
            </div>
            <p className="text-xs text-muted-foreground">
              You possess a valid auth session.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
