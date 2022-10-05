export default class Coupon {
    constructor(
        readonly code: string,
        readonly percent: number,
    ){}

    getDiscount(total: number){
        return total * (this.percent / 100)
    }
}