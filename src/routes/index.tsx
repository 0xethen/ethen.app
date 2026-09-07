import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({ component: Home });

const DEFAULT_DOMAIN = "ethen";

function Home() {
  const change = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.includes(" ")) e.target.value = e.target.value.replaceAll(" ", "");
  };

  const validate = (e: React.FocusEvent<HTMLInputElement>) => {
    if (e.target.value.trim() === "") e.target.value = DEFAULT_DOMAIN;
  };

  return (
    <>
      <div className="absolute animate-in fade-in slide-in-from-bottom-25 ease-out delay-500 fill-mode-backwards left-1/2 transform -translate-x-1/2 bottom-10 flex flex-col gap-1 items-center text-muted-fg bg-muted p-3 mt-2">
        <p className="text-sm font-medium">ethen.app is a work in progress.</p>
        <p className="text-xs">rest assured, good things are coming soon&trade;</p>
      </div>
      <div className="p-8 flex flex-col min-h-dvh gap-2 items-center justify-center text-center">
        <h1 className="text-xl">
          you are on{" "}
          <span className="font-mono font-medium">
            <input
              id="domain"
              type="text"
              className="field-sizing-content"
              defaultValue={DEFAULT_DOMAIN}
              placeholder={DEFAULT_DOMAIN}
              onChange={change}
              onBlur={validate}
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
