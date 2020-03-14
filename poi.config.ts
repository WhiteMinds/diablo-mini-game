import { Config } from 'poi'

const config: Config = {
  entry: 'src/index.tsx',
  output: {
    html: {
      template: 'src/index.html',
    },
  },
  plugins: [
    {
      resolve: '@poi/plugin-typescript',
      options: {
        babel: true,
      },
    },
  ],
}

export default config
