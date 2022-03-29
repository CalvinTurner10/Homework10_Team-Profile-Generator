const Intern = require("../lib/intern");

test("Can set school via constructor", () => {
  const testValue = "NYU";
  const e = new Intern("Red", 1, "test@test.com", testValue);
  expect(e.school).toBe(testValue);
});

test("getRole() should return \"Intern\"", () => {
  const testValue = "Intern";
  const e = new Intern("Red", 1, "test@test.com", "NYU");
  expect(e.getRole()).toBe(testValue);
});

test("Can get school via getSchool()", () => {
  const testValue = "NYU";
  const e = new Intern("Red", 1, "test@test.com", testValue);
  expect(e.getSchool()).toBe(testValue);
});
