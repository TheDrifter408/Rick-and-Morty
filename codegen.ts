
import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: "https://rickandmortyapi.com/graphql/",
  documents:["src/**/*.tsx"],
  ignoreNoDocuments:true,
  generates: {
    "src/gql/": {
      preset: "client",
      plugins:[]
    },
  },
};

export default config;
