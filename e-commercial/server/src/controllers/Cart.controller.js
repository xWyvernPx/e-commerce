import CartService from "../services/cart.service.js"
class CartController {
    async getCartByAccount(req,res) {
        const accountId = req.params.accountId;
        const data = await CartService.getCartByAccount(accountId);
        
        res.json(data);
    }
    async deleteCartItem(req,res) {
        const cartId = req.params.cartId;
        const rs = await CartService.deleteCartItem(cartId);
        res.json(rs);
    }
    async updateCartItem(req,res) {
        const newData = res.body.payload;
        const cartID = req.params.cartId;
        const rs = await CartService.updateCartItem(newData,cartID);
        res.json(rs);
    }
}
export default new CartController();