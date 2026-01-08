export default {
  presets: [
    ['@babel/preset-env', {
      modules: false, // Keep ES modules
      targets: {
        esmodules: true,
      },
    }],
    ['@babel/preset-react', { 
      runtime: 'automatic',
      importSource: 'react'
    }]
  ],
  plugins: [],
  ignore: ['**/*.d.ts']
};