import Dimension from "./Dimension"

export default class Item {
    constructor(
        readonly id: number,
        readonly description: string,
        readonly price: number,
        readonly dimension: Dimension = new Dimension(0, 0, 0, 0)
    ) { }

    getVolume() {
        return this.dimension.getVolume()

    }

    getDensity() {
        if (this.getVolume() === 0) return 0;
        return this.dimension.getDensity()
    }

}