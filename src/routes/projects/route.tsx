import { Header } from "#/components/Header.tsx";
import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/projects")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="p-8">
      <Header />
      <hr className="my-2" />
      <div>
        <Outlet />
      </div>
    </div>
  );
}
