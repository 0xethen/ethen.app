import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";

export const Route = createFileRoute("/")({ component: Home });

const DEFAULT_DOMAIN = "ethen";

function Home() {
  const [domain, setDomain] = useState(DEFAULT_DOMAIN);

  useEffect(() => {
    setDomain(localStorage.getItem("domain") || domain);
  }, [localStorage]);

  const change = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDomain(e.target.value.replaceAll(" ", ""));
    localStorage.setItem("domain", domain.trim() || DEFAULT_DOMAIN);
  };

  const leave = () => {
    localStorage.setItem("domain", domain.trim() || DEFAULT_DOMAIN);
  };

  return (
    <>
      <div className="text-center w-full absolute flex flex-col items-center animate-in fade-in slide-in-from-bottom-25 ease-out delay-500 fill-mode-backwards left-1/2 transform -translate-x-1/2 bottom-10">
        <div className="flex flex-col gap-1 items-center text-muted-fg bg-muted p-3 mt-2 w-fit">
          <p className="text-sm font-medium">ethen.app is a work in progress.</p>
          <p className="text-xs">rest assured, good things are coming soon&trade;</p>
        </div>
      </div>

      <div className="p-8 flex flex-col min-h-dvh gap-2 items-center justify-center text-center">
        <h1 className="text-xl">
          you are on{" "}
          <span className="font-mono font-medium">
            <input
              id="domain"
              type="text"
              className="field-sizing-content"
              value={domain}
              placeholder={DEFAULT_DOMAIN}
              onChange={change}
              onBlur={leave}
            />
            .app
          </span>
        </h1>
        <p>
          <Route.Link to="/projects">projects</Route.Link>
          <span className="text-muted-fg">{" / "}</span>
          <Route.Link to="/contact">contact</Route.Link>
          <span className="text-muted-fg">{" / "}</span>
          <Route.Link to="/old">old</Route.Link>
        </p>
      </div>
    </>
  );
}
