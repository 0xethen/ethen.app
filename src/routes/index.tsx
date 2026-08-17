import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  return (
    <div className="p-8 flex flex-col min-h-dvh gap-2 items-center justify-center text-center">
      <h1 className="text-2xl">
        you are on <span className="font-mono font-medium">ethen.app</span>
      </h1>
      <div className="flex flex-col gap-1 items-center text-muted-fg bg-muted p-3 mt-2">
        <p className="text-sm font-medium">ethen.app is a work in progress.</p>
        <p className="text-xs">rest assured, good things are coming soon&trade;</p>
      </div>
      <p>
        <Route.Link to="/projects">projects</Route.Link>
        <span className="text-muted-fg">{" / "}</span>
        <Route.Link to="/contact">contact</Route.Link>
        <span className="text-muted-fg">{" / "}</span>
        <Route.Link to="/old">old</Route.Link>
      </p>
    </div>
  );
}
