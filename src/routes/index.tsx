import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  return (
    <div className="p-8 flex flex-col items-center justify-center min-h-dvh">
      <h1 className="text-22xl font-medium">you are on ethen.app</h1>
      <p className="mt-2">
        Ethen's corner of the web is a work in progress at the moment.{" "}
        <Route.Link to="/projects">projects</Route.Link>
      </p>
    </div>
  );
}
