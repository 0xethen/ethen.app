import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createFileRoute("/projects/")({
  component: RouteComponent,
});

const messages = [
  "your soul tells you to",
  "you need to mend the small, ethen-shaped hole in your heart",
  "you feel like it",
  "you get that itch to find more interesting stuff",
  "ever",
];

function RouteComponent() {
  const [msg] = useState(messages[Math.floor(Math.random() * messages.length)]);

  return (
    <div className="flex flex-col gap-2">
      <Route.Link to="hackgwinnett-web">HackGwinnett Marketing website</Route.Link>
      <Route.Link to="notion-cms-demo">Notion CMS demo</Route.Link>
      <div className="flex flex-col gap-1">
        <p className="text-sm text-muted-fg">
          My portfolio is arriving soon--I'm working on a lot more right now.
        </p>
        <p className="text-xs text-muted-fg">
          come back when {msg}
        </p>
      </div>
    </div>
  );
}
