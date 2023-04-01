import { HttpError } from "https://deno.land/x/oak@v12.1.0/mod.ts";

export interface ApplicationError extends HttpError {}
