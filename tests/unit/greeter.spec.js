import Greeter from "@/utils/greeter";

describe("sanity", () => {
  test("sanity ", () => {
    expect(typeof Greeter).toBe("function");
  });
});
