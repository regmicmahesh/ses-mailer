import { App } from "./app.ts";

async function serve() {
  const app = new App();
  await app.start();
}

serve();
