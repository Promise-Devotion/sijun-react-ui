const base = require('./jest.config')
console.log(base)
module.exports = Object.assign({}, base, {
  collectCoverage: true,
  reporters: ['jest-junit'],
})
