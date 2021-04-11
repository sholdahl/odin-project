import cipher from "./caesarCipher";

test("basic positive shift", () => {
    expect(cipher("abc", 1)).toBe("bcd");
});

test("retain capitalization", () => {
    expect(cipher("aBc", 1)).toBe("bCd");
});

test("negative shift", () => {
    expect(cipher("bcd", -1)).toBe("abc");
});

test("wrapping negative", () => {
    expect(cipher("abc", -3)).toBe("xyz");
});

test("wrapping positive", () => {
    expect(cipher("xyz", 3)).toBe("abc");
});

test("punctuation", () => {
    expect(cipher("abc!", 1)).toBe("bcd!");
});