import { Link } from "@tanstack/react-router";

export function Header() {
  return (
    <div className="flex items-center gap-2">
      <Link className="text-muted-fg" to="/">
        home
      </Link>
      <Link
        to="/projects"
        activeProps={{ className: "text-foreground" }}
        inactiveProps={{ className: "text-muted-fg" }}
      >
        projects
      </Link>
      <Link
        to="/old"
        activeProps={{ className: "text-foreground" }}
        inactiveProps={{ className: "text-muted-fg" }}
      >
        old.ethen.app
      </Link>
    </div>
  );
}
