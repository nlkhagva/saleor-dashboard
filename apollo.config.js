module.exports = {
  client: {
    addTypename: true,
    includes: ["src/**/*.ts", "src/**/*.tsx"],
    name: "dashboard",
    service: {
      // localSchemaFile: "schema.graphql",
      name: "saleodddr",
      url: "http://localhost:8000/graphql/"
    }
  }
};
