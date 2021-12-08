module.exports = {
  css: {
    loaderOptions: {
      postcss: {
        plugins: [
          require("postcss-pxtorem")({
            rootValue: 100,
            propList: ["*"],
          }),
        ],
      },
      sass: {
        prependData: `
		  @import "./src/assets/sass/global.scss";
		  `,
      },
    },
  },
};
