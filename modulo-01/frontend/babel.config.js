// transpiler para o ambiente corrente e preset favorável ao react (JSX)
module.exports = {
  presets: ["@babel/preset-env", "@babel/preset-react"],
  plugins: ["@babel/plugin-transform-runtime"],
};
