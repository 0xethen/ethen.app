import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createFileRoute("/projects/")({
  component: RouteComponent,
});

const messages = [
  "your heart tells you to",
  "you need to mend the small, ethen-shaped hole in your soul",
  "you feel like it",
  "you get that itch for more",
  "ever",
];

function RouteComponent() {
  const [msg] = useState(messages[Math.floor(Math.random() * messages.length)]);

  return (
    <div className="flex flex-col gap-2">
      <Route.Link to="hackgwinnett-web">HackGwinnett Marketing website</Route.Link>
      <Route.Link to="notion-cms-demo">Notion CMS demo</Route.Link>
      <p className="text-sm text-muted-fg">
        I'm working on a lot more right now. Check back when {msg}
      </p>
    </div>
  );
}
