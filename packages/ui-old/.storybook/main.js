module.exports = {
  stories: ["../src/**/*.stories.tsx"],
  addons: [
    "@storybook/addon-a11y/preset",
    "@storybook/addon-essentials"
  ],
  webpack: config => {
    config.node = {
      fs: "empty",
      net: "empty",
      tls: "empty",
    };

    config.module.rules.push({
      test: /\.scss$/,
      use: [
        "style-loader",
        "css-loader",
        "sass-loader"
      ]
    });

    config.module.rules.push({
      enforce: "pre",
      test: /\.js$/,
      loader: "source-map-loader",
    });

    return config;
  },
  typescript: {
    check: false,
    checkOptions: {},
    reactDocgen: "react-docgen-typescript",
    reactDocgenTypescriptOptions: {
      shouldExtractLiteralValuesFromEnum: true,
      propFilter: (prop) => (prop.parent ? !/node_modules/.test(prop.parent.fileName) : true),
    },
  },
};