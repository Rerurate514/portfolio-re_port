import { createClient } from "honox/client";
import { initializeViewport } from "./components/viewport/client";

createClient();

const viewport = document.querySelector<HTMLElement>(".viewport");

if (viewport) {
	initializeViewport(viewport);
}
