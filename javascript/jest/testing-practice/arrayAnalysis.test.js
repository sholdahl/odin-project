import analyze from "./arrayAnalysis";

test("basic test", () => {
    expect(analyze([2,4,6,8,10,12,14])).toEqual({average: 8, min: 2, max: 14, length: 7})
});