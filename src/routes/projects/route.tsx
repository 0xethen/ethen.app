import { Header } from "#/components/Header.tsx";
import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      {
        title: "Projects / ethen.app",
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
    <div className="p-8">
      <Header />
      <hr className="my-2" />
      <Outlet />
    </div>
  );
}
