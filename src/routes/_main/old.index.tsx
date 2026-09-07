import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_main/old/")({
  head: () => ({
    meta: [
      {
        title: "about old.ethen.app / ethen.app",
      },
    ],
  }),
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div>
      The previous static Svelte version of ethen.app is available at{" "}
      <a href="https://old.ethen.app">old.ethen.app</a>
    </div>
  );
}
