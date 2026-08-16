import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/legal")({
  validateSearch: (search) => {
    return { s: search.s || "eda" };
  },
  beforeLoad: ({ search }) => {
    if (search.s === "hgm") throw Route.redirect({ to: "/marketing-sites/hgm-privacy" });
  },
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="flex flex-col gap-4 p-4">
      <h1 className="font-semibold text-xl">ethen.app terms & privacy</h1>
      <p>
        this website (specifically www.ethen.app; this does not include any other subdomains in
        place of the "www") collects no data
      </p>
      <p>because this website is a work in progress, this is subject to change</p>
    </div>
  );
}
