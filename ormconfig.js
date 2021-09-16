module.exports = {
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'postgres123',
    database: 'invoicedb',
    entities: ['dist/**/*.model.js'],
    //entities: ['dist/**/*.model.js',], //invoice & customer
    //entities: [__dirname + '/../**/*.entity.{js,ts}'],
    migrations: ['dist/src/migrations/*.js'],
    cli: {
      migrationsDir: 'src/database/migrations',
    },
    synchronize: true
  };
