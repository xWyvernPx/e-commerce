SELECT TOP (1000) [id]
      ,[username]
      ,[password]
      ,[email]
      ,[phone]
      ,[Address]
      ,[gender]
      ,[name]
      ,[bod]
      ,[last_login]
      ,[session]
      ,[token]
      ,[JWT]
      ,[ava]
      ,[active]
      ,[created_at]
      ,[modefied_at]
      ,[deleted_at]
  FROM [ecommerce].[dbo].[account]
    insert product (name,price,Rating,instock,SKU,subcategoryID,categoryID,buyCount,describe,viewCount,brand)
    values ('Go pro 8',2000,4.5,123,2321,1,1,300,'May quay phim chuyen nghiep', 123 ,'DJI')


  insert dbo.CartItem (productID,quantity,sessionID)
    values (1001,12,5)

    select * from CartItem 
    WHERE sessionID = 5