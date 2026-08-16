import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/marketing-sites/hgm-privacy")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div>
      <h2>we dont collect any personal information</h2>
      <p>
        we are committed to protecting your privacy and ensuring that your personal information is
        handled with the utmost care and respect.
      </p>
      <p>
        the HackGwinnett website (www.hackgwinnett.org) does not collect any personal information
        from its users, anonymously or otherwise. No bulky Google Analytics script here!
      </p>
      <p>
        we will always update you on the website and via email (for our email list subscribers) when
        this changes. For our other software, please see their respective homepages/code
        repositories.
      </p>
    </div>
  );
}
