import { sort, search, newsList } from "./main.js";


test("Sort function ascending", () => {
  expect(sort()).toBe(newsList.sort((a, b) => (a < b ? -1 : 1)));
});

test("Sort function descending", () => {
  expect(sort()).toBe(newsList.sort((a, b) => (a > b ? -1 : 1)))
});

test("Search function test", () => {
  expect(search()).toEqual(["'Nightmare' TV show 'Euphoria - health threat or high art?"]);
})