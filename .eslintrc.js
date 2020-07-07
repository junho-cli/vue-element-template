module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/essential'
  ],
  plugins: [
    'vue'
  ],
  // parser: 'vue-eslint-parser',
  rules: {
    'no-unused-vars': [2, { 'args': 'none' }],
    // 'no-console': ['error', { allow: ['warn', 'error'] }],
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off'
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
};
