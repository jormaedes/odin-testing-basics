import reverseString from "../src/reverseString";

test('revese de "jormaedes"', ()=>{
	expect(reverseString("jormaedes")).toEqual("sedeamroj");
})

test('string vazia retorna string vazia', () => {
  expect(reverseString("")).toEqual("");
});

test('string com um único caractere retorna o mesmo caractere', () => {
  expect(reverseString("a")).toEqual("a");
});

test('string com espaços', () => {
  expect(reverseString("hello world")).toEqual("dlrow olleh");
});

test('string com números', () => {
  expect(reverseString("abc123")).toEqual("321cba");
});

test('palíndromo retorna a mesma string', () => {
  expect(reverseString("arara")).toEqual("arara");
});