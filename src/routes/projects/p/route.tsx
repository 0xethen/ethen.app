import { IconArrowBack } from "@tabler/icons-react";
import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/projects/p")({
  head: () => ({
    meta: [
      {
        title: "Project / ethen.app",
      },
      // {
      //   name: "description",
      //   content: "Redirecting...",
      // },
    ],
  }),
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div>
      <Route.Link
        to="/projects"
        className="my-2 flex items-center gap-1 self-start text-muted-fg text-xs md:text-sm decoration-muted-fg/50 hover:decoration-muted-fg/80"
      >
        <>
          <IconArrowBack className="size-4" />
          {"back..."}
        </>
      </Route.Link>
      <Outlet />
    </div>
  );
}
