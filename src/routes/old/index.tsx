import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/old/")({
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
