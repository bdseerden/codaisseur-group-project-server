SKELETON MODEL

npx sequelize-cli model:generate --name user --attributes name:string,email:string,password:string
npx sequelize-cli model:generate --name profile --attributes title:string,description:string
npx sequelize-cli model:generate --name experience --attributes name:string,content:string,imageUrl:string
npx sequelize-cli model:generate --name city --attributes name:string,experienceId:integer
npx sequelize-cli model:generate --name favorite --attributes userId:integer,experienceId:integer
npx sequelize-cli model:generate --name place --attributes name:string,description:text,latitude:string,longtitude:string,experienceId:integer
npx sequelize-cli model:generate --name image --attributes name:string,imageUrl:string,placeId:integer
npx sequelize-cli model:generate --name rating --attributes score:string,userId:integer,experienceId:integer

SKELETON SEED

npx sequelize-cli seed:generate --name some-users
npx sequelize-cli seed:generate --name some-cities
npx sequelize-cli seed:generate --name some-experiences
npx sequelize-cli seed:generate --name some-places
npx sequelize-cli seed:generate --name some-images
SKELETON MIGRATION

npx sequelize-cli migration:generate --name first-migration

npx sequelize-cli model:generate --name image --attributes tile:string,url:string
npx sequelize-cli model:generate --name user --attributes email:string,password:string,fullName:string
