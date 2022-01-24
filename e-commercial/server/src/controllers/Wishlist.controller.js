import wishlistService from "../services/wishlist.service.js";

class WishlistController {
    async getByUserId(req, res) {
        const userId = req.params.id;
        const data = await wishlistService.getByUserId(userId)
        res.json(data)
    }
}
export default new WishlistController();