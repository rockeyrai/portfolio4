const isProd = process.env.NODE_ENV === 'production';

module.exports = {
  output: 'export',
  assetPrefix: isProd ? '/portfolio4/' : '',
  basePath: isProd ? '/portfolio4' : '',
};