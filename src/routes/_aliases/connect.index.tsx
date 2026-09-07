import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/_aliases/connect/")({
  loader: () => {
    throw redirect({ to: "/contact" });
  },
});
