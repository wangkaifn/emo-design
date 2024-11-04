import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from '@typescript-eslint/eslint-plugin'
import prettierPlugin from 'eslint-plugin-prettier'
import { Linter } from 'eslint'

const config = {
  ignores: ['.husky', '.vscode', 'coverage', 'dist', 'node_modules', 'public'],
  rules: {
    // 添加你的规则
  },
  plugins: {
    'react-hooks': reactHooks,
    'react-refresh': reactRefresh,
    prettier: prettierPlugin,
  },
  languageOptions: {
    globals: globals.browser,
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
}

export default config
