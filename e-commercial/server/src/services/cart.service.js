import Account from "../models/account.model.js";
import CartItem from "../models/cartitem.model.js";
import Product from "../models/product.model.js";
import ShoppingSession from "../models/shopping_session.model.js";

class CartService {
    async getCartByAccount(accountId) {
     return await ShoppingSession.findOne({where: {accountID: accountId}})
     .then(data => {
         return CartItem.findAll({where : {sessionID : data.id},include : [Product]})
          
        // console.log(data.id);
     })
    }
    async deleteCartItem(id) {
        return await CartItem.destroy({where : {id}})
    }
    async updateCartItem(id,cartItem) {
        return await CartItem.update(cartItem,{where : {id}})
    }
}
export default new CartService();