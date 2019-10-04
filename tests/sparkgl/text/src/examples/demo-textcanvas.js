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
    let root = sparkscene.root;
    let basePackageUri = px.getPackageBaseFilePath();
    let promises = [];

    let fontUrl = basePackageUri + "/../../static/fonts/XFINITYSansTT-Medium.ttf";
    let fontUrl2 = basePackageUri + "/../../static/fonts/DancingScript-Regular.ttf";
    let fontResource = sparkscene.create({t:"fontResource", url: fontUrl});
    let fontResource2 = sparkscene.create({t:"fontResource", url: fontUrl2});
    promises.push(fontResource.ready);
    promises.push(fontResource2.ready);

    let w = 700;
    let h = 300;
    let x = 100;
    let y = 100;

    Promise.all(promises).then(
        () => {
            let rect = sparkscene.create({
                t: "rect"
                , w: w
                , h: h
                , x: x
                , y: y
                , lineColor: "orange"
                , lineWidth: 2
                , parent: sparkscene.root
            });

            let canvas  = sparkscene.create({
                    t: "textCanvas"
                    , w: w
                    , h: h
                    // , parent: rect
                    // , text: "Bitter sweet"
                }
            );
    canvas.ready.then(() => {
                console.log("Canvas ready");
                canvas.parent = rect;
                canvas.font = fontResource;
                let measure;
                canvas.pixelSize = 40;
                canvas.fillStyle = 0xFFCC66FF; // Spark colors
                canvas.clip = false;

                let bl_y = 0;
                let bl_text = "Sgfeh";
                let bl_text_w = 110;

                canvas.fillText(bl_text, 0, bl_y);

                canvas.textBaseline = "alphabetic";
                canvas.fillText(bl_text, bl_text_w, bl_y);

                canvas.textBaseline = "top";
                canvas.fillText(bl_text, 2 * bl_text_w, bl_y);

                canvas.textBaseline = "hanging";
                canvas.fillText(bl_text, 3 * bl_text_w, bl_y);

                canvas.textBaseline = "middle";
                canvas.fillText(bl_text, 4 * bl_text_w, bl_y);

                canvas.textBaseline = "ideographic";
                canvas.fillText(bl_text, 5 * bl_text_w, bl_y);

                canvas.textBaseline = "bottom";
                canvas.fillText(bl_text, 6 * bl_text_w, bl_y);


                canvas.pixelSize = 20;
                canvas.textBaseline = "alphabetic";

                let text = 'I need to measure this';
                measure = canvas.measureText(text);
                console.log ('Width of "' + text + '" is ' + measure.width);
                canvas.alignHorizontal = "right";
                canvas.fillStyle = 0xFFCC66FF; // Spark colors
                canvas.fillText("Hello, World!", -50, 80);

                canvas.fillStyle = 0XFF00FFFF;
                canvas.font = fontResource2;
                canvas.pixelSize = 50;
                measure = canvas.measureText(text);
                console.log ('Width of "' + text + '" is ' + measure.width);
                canvas.alignHorizontal = "center";
                canvas.fillText("Love Vincent", 150, 150);

                //canvas.clear();

                canvas.pixelSize = 80;
                canvas.fillStyle = 0xFFCC99FF;
                //TODO: why x: -1 is not getting drawn?
                canvas.alignHorizontal = "left";
                canvas.fillText("New life!", 150, 240);
                measure = canvas.measureText(text);
                console.log ('Width of "' + text + '" is ' + measure.width);

                canvas.globalAlpha = 1.5;

                let tex = canvas.texture();
                console.log("tex: " + tex);

                let timeout = setTimeout(() => {
                    rect.lineColor = 0xFFCC99FF;
                    rect.w += 100;
                    canvas.w = rect.w;
                }, 2000);

                },
                () => {
                    console.log('Unable to create canvas');
                }
            );
       },
        () => {
            console.log("Unable to load font");
        }
    );
    console.log('done.');
}).catch(function importFailed(err) {
    console.error("Import failed for the file " + err);
});
