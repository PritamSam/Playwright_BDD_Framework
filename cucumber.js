export default {
  default: {
    paths: ['features/**/*.feature'],
    import: ['step-definitions/**/*.js', 'support/**/*.js'],

    format: [
      'progress',
      'allure-cucumberjs/reporter'
    ],

    formatOptions: {
      resultsDir: 'reports/allure-results'
    }
  }
};