import { createClient } from "honox/client";
import { initializeViewport } from "./components/viewport/client";
import { initializeBackDrop } from "./components/background/back_drop/client";

createClient();

const viewport = document.querySelector<HTMLElement>(".viewport-layer");

if (viewport) {
	initializeViewport(viewport);
}

initializeBackDrop();
