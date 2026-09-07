import { createFileRoute, Outlet } from "@tanstack/react-router";
import { Header } from "./-components/-header.tsx";

export const Route = createFileRoute("/_main")({
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
