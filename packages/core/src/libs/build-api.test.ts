import { describe, expect, it } from "vitest";

import { buildApi } from "./build-api";

describe('buildApi', () => {
  it('should return a function', () => {
    expect(typeof buildApi).toBe('function')
  })
})