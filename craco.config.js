const CracoLessPlugin = require("craco-less");
const path = require("path");

/* 建立一个箭头函数 */
// __dirname返回的是当前的craco.config.js所在的绝对路径，
// 而path.resolve方法用于合并两个路径，返回值为合并后的绝对路径。
const resolve = (pathName) => path.resolve(__dirname, pathName);

module.exports = {
  // 对less进行配置
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: { "@primary-color": "#1DA57A" },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
  // 对webpack进行配置
  webpack: {
    alias: {
      // 调用了上面的箭头函数
      "@": resolve("src"),
      "@/components": resolve("src/components"),
      "@/utils": resolve("src/utils"),
    },
  },
};
