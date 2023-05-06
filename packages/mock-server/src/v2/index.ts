import { setupServer, SetupServer } from "msw/node";

import * as productHandlers from "./product";

export class MockServer {
  readonly #server: SetupServer;

  constructor() {
    this.#server = setupServer(...Object.values(productHandlers));
  }

  start() {
    this.#server.listen();
  }
  
  close() {
    this.#server.close();
  }
}