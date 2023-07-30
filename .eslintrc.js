module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: ['cnp'],
  overrides: [
    {
      files: ['*.ts?(x)'],
      parserOptions: {
        project: 'tsconfig.eslint.json',
      },
      rules: {
        'cnp/only-import-export': 'off',
      },
    },
  ],
};
