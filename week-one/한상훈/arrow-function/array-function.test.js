import { joinNamesToFullName, groupById } from "./array-funciton";

it("", () => {
  let john = { name: "John", surname: "Smith", id: 1 };
  let pete = { name: "Pete", surname: "Hunt", id: 2 };
  let mary = { name: "Mary", surname: "Key", id: 3 };

  let users = [john, pete, mary];

  /* 여기에 코드를 작성하세요. */

  let usersMapped = [
    { fullName: "John Smith", id: 1 },
    { fullName: "Pete Hunt", id: 2 },
    { fullName: "Mary Key", id: 3 },
  ];

  expect(users.map(joinNamesToFullName)).toEqual(usersMapped);
});

it("", () => {
  const users = [
    { id: "john", name: "John Smith", age: 20 },
    { id: "ann", name: "Ann Smith", age: 24 },
    { id: "pete", name: "Pete Peterson", age: 31 },
  ];

  const usersById = {
    john: { id: "john", name: "John Smith", age: 20 },
    ann: { id: "ann", name: "Ann Smith", age: 24 },
    pete: { id: "pete", name: "Pete Peterson", age: 31 },
  };

  expect(groupById(users)).toEqual(usersById);
});
