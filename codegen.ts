
import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: "https://rickandmortyapi.com/graphql/",
  ignoreNoDocuments:true,
  generates: {
    './src/graphql/graphql.ts': {
      plugins:['typescript','typescript-graphql-request'],
      config: {
        documentMode: 'string',
        rawRequest:true
      }
    },
  }
}

export default config;
