const { override, fixBabelImports, addLessLoader } = require('customize-cra');
const path = require('path');

module.exports = override(
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: true
  }),
  addLessLoader({
    modifyVars: { hack: `true; @import "${path.join(__dirname, '/src/styles/index.less')}";` },
    javascriptEnabled: true
  })
);
