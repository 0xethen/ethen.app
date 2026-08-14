import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  return (
    <div className="p-8 flex flex-col min-h-dvh gap-2 items-center justify-center text-center">
      <h1 className="font-mono text-2xl">
        you are on <span className="font-medium">ethen.app</span>
      </h1>
      <p>
        <Route.Link to="/projects">projects</Route.Link>
        <span className="text-muted-fg">{" / "}</span>
        <Route.Link to="/contact">contact</Route.Link>
        <span className="text-muted-fg">{" / "}</span>
        <Route.Link to="/old">old ethen.app</Route.Link>
      </p>
      <div className="flex flex-col gap-1 items-center text-xs text-muted-fg">
        <p>Ethen's corner of the web is a work in progress at the moment.</p>
        <p>Good things are coming soon&trade;</p>
      </div>
    </div>
  );
}
