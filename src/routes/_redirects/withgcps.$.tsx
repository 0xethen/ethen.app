import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/_redirects/withgcps/$")({
  loader: ({ params }) => {
    const target = params._splat;

    if (!target) throw new Response("Missing target URL", { status: 400 });

    const continueUrl = new URL(target);

    if (continueUrl.protocol !== "https:")
      throw new Response("Invalid target URL", { status: 400 });

    const workspaceUrl = new URL(
      "https://accounts.google.com/AccountChooser?hd=g.gcpsk12.org&service=wise",
    );

    workspaceUrl.searchParams.set("continue", continueUrl.toString());

    throw redirect({ href: workspaceUrl.toString() });
  },
});
