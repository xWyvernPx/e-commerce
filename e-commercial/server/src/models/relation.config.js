import ShoppingSession from "./shopping_session.model.js";
import CartItem from "./cartitem.model.js"
import Product from "./product.model.js"
import Account from "./account.model.js";
import AddressSet from "./addressSet.model.js";

import Answer from "./answer.model.js";
import Category from "./category.model.js";
import Discount from "./discount.model.js";
import Feedback from "./feedback.model.js";

import OrderItem from "./orderitem.model.js";
import Orders from "./orders.model.js";
import Payment from "./payment.model.js";
import ProductImg from "./product_img.model.js";

import ProductReview from "./product_review.model.js";
import Question from "./question.model.js"
import Subcategory from "./subcategory.model.js";
import Wishlist from "./wishlist.model.js";
Account.hasOne(ShoppingSession)
ShoppingSession.belongsTo(Account,{foreignKeyConstraint : "FK_ShoppingsessionAccount"});
// ShoppingSession.hasMany(CartItem);
// CartItem.belongsTo(ShoppingSession,{foreignKeyConstraint : "FK_CartSession",foreignKey : "sessionId"});
CartItem.belongsTo(Product,{foreignKeyConstraint : "FK_CartProduct"})
Product.hasOne(CartItem)
// CartItem.hasOne(Product,{foreignKeyConstraint : "FK_CartProduct"});
// CartItem.hasOne(ShoppingSession,{foreignKeyConstraint: "FK_CartSession"});