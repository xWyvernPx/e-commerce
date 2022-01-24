import ordersService from "../services/orders.service.js";

class OrdersController {
    async getOrdersByUser (req, res){
        const userid = req.params.id;
        const data = await ordersService.getOrdersByUser(userid);
        res.json(data);
    }
    
}

export default new OrdersController();