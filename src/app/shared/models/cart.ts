import { CartItem } from "./cartitem";

export class Cart{
    items:CartItem[] =[];

    get totalPrice():number{
        let totalPrice = 0;
        this,this.items.forEach(item =>{
            totalPrice += item.price;
        });
        return totalPrice;
    }
}