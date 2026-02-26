import capitalize from "../src/capitalize.js";

test('capitaliza apenas a primeira letra', () => {
  expect(capitalize("eu sou campiao")).toEqual("Eu sou campiao");
});

test('string já capitalizada permanece igual', () => {
  expect(capitalize("Eu sou campiao")).toEqual("Eu sou campiao");
});

test('string vazia retorna string vazia', () => {
  expect(capitalize("")).toEqual("");
});