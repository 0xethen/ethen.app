import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/connect")({
  loader: () => {
    throw redirect({ to: "/" });
  },
});
