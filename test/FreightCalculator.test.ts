import Dimension from "../src/Dimension"
import FreightCalculator from "../src/FreightCalculator"
import Item from "../src/Item"

test("Deve calcular o frete", () => {
    const item = new Item(1, "Guitarra", 1000, new Dimension(100, 30, 10, 3))
    const freight = FreightCalculator.calculate(item)
    expect(freight).toBe(30)
})