import { IconRefresh } from "@tabler/icons-react";
import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createFileRoute("/randomheat/")({
  component: RouteComponent,
});

const images = Object.values(
  import.meta.glob("/public/assets/randomheat/*", {
    eager: true,
    import: "default",
    query: "?url",
  }),
) as string[];

const randomListItem = (list: string[]) =>
  list[Math.floor(Math.random() * list.length)].replace("/public", "");

function RouteComponent() {
  const [image, setImage] = useState(() => randomListItem(images));

  function refreshImage() {
    setImage((currentImage) => {
      const availableImages = images.filter((candidate) => candidate !== currentImage);
      return randomListItem(availableImages);
    });
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-dvh gap-2">
      <img className="max-h-[70vh] max-w-full object-contain" src={image} alt="Random heat" />
      <button
        className="inline-flex h-6 items-center gap-1 border border-border px-2 text-xs transition-colors hover:bg-muted"
        type="button"
        onClick={refreshImage}
      >
        <IconRefresh size={12} aria-hidden="true" />
        Refresh
      </button>
    </div>
  );
}
