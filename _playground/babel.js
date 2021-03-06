const fsbx = require("./../build/commonjs/index.js");
const watch = require("watch");

//global.Promise = require('bluebird')
const FuseBox = fsbx.FuseBox;
const fs = require("fs");
//npm install babel-core babel-preset-latest
let fuseBox = FuseBox.init({
    homeDir: "_playground/babel",
    cache: false,
    outFile: "_playground/_build/out.js",


    plugins: [
        fsbx.SVGPlugin(),
        fsbx.CSSPlugin(),
        fsbx.BabelPlugin({
            config: {
                sourceMaps: true,
                presets: ["es2015", "stage-0", "react"],
                plugins: [
                    ["transform-react-jsx"]
                ]
            }
        })
    ]
});

fuseBox.bundle(">index.js +react-dom", true);