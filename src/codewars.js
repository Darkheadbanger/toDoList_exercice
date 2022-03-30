function chained(functions) {
  return (input) => {
    console.log(input);
    return functions.reduce((input, fn) => {
      return fn(input);
    }, input);
  };
}

function f6(xs) {
  return xs.join("_");
}

Test.assertEquals(chained([f1, f2, f3])(0), 4);
Test.assertEquals(chained([f1, f2, f3])(2), 36);
Test.assertEquals(chained([f3, f2, f1])(2), 12);

Test.assertEquals(chained([f4, f5, f6])("lorem ipsum"), "merol_muspi");
