module.exports = {
    "testMatch": ["**/__tests__/**/*.[jt]s?(x)"],
    "moduleFileExtensions": [
        "js",
        "json",
        // 告诉 Jest 处理 `*.vue` 文件
        "vue"
    ],
    "transform": {
        // 用 `vue-jest` 处理 `*.vue` 文件
        ".*\\.(vue)$": "vue-jest",
        // 用 `babel-jest` 处理 js
        ".*\\.(js)$": "babel-jest"
    },
    testEnvironment: 'jsdom',
    "collectCoverage": true,
    "coverageReporters": ["json", "html"],
    "coverageProvider": 'babel',
    "collectCoverageFrom": [
        "packages/**/*.{js,jsx,vue}",
        "!**/node_modules/**",
        "!**/dist/**"
    ],
    "coverageThreshold": {
        "global": {
            "branches": 80,
            "functions": 80,
            "lines": 80,
            "statements": -10
        }
    }
}