import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/projects")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="p-8">
      <Route.Link className="text-muted-fg" to="/projects">
        Projects
      </Route.Link>
      <hr className="my-2" />
      <Outlet />
    </div>
  );
}
