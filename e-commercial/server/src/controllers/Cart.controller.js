import CartService from "../services/cart.service.js"
class CartController {
    async getCartByAccount(req,res) {
        const accountId = req.params.accountId;
        const data = await CartService.getCartByAccount(accountId);
        res.json(data);
    }
}
export default new CartController();