import { axiosClient } from "./axiosClient";
class CartAPI {
  async getCartByAccount(accountId) {
    const url = `/cart/${accountId}`;
    const data = await axiosClient.get(url);
    return data;
  }
  async updateCartWithAmount(cartID, amount) {
    const url = `/cart/${cartID}`;
    return await axiosClient.put(url, amount);
  }
  async addToCart(cartID) {}
}
export default new CartAPI();
