import { Link } from "@tanstack/react-router";

export function Header() {
  return (
    <div className="flex items-center gap-2">
      <Link className="text-muted-fg" to="/">
        home
      </Link>
      <Link
        to="/projects"
        activeProps={{ className: "text-fg" }}
        inactiveProps={{ className: "text-muted-fg" }}
      >
        projects
      </Link>
      <a
        href="https://toybox.ethen.app"
        className="cursor-not-allowed text-muted-fg decoration-muted-fg/50 opacity-50"
        onClick={(e) => e.preventDefault()}
      >
        toybox
      </a>
      <Link
        to="/old"
        activeProps={{ className: "text-fg" }}
        inactiveProps={{ className: "text-muted-fg" }}
      >
        old ethen.app
      </Link>
    </div>
  );
}
