module.exports = {
    "env": {
        "browser": true,
        "node": true,
        "commonjs": true,
        "es6": true
    },
    "extends": "eslint:recommended",
    "parserOptions": {
        "sourceType": "script"
    },
    "rules": {
        "indent": [
            "error",
            2
        ],
        "linebreak-style": [
            "off",
            "unix"
        ],
        "no-console": [
            "error",
            {"allow": ["warn", "error", "log"]}
            ],
        "lines-around-comment": [
            "error",
            {
                "beforeBlockComment": true,
                // "beforeLineComment": true
            }
        ],
        "quotes": [
            "error",
            "single"
        ],
        "semi": [
            "error",
            "always"
        ]
    }
};
