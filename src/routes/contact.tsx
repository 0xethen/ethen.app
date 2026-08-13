import { IconArrowBack } from "@tabler/icons-react";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/contact")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="mx-auto w-fit flex flex-wrap flex-col min-h-dvh items-center justify-center text-center text-sm md:text-base">
      <Route.Link
        to=".."
        className="flex items-center gap-1 self-start text-muted-fg text-xs md:text-sm decoration-muted-fg/50 hover:decoration-muted-fg/80"
      >
        <>
          <IconArrowBack className="size-4" />
          {"back..."}
        </>
      </Route.Link>
      <p>
        send me a message:{" "}
        <span className="font-mono">
          public{" "}[{" "}a{" "}t{" "}]{" "}ethen(dot)app
        </span>
      </p>
      <p>
        or DM me on Instagram:{" "}
        <a
          href="https://instagram.com/@ethentseggai"
          rel="noopener noreferrer"
          className="font-mono"
        >
          @ethentseggai
        </a>
      </p>
    </div>
  );
}
