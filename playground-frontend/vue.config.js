const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  outputDir: "../playground-backend/src/main/resources/static",
  transpileDependencies: true,
  devServer: {
    proxy: "http://localhost:8080",
  },
});
