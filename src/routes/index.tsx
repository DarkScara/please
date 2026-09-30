import { createFileRoute } from "@tanstack/react-router";
import { JoiApp } from "@/components/joi-app";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  return <JoiApp />;
}
