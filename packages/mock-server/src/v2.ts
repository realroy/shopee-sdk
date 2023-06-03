import { setupServer, SetupServer } from "msw/node";

import * as v2ProductHandlers from "./v2-product";
import * as v2OrderHandlers from "./v2-order";

export class MockServer {
  private readonly server: SetupServer;

  constructor() {
    this.server = setupServer(
      ...Object.values(v2ProductHandlers),
      ...Object.values(v2OrderHandlers)
    );
  }

  start() {
    this.server.listen();
  }

  close() {
    this.server.close();
  }
}
