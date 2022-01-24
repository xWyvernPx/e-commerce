import Wishlist from "../models/wishlist.model.js"
class WishlistService {
    async getByUserId(id) {
        return await Wishlist.findAll({where: {userId : id}});
    }
}
export default new WishlistService();