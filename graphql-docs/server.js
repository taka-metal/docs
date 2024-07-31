const { ApolloServer, gql } = require('apollo-server');

// GraphQLスキーマを定義
// どういう風にAPIに対して問合せしているか記述されている
// クライアントはtestというクエリを実行し、0個以上の[Comic]配列を返却します
const typeDefs = gql`
  type Comic {
    title: String
    author: String
  }

  type Query {
    test: [Comic]
  }
`;

// データの定義
const comics = [
  {
    title: 'チェンソーマン',
    author: '藤本タツキ',
  },
  {
    title: 'ドラえもん',
    author: '藤子・F・不二雄',
  },
];

// Resolverの定義
// testといったキーが叩かれたときにレスポンスするものを定義しています
const resolvers = {
  Query: {
    test: () => comics,
  },
};

//初期時に、スキーマ・データ・ResolverをApolloサーバーに渡します
const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log(`Server ready at ${url}`);
});
