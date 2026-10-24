import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_redirects/bogey/")({
  beforeLoad: () => {
    throw Route.redirect({ href: "https://prod.bogey.ethen.app" });
  },
});
