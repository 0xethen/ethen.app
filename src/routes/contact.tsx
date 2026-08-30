import { Header } from "#/components/Header.tsx";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      {
        title: "Contact / ethen.app",
      },
      // {
      //   name: "description",
      //   content: "Redirecting...",
      // },
    ],
  }),
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="min-h-dvh p-8">
      <Header />
      <div className="mx-auto w-fit flex flex-wrap flex-col gap-1 min-h-[calc(100vh-128px)] items-center justify-center text-center text-sm md:text-base">
        <p>
          send me a message:{"  "}
          <span className="font-mono">
            public{" "}[{" "}a{" "}t{" "}]{" "}(this_domain)
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
    </div>
  );
}
