import Coupon from "./Coupon";
import Cpf from "./Cpf";
import Item from "./Item";
import OrderItem from "./OrderItem";

export default class Order {
    private orderItems: OrderItem[] = []
    private cpf: Cpf;
    private coupon?: Coupon;

    constructor(cpf: string) {
        this.cpf = new Cpf(cpf)
    }

    addItem(item: Item, quantity: number) {
        const isDuplicated = this.orderItems.some(orderItem => orderItem.idItem === item.id)
        if (isDuplicated) throw new Error("Duplicated items")
        this.orderItems.push(new OrderItem(item.id, item.price, quantity))
    }

    addCoupon(coupon: Coupon) {
        this.coupon = coupon
    }


    getTotal() {
        let total = this.orderItems.reduce((total, orderItem) => total += orderItem.getTotal(), 0)
        if (this.coupon) {
            total -= this.coupon.getDiscount(total)
        }
        return total
    }
}