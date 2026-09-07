import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_main/toybox/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="space-y-2">
      <p>
        toybox is where I put my toys & tools. check it out at{" "}
        <a href="https://toybox.ethen.app">toybox.ethen.app</a>
      </p>
      <p className="text-sm">
        active event: Ender Dragon aim trainer for my practice JFE presentation: "How to beat The
        End from <span className="italic">Minecraft</span>"
      </p>
    </div>
  );
}
