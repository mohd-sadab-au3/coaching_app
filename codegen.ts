import { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  schema: "https://relevance-sega-cartridges-rise.trycloudflare.com/graphql/",
  documents: ['lib/graphql/**/*.ts'],
  ignoreNoDocuments: true,
  generates: {
    './lib/graphql/generated/': {
      preset: 'client',
      plugins: [],
      presetConfig: {
        gqlTagName: 'gql',
      },
      config: {
        skipTypename: false,
        withHooks: true,
        withHOC: false,
        withComponent: false,
        scalars: {
          DateTime: 'string',
          Date: 'string',
          Decimal: 'number',
          GenericScalar: 'any',
        },
      },
    },
  },
}

export default config;