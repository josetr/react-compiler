import BabelPluginReactCompiler from "babel-plugin-react-compiler";
import babel from "@babel/core";

const plugin: Bun.BunPlugin = {
  name: "react-compiler",
  setup({ onLoad }) {
    onLoad({ filter: /\.[tj]sx$/ }, async ({ path }) => {
      const contents = await Bun.file(path).text();
      const result = await babel.transformAsync(contents, {
        plugins: [BabelPluginReactCompiler],
        filename: path,
        parserOpts: {
          plugins: ["jsx", "typescript"]
        },
        babelrc: false,
        configFile: false,
        sourceMaps: "inline",
      });

      if (result?.code)
        return { contents: result.code };
    });
  },
}

export default plugin