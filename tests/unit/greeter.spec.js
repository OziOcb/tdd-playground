import Greeter from "@/utils/greeter";

describe("Greeter class", () => {
  let subject;
  let date;

  beforeEach(() => {
    date = new Date();
    date.setHours(14);

    subject = new Greeter(() => date.getTime());
  });

  test("1. receive a name as input and outputs Hello <name>", () => {
    const inputs = ["Paul", "Aga", "Dawid"];

    inputs.forEach((input) => {
      expect(subject.greet(input)).toBe(`Hello ${input}`);
    });
  });

  test("2. greet trims the input", () => {
    const input = "   Paul  ";

    expect(subject.greet(input)).toBe("Hello Paul");
  });

  test("3. greet capitalizes only the first letter of the name", () => {
    const inputs = ["paul", "agA", "daWid"];
    const outputs = ["Hello Paul", "Hello Aga", "Hello Dawid"];

    inputs.forEach((input, index) => {
      expect(subject.greet(input)).toBe(outputs[index]);
    });
  });

  test("4. greet returns Good morning <name> when the time is 06:00-12:00", () => {
    date.setHours(6);
    expect(subject.greet("Paul")).toEqual("Good morning Paul");

    date.setHours(11);
    expect(subject.greet("Bob")).toEqual("Good morning Bob");

    date.setHours(12);
    expect(subject.greet("Aga")).not.toEqual("Good morning Aga");
  });

  test("5. greet returns Good evening <name> when the time is 18:00-22:00", () => {
    date.setHours(18);
    expect(subject.greet("Paul")).toEqual("Good evening Paul");

    date.setHours(21);
    expect(subject.greet("Bob")).toEqual("Good evening Bob");
  });

  test("6. greet returns Good night <name> when the time is 22:00-06:00", () => {
    date.setHours(22);
    expect(subject.greet("Paul")).toEqual("Good night Paul");

    date.setHours(5);
    expect(subject.greet("Paul")).toEqual("Good night Paul");
  });

  test("7. greet logs into console each time it is called", () => {
    const spy = jest.spyOn(console, "log");

    subject.greet("Paul");
    subject.greet("Bob");

    expect(spy).toHaveBeenCalled();
    expect(spy).toHaveBeenCalledTimes(2);
    expect(spy).toHaveBeenCalledWith("Hello Paul");
    expect(spy).toHaveBeenCalledWith("Hello Bob");

    spy.mockRestore();
  });
});
