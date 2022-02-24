import Account from "../models/account.model.js";
import Orders from "../models/orders.model.js";
import OrderItem from "../models/orderitem.model.js";

class OrdersService {
    async getOrdersByUser(userId) {
        return await Orders.findAll({where : {accountID : userId} ,include : [Account]});
    }
    async checkOut({userId,cart,paymentID})
     {
        return await Orders.create({
            accountID : userId,
            paymentID : paymentID,
            isProgressing : true ,
            isDone : false,
        }) .then(orders => {
            cart.forEach(ele => {
                OrderItem.create({
                    orderID : orders.id,
                    productID : ele.productID,
                    quantity : ele.quantity
                });
                return orders;
            })
        })
        
    }
}
export default new OrdersService();