  const Manager = require("../lib/manager");
const Employee = require("../lib/employee");


test("getRole() should return \"Manager\"", () => {
  const testValue = "Manager";
  const e = new Manager("Red", 1, "test@test.com", 100);
  expect(e.getRole()).toBe(testValue);
});
test("Can get id via getId()", () => {
  const testValue = 100;
  const e = new Manager("Foo", testValue);
  expect(e.getId()).toBe(testValue);
});

test("Can get office number via getOffice()", () => {
  const testValue = 100;
  const e = new Manager("Foo", 1, "test@test.com", testValue);
  expect(e.getOfficeNumber()).toBe(testValue);
});
