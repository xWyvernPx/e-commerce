import Account from "../models/account.model.js";
import Orders from "../models/orders.model.js";

class OrdersService {
    async getOrdersByUser(userId) {
        return await Orders.findAll({where : {accountID : userId} ,include : [Account]});
    }
}
export default new OrdersService();