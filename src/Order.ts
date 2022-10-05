import Coupon from "./Coupon";
import Cpf from "./Cpf";
import Item from "./Item";
import OrderItem from "./OrderItem";

export default class Order {
    orderItems: OrderItem[] = []
    cpf: Cpf;
    coupon?: Coupon;

    constructor(cpf: string){
        this.cpf = new Cpf(cpf)
    }

    addItem(item: Item, quantity: number){
        this.orderItems.push(new OrderItem(item.id,item.price, quantity))
    }

    addCoupon(coupon: Coupon){
        this.coupon = coupon
    }


    getTotal(){
        let total = this.orderItems.reduce((total, orderItem) => total += orderItem.getTotal(), 0)
        if(this.coupon){
            total -= this.coupon.getDiscount(total)
        }
        return total
    }
}