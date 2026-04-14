module.exports = {
  default: {
    require: ['step-definitions/**/*.js', 'support/**/*.js'],
    format: ['progress', 'allure-cucumberjs/reporter'],
    formatOptions: {
      allure: {
        outputDir: 'reports/allure-results'
      }
    }
  }
};