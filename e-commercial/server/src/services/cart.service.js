import Account from "../models/account.model.js";
import CartItem from "../models/cartitem.model.js";
import Product from "../models/product.model.js";
import ShoppingSession from "../models/shopping_session.model.js";

class CartService {
  async getCartByAccount(accountId) {
    return await ShoppingSession.findOne({
      where: { accountID: accountId },
    }).then((data) => {
      if (data)
        return CartItem.findAll({
          where: { sessionID: data.id },
          include: [Product],
        }).then((data) =>
          data.map((ele) => {
            const product = ele.Product;
            const {
              name,
              instock,
              describe,
              brand,
              from_province,
              from_district,
              SKU,
              price,
              rating,
            } = product;
            return {
              id: ele.id,
              quantity: ele.quantity,
              product: {
                productID: product.id,
                name,
                instock,
                describe,
                brand,
                from_province,
                from_district,
                SKU,
                price,
                rating,
              },
            };
          })
        );

      // console.log(data.id);
    });
  }
  async deleteCartItem(id) {
    return await CartItem.destroy({ where: { id } });
  }
  async updateCartItem(id, amount) {
    return await CartItem.update({ quantity: amount }, { where: { id } });
  }
}
export default new CartService();
