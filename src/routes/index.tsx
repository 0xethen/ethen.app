import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  return (
    <div className="p-8 flex flex-col items-center justify-center min-h-dvh">
      <h1 className="text-3xl font-semibold">welcome to ethen.app</h1>
      <p className="mt-2">
        Ethen's corner of the web. <Route.Link to="/projects">projects (WIP)</Route.Link>
      </p>
    </div>
  );
}
