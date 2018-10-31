// ref: https://umijs.org/config/
export default {
  plugins: [
    // ref: https://umijs.org/plugin/umi-plugin-react.html
    ['umi-plugin-react', {
      antd: true,
      dva: true,
      dynamicImport: false,
      title: 'umi',
      dll: false,
      routes: {
        exclude: [],
      },
      hardSource: false,
    }],
  ],
  history: 'hash',
  "theme": {
    "@primary-color": "#8A2BE2",
    "@link-color": "#1DA57A"
  },
  "proxy": {
    "/api": {
      "target": "http://127.0.0.1:8000",
      "changeOrigin": true,
      "pathRewrite": {"^/api": "/api/"}
    }
  }
}
