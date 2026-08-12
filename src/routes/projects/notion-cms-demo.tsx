import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/projects/notion-cms-demo")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div>
      <p>
        Used a Notion Workspace to cache and generate pages.{" "}
        <a href="https://stuco.cyberaspectyt.workers.dev">Demo/example link</a> and{" "}
        <a href="https://github.com/0xethen/stuco-www">source code</a>
      </p>
    </div>
  );
}
