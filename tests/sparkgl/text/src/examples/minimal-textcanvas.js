/**
 * Spark application
 * author: sgladk001c
 */

"use strict";

px.configImport({"px.local:": px.getPackageBaseFilePath()+"/"});

px.import({
    scene:  "px:scene.1.js"
}).then( function ready(imports) {
    let sparkscene = imports.scene;

    let canvas  = sparkscene.create({t: "textCanvas"});

    canvas.ready.then(() => {
        canvas.parent = sparkscene.root;
        canvas.fillText("Hello, World!", 0, 20);
    });

}).catch(function importFailed(err) {
    console.error("Import failed for the file: " + err);
});
