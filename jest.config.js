module.exports = {
  transform: {
    "^.+\\.(ts|tsx)?$": [
      "@swc/jest",
      {
        jsc: {
          transform: {
            react: {
              runtime: "automatic",
            },
          },
        },
      },
    ],
    "^.+\\.svg$": "jest-transform-stub",
  },
  testEnvironment: "jsdom",
  verbose: true,
  silent: true,
  moduleDirectories: ["node_modules", "src"],
  resetMocks: true,
};
