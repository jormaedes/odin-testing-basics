import ceasarCipher from "../src/caesarCipher";

import caesarCipher from "../src/caesarCipher";

test("shift de 3 em letras minúsculas", () => {
  expect(caesarCipher("abc", 3)).toBe("def");
});

test("wrap de z para a", () => {
  expect(caesarCipher("xyz", 3)).toBe("abc");
});

test("preserva maiúsculas", () => {
  expect(caesarCipher("HeLLo", 3)).toBe("KhOOr");
});

test("pontuação e espaços permanecem inalterados", () => {
  expect(caesarCipher("Hello, World!", 3)).toBe("Khoor, Zruog!");
});

test("shift de 0 retorna a mesma string", () => {
  expect(caesarCipher("abc", 0)).toBe("abc");
});

test("shift de 26 retorna a mesma string", () => {
  expect(caesarCipher("abc", 26)).toBe("abc");
});

test("shift negativo", () => {
  expect(caesarCipher("def", -3)).toBe("abc");
});

test("string com números permanece inalterada", () => {
  expect(caesarCipher("abc123", 3)).toBe("def123");
});

test("string vazia retorna string vazia", () => {
  expect(caesarCipher("", 3)).toBe("");
});