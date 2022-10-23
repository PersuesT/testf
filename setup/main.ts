import { defineAppSetup } from "@slidev/types";
import liveSlidev from "live-slidev";
import key from "./key.json";

const ROOM_ID = "25bd261e-4d9f-49e2-b9ad-7b1c21931ce5";

export default defineAppSetup((ctx) => {
    const ws = new WebSocket("wss://rooms.deno.dev/" + ROOM_ID);
	liveSlidev(ctx, ws, key);
});
