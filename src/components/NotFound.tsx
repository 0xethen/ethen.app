import { Link, type NotFoundRouteProps } from "@tanstack/react-router";
import { Separator } from "./ui/separator";

export function NotFound({ title }: NotFoundRouteProps & { title?: string }) {
  return (
    <div className="p-8 min-h-svh flex flex-col items-center justify-center">
      <div className="flex items-center gap-4">
        <h1 className="text-2xl">404</h1>
        <Separator orientation="vertical" />
        <div>
          <p>{title || "The page you are looking for does not exist."}</p>
          <div className="flex gap-2">
            <p className="text-sm">
              go <Link to="/">home</Link>
            </p>
            <p className="text-sm">
              look at <Link to="/projects">projects</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
