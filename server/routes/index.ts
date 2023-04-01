import {
  HttpError,
  isHttpError,
  Router,
  Status,
} from "https://deno.land/x/oak@v12.1.0/mod.ts";

import { ApplicationState } from "../app.ts";

export const router = new Router<ApplicationState>();


router.use(async (ctx, next) => {
  try {
    await next();
  } catch (err) {
    console.log(err.test);
  }
});

router.use(async (ctx, next) => {
  ctx.response.type = "application/json";
  await next();
});

router.get("/", (ctx) => {
  ctx.response.body = "HI";
});

router.post("/", async (ctx) => {
  const body = ctx.request.body({ type: "json" });

  const data = await body.value;

  if (!data) {
    ctx.throw(Status.BadRequest, "Body is empty", { test: "asdf" });
  }
});
