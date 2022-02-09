import Account from "../models/account.model.js";
import CartItem from "../models/cartitem.model.js";
import ShoppingSession from "../models/shopping_session.model.js";

class CartService {
    async getCartByAccount(accountId) {
     return await ShoppingSession.findOne({where: {accountID: accountId}})
     .then(data => {
          CartItem.findAll({where : {sessionID : data.id}})
          .then(data => {
              console.log(data);
          })
        // console.log(data.id);
     })
    }
}
export default new CartService();