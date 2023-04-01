import { Application } from "https://deno.land/x/oak@v12.1.0/mod.ts";
import {
  handlers,
  LevelName,
  Logger,
} from "https://deno.land/std@0.181.0/log/mod.ts";

import { SESv2Client } from "npm:@aws-sdk/client-sesv2";
import { router } from "./routes/index.ts";

export interface ApplicationState {
  ses: SESv2Client;
  logger: Logger;
  _initialized: boolean;
}

interface ApplicationConfig {
  PORT: number;
  LOG_LEVEL: LevelName;
}

const defaultConfig: ApplicationConfig = {
  PORT: 8000,
  LOG_LEVEL: "DEBUG",
};

export class App {
  private app: Application<ApplicationState>;

  private initializeState() {
    this.app.state = {
      ses: new SESv2Client({ region: "us-east-1" }),

      //TODO: make the logger configurable
      logger: new Logger("app", this.config.LOG_LEVEL, {
        handlers: [new handlers.ConsoleHandler(this.config.LOG_LEVEL)],
      }),

      _initialized: true,
    };
  }

  private initializeRoutes() {
      console.log(router.routes());
    this.app.use(router.routes());
    this.app.state.logger.info("Routes initialized");
  }

  private setupErrorHandler() {
    this.app.addEventListener("error", (evt) => {
      console.log(evt);
    });
  }

  constructor(private config: ApplicationConfig = defaultConfig) {
    this.app = new Application();

    this.initializeState();
    this.initializeRoutes();
    this.setupErrorHandler();
  }

  public async start() {
    this.app.state.logger.info(`Listening on port ${this.config.PORT}`);
    await this.app.listen({ port: this.config.PORT });
  }
}
