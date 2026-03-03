import { AppSidebar } from "@/app/(app)/dashboard/_components/app-sidebar";
import {
  SidebarProvider,
  SidebarTrigger,
} from "@/shared/components/ui/sidebar";

export default function AppLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="flex-1 overflow-auto bg-muted/20">
        <header className="flex h-14 lg:h-[60px] items-center gap-4 border-b bg-muted/40 px-6">
          <SidebarTrigger />
          <h1 className="font-semibold text-lg">Application</h1>
        </header>
        <div className="p-4 md:p-6">{children}</div>
      </main>
    </SidebarProvider>
  );
}
