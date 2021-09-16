import dotenv from 'dotenv'

dotenv.config();
const database = {
  development: {
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "postgres123",
    database: "invoicedb",
    entities: [
      "dist/**/*.model.js"
    ],
    synchronize: false
  },
}

const DatabaseConfig = () => ({
  ...database[process.env.NODE_ENV]
})

export = DatabaseConfig;