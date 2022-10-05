import Coupon from "./Coupon";
import Cpf from "./Cpf";
import FreightCalculator from "./FreightCalculator";
import Item from "./Item";
import OrderItem from "./OrderItem";

export default class Order {
    private orderItems: OrderItem[] = []
    private cpf: Cpf;
    private coupon?: Coupon;
    private freight = 0;

    constructor(cpf: string) {
        this.cpf = new Cpf(cpf)
    }

    addItem(item: Item, quantity: number) {
        const isDuplicated = this.orderItems.some(orderItem => orderItem.idItem === item.id)
        if (isDuplicated) throw new Error("Duplicated items")
        this.orderItems.push(new OrderItem(item.id, item.price, quantity))
        this.freight += FreightCalculator.calculate(item) * quantity;
    }

    addCoupon(coupon: Coupon) {
        this.coupon = coupon
    }


    getTotal() {
        let total = this.orderItems.reduce((total, orderItem) => total += orderItem.getTotal(), 0)
        if (this.coupon) {
            total -= this.coupon.getDiscount(total)
        }
        total += this.freight
        return total
    }
}