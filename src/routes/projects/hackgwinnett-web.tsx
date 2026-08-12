import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/projects/hackgwinnett-web")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div>
      <p>
        Check it out: <a href="https://hgm.ethen.app">Marketing site link</a>
      </p>
      <img
        src="https://hgm.ethen.app/assets/posts/covers/newsite-hackathon-page.png"
        className="w-80"
      />
    </div>
  );
}
