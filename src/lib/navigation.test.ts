import { getSafeInternalPath } from "./navigation";

describe("getSafeInternalPath", () => {
  it("accepts an internal route", () => {
    expect(getSafeInternalPath("/(app)?tab=activity")).toBe(
      "/(app)?tab=activity",
    );
  });

  it("rejects external and protocol-relative URLs", () => {
    expect(getSafeInternalPath("https://attacker.example")).toBe("/(app)");
    expect(getSafeInternalPath("//attacker.example")).toBe("/(app)");
  });

  it("uses the supplied fallback for invalid values", () => {
    expect(getSafeInternalPath(null, "/")).toBe("/");
    expect(getSafeInternalPath("/\\\\attacker.example")).toBe("/(app)");
  });
});
