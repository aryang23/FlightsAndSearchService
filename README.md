

# Welcome to Flights Service

## Project Setup
- Clone the Project on your local
- Execute `npm install` on the same path as of your root directory of the downloaded project.
- Create a `.env` file in the root directory and add the following environment variables
    - PORT = 3000
- Create a `config.json` file in the config folder and add the following configuration

```
{
  "development": {
    "username": "root",
    "password": "${Your Password}",
    "database": "Flights_Search_DB_DEV",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}
```

## DB Design

  - Airplane Table
  - Flight Table
  - Airport
  - City
   

  npx sequelize model:generate --name Airport --attributes name:String, address: String, cityId: Integer, 