export default class Dimension {

    constructor(readonly width: number = 0,
        readonly height: number = 0,
        readonly length: number = 0,
        readonly weight: number = 0) { }

    getVolume() {
        return this.width / 100 * this.height / 100 * this.length / 100

    }

    getDensity() {
        return this.weight / this.getVolume()
    }
}