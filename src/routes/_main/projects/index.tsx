import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createFileRoute("/_main/projects/")({
  head: () => ({
    meta: [
      {
        title: "Projects / ethen.app",
      },
      // {
      //   name: "description",
      //   content: "Redirecting...",
      // },
    ],
  }),
  component: RouteComponent,
});

const messages = [
  " your soul tells you to",
  " you need to mend the small, ethen-shaped hole in your heart",
  " you feel like it",
  " you get that itch to see more interesting stuff",
  " you want to see cool web stuff",
  " you ever want to be bored still but in a different flavor",
  " you're curious about what's out there",
  " you want to see what I've been working on",
  " you're looking for something new",
  "ever",
  "ever. any reason. why not?",
  "ever. you might find something you like. or not. but why not check it out?",
];

function RouteComponent() {
  const [msg] = useState(messages[Math.floor(Math.random() * messages.length)]);

  return (
    <div className="flex flex-col gap-2">
      <Route.Link to="p/hackgwinnett-web">HackGwinnett Marketing website</Route.Link>
      <Route.Link to="p/notion-cms-demo">Notion CMS demo</Route.Link>
      <div className="flex flex-col gap-1 text-sm text-muted-fg">
        <p>My portfolio is arriving soon--I'm working on a lot more right now.</p>
        <p>come back when{msg}</p>
      </div>
    </div>
  );
}
