import { createFileRoute, notFound } from "@tanstack/react-router";

const redirects: Record<string, string> = {
  fullstack: "https://github.com/hackgwinnett/workshops",
  nsbea:
    "/withGCPS/https://docs.google.com/forms/d/e/1FAIpQLSfA5C7ks0cOOiVBo37Aw2V2Kc9vAZiGCfDZac_D9m7C80-F4Q/viewform",
};

const to = (href: string) => {
  return href.startsWith("/") ? { to: href } : { href };
};

export const Route = createFileRoute("/_redirects/r/$slug")({
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
