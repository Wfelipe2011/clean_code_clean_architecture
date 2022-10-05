import Item from "./Item";

export default class FreightCalculator {

    static calculate(item: Item) {
        return item.getVolume() * 1000 * (item.getDensity() / 100)
    }
}