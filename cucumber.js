export default {
  default: {
    paths: ['features/**/*.feature'],
    import: ['step-definitions/**/*.js', 'support/**/*.js'],
    format: ['progress', 'allure-cucumberjs/reporter'],
    formatOptions: {
      allure: {
        outputDir: 'reports/allure-results'
      }
    }
  }
};