const path = require("path");

module.exports = ({ env }) => {
  const client = env("DATABASE_CLIENT", "sqlite");
  let mysqlConnectOptions = {};
  if (client === "mysql") {
    // mysql 数据库使用环境变量
    mysqlConnectOptions = {
      host: env("DATABASE_HOST", "0.0.0.0"),
      port: env("DATABASE_PORT", "3306"),
      database: env("DATABASE_NAME", "blog-strapi"),
      user: env("DATABASE_USERNAME", "user"),
      password: env("DATABASE_PASSWORD", "password"),
      timezone: env("TZ", "Asia/Shanghai"),
    };
  }

  return {
    connection: {
      client,
      connection: {
        filename: path.join(
          __dirname,
          "..",
          env("DATABASE_FILENAME", ".tmp/data.db")
        ),
        ...mysqlConnectOptions,
      },
      useNullAsDefault: true,
    },
  };
};
