import { describe, expect, it } from "vitest";

import { buildQuery } from "./build-query";

describe('buildQuery', () => {
  it('should return a function', () => {
    expect(typeof buildQuery).toBe('function')
  })
})