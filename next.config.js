const withReactSvg = require('next-react-svg')
var path = require('path')

module.exports = withReactSvg({
  include: path.resolve(__dirname, 'images/svg'),
  webpack(config, options) {
    return config
  }
})