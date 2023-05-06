import { setupServer, SetupServer } from "msw/node";

import * as v2ProductHandlers from "./v2-product";

export class MockServer {
  private readonly server: SetupServer;

  constructor() {
    this.server = setupServer(...Object.values(v2ProductHandlers));
  }

  start() {
    this.server.listen();
  }
  
  close() {
    this.server.close();
  }
}