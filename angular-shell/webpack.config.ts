import { container } from "webpack";
const deps = require("./package.json").dependencies;

module.exports = {
  output: {
    publicPath: "http://localhost:4201/",
    uniqueName: "musicapp",
    scriptType: "text/javascript",
  },
  optimization: {
    runtimeChunk: false,
  },
  devServer: {
    port: 4201,
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
    hot: true,
  },
  plugins: [
    new container.ModuleFederationPlugin({
      name: "angular-shell",
      filename: "remoteEntry.js",
      remotes: {
        settings_user: `settings_user@http://localhost:3002/remoteEntry.js`,
        store: `store@http://localhost:3004/remoteEntry.js`,
      },
    }),
  ],
};
