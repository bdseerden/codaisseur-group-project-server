SKELETON MODEL

npx sequelize-cli model:generate --name user --attributes name:string,email:string,password:string
npx sequelize-cli model:generate --name todoList --attributes name:string
npx sequelize-cli model:generate --name todoItem --attributes task:string,deadline:string

SKELETON SEED

npx sequelize-cli seed:generate --name some-users
npx sequelize-cli seed:generate --name some-todoLists
npx sequelize-cli seed:generate --name some-todoItems

SKELETON MIGRATION

npx sequelize-cli migration:generate --name first-migration

npx sequelize-cli model:generate --name image --attributes tile:string,url:string
npx sequelize-cli model:generate --name user --attributes email:string,password:string,fullName:string
