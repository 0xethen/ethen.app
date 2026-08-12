import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/projects/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="flex flex-col gap-2">
      <Route.Link to="hackgwinnett-web">HackGwinnett Marketing website</Route.Link>
      <Route.Link to="notion-cms-demo">Notion CMS demo</Route.Link>
    </div>
  );
}
