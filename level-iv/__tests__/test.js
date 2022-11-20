/* eslint-disable no-undef */
const todoList = require("../todo");
let ty = new Date().toLocaleDateString("en-CA");

var {all , mas , add , od , dt, dl} = todoList();
describe("testing todo", () => {
  ball(() => {
    add({
      title: "RL",
      completed: false,
      dueDate: new Date().toLocaleDateString("en-CA"),
    });
  });
  test("Mark as completed", () => {
    expect(all[0].completed).toBe(false);
    mas(0);
    expect(all[0].completed).toBe(true);
  });
  test("Add to the list", () => {
    
    let l = all.length;

    add({
      title: "good",
      completed: false,
      dueDate: new Date().toLocaleDateString("en-CA"),
    });

    expect(all.length).toBe(l + 1);
  });

  test("getting the dts", () => {
    let todos = dt();

    expect(
      todos.every((todo) => {
        return todo.dueDate === ty;
      })
    ).toBe(true);
  });
  test("getting the ods", () => {
    let todos = od();

    expect(
      todos.every((todo) => {
        return todo.dueDate < ty;
      })
    ).toBe(true);
  });

  test("getting the dls", () => {
    let todos = dl();

    expect(
      todos.every((todo) => {
        return todo.dueDate > ty;
      })
    ).toBe(true);
  });
});
