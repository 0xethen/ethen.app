import { createFileRoute, notFound } from "@tanstack/react-router";

const redirects: Record<string, string> = {
  hgfullstack: "https://github.com/0xethen/fullstack-workshop",
};

const to = (href: string) => {
  return href.startsWith("/") ? { to: href } : { href };
};

export const Route = createFileRoute("/r/$slug")({
  head: () => ({
    meta: [
      {
        title: "Redirecting...",
      },
      // {
      //   name: "description",
      //   content: "Redirecting...",
      // },
    ],
  }),
  loader: ({ params }) => {
    const { slug } = params;

    if (redirects[slug]) {
      return Route.redirect(to(redirects[slug]));
    }

    throw notFound();
  },
});
