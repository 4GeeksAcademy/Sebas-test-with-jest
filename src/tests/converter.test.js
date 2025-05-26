const { fromDollarToYen, fromEuroToDollar, fromYentoPound} = require ("../converter.js");

test("Convierte 1 dolar a yenes" , () => {
    expect(fromDollarToYen(1)).toBeCloseTo(142.79);
});

test("Convierte 1 euro a dolares" , () => {
    expect(fromEuroToDollar(1)).toBeCloseTo(1.14);
});
test("Convierte 1 yen a libras" , () => {
    expect(fromYentoPound(1)).toBeCloseTo(0.0052);
});