SKELETON MODEL

npx sequelize-cli model:generate --name user --attributes name:string,email:string,password:string
npx sequelize-cli model:generate --name profile --attributes title:string,description:string
npx sequelize-cli model:generate --name experience --attributes name:string,content:string,imageUrl:string

SKELETON SEED

npx sequelize-cli seed:generate --name some-users
npx sequelize-cli seed:generate --name some-todoLists
npx sequelize-cli seed:generate --name some-todoItems

SKELETON MIGRATION

npx sequelize-cli migration:generate --name first-migration

npx sequelize-cli model:generate --name image --attributes tile:string,url:string
npx sequelize-cli model:generate --name user --attributes email:string,password:string,fullName:string
