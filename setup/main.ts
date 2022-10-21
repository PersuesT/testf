import { defineAppSetup } from "@slidev/types";
import liveSlidev from "live-slidev";
import key from "./key.json";

const ROOM_ID = "c5e83723-9fe8-4fca-96a1-a15b70d1c59b";

export default defineAppSetup((ctx) => {
    const ws = new WebSocket("wss://rooms.deno.dev/" + ROOM_ID);
	liveSlidev(ctx, ws, key);
});
