// Directions
// Return a string with the order of characters reversed
// --- Examples
//   reverse('abcd') === 'dcba'
//   reverse('Hello!') === '!olleH'

function reverse(str) {
  //   --------------------------------------------------------------------------
  //   return str.split("").reverse().join("");
  //   --------------------------------------------------------------------------
  //   function rev(val, arr) {
  //     let a;
  //     if (typeof val === "object" && val.length > 0) {
  //       a = val.shift();
  //       rev(val, arr);
  //     }
  //     a && arr.push(a);
  //     return arr;
  //   }
  //   return rev(str.split(""), []).join("");
  //   --------------------------------------------------------------------------
  //   let res = "";
  //   for (i = str.length - 1; i >= 0; i--) {
  //     res += str[i];
  //   }
  //   return res;
  //   --------------------------------------------------------------------------
  //   const output = str.split("").reduce((acc, char) => {
  //     acc = char + acc;
  //     return acc;
  //   });
  //   return output;
}

mocha.setup("bdd");
const { assert } = chai;

describe("String Reversal", () => {
  it("reverse() correctly reverses string", () => {
    assert.equal(reverse("ffaa"), "aaff");
    assert.equal(reverse("  aaff"), "ffaa  ");
  });
});

mocha.run();
