import { describe, expect, it } from "vitest";
import request from "supertest";
import { app } from "./app";

describe("health endpoint", () => {
  it("returns server ok", () => {
    return request(app)
      .get("/health")
      .expect(200)
      .expect({ services: [{ http: "OK" }, { database: "N/A" }] });
  });
});
