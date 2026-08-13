import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  return (
    <div className="p-8 flex flex-col min-h-dvh gap-2 items-center justify-center text-center">
      <h1 className="text-2xl font-medium">you are on ethen.app</h1>
      <p>
        <Route.Link to="/projects">projects</Route.Link>
        <span className="text-muted-fg">{" / "}</span>
        <Route.Link to="/contact">contact</Route.Link>
        <span className="text-muted-fg">{" / "}</span>
        <Route.Link to="/old">old ethen.app</Route.Link>
      </p>
      <p className="text-xs text-muted-fg">
        Ethen's corner of the web is a work in progress at the moment. Good things are coming
        soon&trade;
      </p>
    </div>
  );
}
