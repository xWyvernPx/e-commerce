create database ecommerce ;
go 

use ecommerce;
go

create table account (
id int identity primary key NOT NULL,
username varchar(50) NOT NULL UNIQUE,
password varchar(50) NOT NULL ,
email varchar(150) UNIQUE,
phone varchar(15) UNIQUE ,
Address nvarchar(200),
gender varchar(10) default 'male',
name nvarchar(150) NOT NULL ,
bod date default null,
last_login DATETIME default NULL,
session NVARCHAR(100),
token NVARCHAR(200),
JWT NVARCHAR(200),
ava varchar(300) default 'https://ik.imagekit.io/flamefoxeswyvernp/Project/UI_challenge/e-commecial/721756_people_512x512_iYbSPV_4G.png?updatedAt=1639321462942' ,
active bit NOT NULL,
created_at datetime default CURRENT_TIMESTAMP,
modefied_at timestamp ,
deleted_at datetime default null ,
);
go 

create table addressSet (
id int identity primary key NOT NULL,
type varchar(20) default 'home',
city nvarchar(50) NOT NULL,
district nvarchar(50) NOT NULL ,
commune nvarchar(50) NOT NULL ,
address nvarchar(100) ,
accountID int NOT NULL 
 constraint FK_AdressAccount 
foreign key (accountID) references dbo.account(id),
created_at datetime default CURRENT_TIMESTAMP,
modefied_at timestamp ,
deleted_at datetime default null ,
);

go 

create table payment (
id int identity primary key NOT NULL,
type varchar(50) NOT NULL ,
provider varchar(100) NOT NULL ,
account_no varchar(20) NOT NULL ,
expiry date NOT NULL ,
accountID int NOT NULL
constraint FK_PaymentAccount
foreign key (accountID) references dbo.account(id),
created_at datetime default CURRENT_TIMESTAMP,
modefied_at timestamp ,
deleted_at datetime default null ,
)
go

create table feedback (
id int identity primary key NOT NULL,
content ntext,
accountID int NOT NULL,
constraint FK_FeedbackAccount 
foreign key (accountID) references dbo.account(id),
created_at datetime default CURRENT_TIMESTAMP,
modefied_at timestamp ,
deleted_at datetime default null ,
) 
go

create table category (
id int identity primary key NOT NULL,
name nvarchar(50) NOT NULL,
describe ntext , 
slug varchar(50) NOT NULL ,
created_at datetime default CURRENT_TIMESTAMP,
modefied_at timestamp ,
deleted_at datetime default null ,
)
go
create table subcategory (
id int identity primary key NOT NULL,
name nvarchar(50) NOT NULL,
describe ntext , 
slug varchar(50) NOT NULL ,
categoryID int NOT NULL ,
constraint FK_SubcategoryCategory 
foreign key (categoryID) references dbo.category(id),
created_at datetime default CURRENT_TIMESTAMP,
modefied_at timestamp ,
deleted_at datetime default null ,
)
go

create table discount (
id int identity primary key NOT NULL,
name nvarchar(50) NOT NULL,
describe ntext NOT NULL ,
discount_percent int NOT NULL ,
active bit NOT NULL,
created_at datetime default CURRENT_TIMESTAMP,
modefied_at timestamp,
deleted_at datetime default null ,
)

create table product (
id int identity primary key NOT NULL,
name nvarchar(50) NOT NULL,
describe ntext NOT NULL ,
SKU int NOT NULL  ,
categoryID int NOT NULL ,
price int NOT NULL default 0,
discountID int default NULL ,
viewCount int default 0 ,
buyCount int default 0 ,
Rating float default 0 ,
instock int DEFAULT 0,
brand nvarchar(100),
from_province int DEFAULT null,
from_district int default null,
subcategoryID int Not null ,

constraint FK_ProductCategory 
foreign key (categoryID) references dbo.category(id),
constraint FK_ProductDiscount 
foreign key (discountID) references dbo.discount(id),
constraint FK_ProductSubcategory 
foreign key (subcategoryID) references dbo.subcategory(id),
created_at datetime default CURRENT_TIMESTAMP,
modefied_at timestamp ,
deleted_at datetime default null ,
)

create TABLE product_review (
id int identity primary key NOT NULL,
userId int not null,
productId int not null,
rate int default null,
content text,
appreciate int default 0,
dislike int default 0,
CONSTRAINT FK_ReviewProduct 
FOREIGN key (productId) REFERENCES product(id),
CONSTRAINT FK_ReviewUser
foreign KEY (userId) REFERENCES account(id),
created_at datetime default CURRENT_TIMESTAMP,
modefied_at timestamp ,
deleted_at datetime default null ,
)
go



create table question(
id int identity primary key NOT NULL,
userId int not null,
productId int not null,
content text,
CONSTRAINT FK_QuestionProduct 
FOREIGN key (productId) REFERENCES product(id),
CONSTRAINT FK_QuestionUser
foreign KEY (userId) REFERENCES account(id),
created_at datetime default CURRENT_TIMESTAMP,
modefied_at timestamp ,
deleted_at datetime default null ,
)
go
create table answer (
id int identity primary key NOT NULL,
userId int not null,
content text,
questId int not null,
CONSTRAINT FK_AnswerQuestion 
foreign KEY (questId) REFERENCES question(id),
CONSTRAINT FK_AnswerUser
foreign KEY (userId) REFERENCES account(id),
created_at datetime default CURRENT_TIMESTAMP,
modefied_at timestamp ,
deleted_at datetime default null ,
)
go

create table wishlist (
id int identity primary key NOT NULL,
userId int not null,
active bit,
productId int not null,
CONSTRAINT FK_WishlistProduct 
foreign KEY (productId) REFERENCES product(id),
CONSTRAINT FK_WishlistUser
foreign KEY (userId) REFERENCES account(id),
created_at datetime default CURRENT_TIMESTAMP,
modefied_at timestamp ,
deleted_at datetime default null ,
)
go


create table product_img (
id int identity primary key NOT NULL,
url text NOT NULL,
productID int NOT NULL ,
constraint FK_ImgProduct
foreign key (productID) references dbo.product(id),
created_at datetime default CURRENT_TIMESTAMP,
modefied_at timestamp ,
deleted_at datetime default null ,
)
create table shopping_session (
id int identity primary key NOT NULL,
accountID int NOT NULL ,
constraint FK_ShoppingsessionAccount 
foreign key (accountID) references dbo.account(id),
created_at datetime default CURRENT_TIMESTAMP,
modefied_at timestamp ,
deleted_at datetime default null ,
)
create table CartItem (
id int identity primary key NOT NULL,
sessionID int NOT NULL ,
productID int NOT NULL ,
quantity int default 0 ,
constraint FK_CartSession 
foreign key (sessionID) references dbo.shopping_session(id),
constraint FK_CartProduct 
foreign key (productID) references dbo.product(id),
created_at datetime default CURRENT_TIMESTAMP,
modefied_at timestamp ,
deleted_at datetime default null ,
)

create table orders(
id int identity primary key NOT NULL,
accountID int NOT NULL ,
isDone bit default 0 ,
isProgressing bit default 0 ,
paymentID int NOT NULL ,
total int default 0 ,
constraint FK_OrdersAccount 
foreign key (accountID) references dbo.account(id),
constraint FK_OrdersPayment 
foreign key (paymentID) references dbo.payment(id),
created_at datetime default CURRENT_TIMESTAMP,
modefied_at timestamp ,
deleted_at datetime default null ,
)
create table Order_item (
id int identity primary key NOT NULL,
ordersID int NOT NULL ,
productID int NOT NULL ,
quantity int default 0 ,
constraint FK_ItemOrder 
foreign key (ordersID) references dbo.orders(id),
constraint FK_ItemProduct 
foreign key (productID) references dbo.product(id),
created_at datetime default CURRENT_TIMESTAMP,
modefied_at timestamp ,
deleted_at datetime default null ,
)

create table SeoTag (
id int identity primary key not null ,
name nvarchar(100) not null,
created_at datetime default CURRENT_TIMESTAMP,
modefied_at timestamp ,
deleted_at datetime default null ,
)