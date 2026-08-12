import { cn } from "#/lib/utils";
import { IconZoomIn } from "@tabler/icons-react";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/projects/hackgwinnett-web")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="flex flex-col gap-4 p-8">
      <img
        src="https://hgm.ethen.app/assets/posts/covers/newsite-hackathon-page.png"
        className="mx-auto max-w-xl"
      />
      <hr className="my-2" />
      <p>
        A sleek, new site for HackGwinnett that makes it a lot easier for guests to find information
        and register for events. Released with a brand refresh that I also designed myself.
      </p>
      <p>
        You can <a href="https://hgm.ethen.app/programs/hackathon">register for Hackathon 6.0</a>{" "}
        right now on the new site (and maybe even catch my workshop on fullstack development...?)
      </p>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <EnlargeImage src="/assets/Screenshot2026-08-11at6.59.21PM.png" />
        <EnlargeImage src="/assets/Screenshot 2026-08-11 at 6.59.23PM.png" />
        {/*<img src="/assets/Screenshot 2026-08-11 at 6.59.21 PM.png" className="w-xl" />
          <img src="/assets/Screenshot 2026-08-11 at 6.59.23 PM.png" className="w-xl" />*/}
      </div>
      <p className="text-sm text-muted-fg">
        Beta version nearly matches performance & accessibility while performing higher in Code Best
        Practices & SEO/GEO
      </p>
      <p>
        Check it out at hgm.ethen.app.{" "}
        <a href="https://hgm.ethen.app/posts/new-website-announcement">Read the announcement</a>
      </p>
    </div>
  );
}

function EnlargeImage({ src, className }: { src: string; className?: string }) {
  return (
    <a href={src} target="_blank" rel="noopener noreferrer">
      <div className={cn("relative cursor-zoom-in", className)}>
        <img src={src} />
        <div className="absolute inset-0 bg-black/50 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <span className="text-white text-lg">
            <IconZoomIn />
          </span>
        </div>
      </div>
    </a>
  );
}
