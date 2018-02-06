module.exports = {
    roots: [
        "<rootDir>/src/",
        "<rootDir>/__tests__/"
    ],
    transform: {
        "^.+\\.(js|jsx)$": "babel-jest",
        ".+\\.(css|styl|less|sass|scss)$": "jest-css-modules-transform"
    },
    moduleFileExtensions: [
      "js",
      "jsx"
    ],
    moduleDirectories: [
      "<rootDir>/node_modules"
    ],
    globals: {
        "NODE_ENV": "test"
    },
    "moduleNameMapper": {
        "Actions(.*)$"      : "<rootDir>/src/actions/$1",
        "Containers(.*)$"   : "<rootDir>/src/containers/$1",
        "Middlewares(.*)$"  : "<rootDir>/src/middlewares/$1",
        "Reducers(.*)$"     : "<rootDir>/src/reducers/$1",
        "Stateless(.*)$"    : "<rootDir>/src/stateless/$1",
        "Src(.*)$"          : "<rootDir>/src/$1",
        "Styles(.*)$"       : "<rootDir>/public/css$1.scss",
    }
}
