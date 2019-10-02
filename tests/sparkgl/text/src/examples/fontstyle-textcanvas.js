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

    let fontUrl = basePackageUri + "/../../static/fonts/Roboto-Regular.ttf";
    let fontUrl2 = basePackageUri + "/../../static/fonts/DejaVuSans.ttf";

    let fontResource1 = sparkscene.create({t: "fontResource", url: fontUrl, fontStyle: "oblique 45deg"});
    let fontResource2 = sparkscene.create({t: "fontResource", url: fontUrl2, fontStyle: "italic"});
    let fontResource3 = sparkscene.create({t: "fontResource", url: fontUrl, fontStyle: "normal"});
    let fontResource4 = sparkscene.create({t: "fontResource", url: fontUrl, fontStyle: "bold"});

    promises.push(fontResource1.ready);
    promises.push(fontResource2.ready);
    promises.push(fontResource3.ready);

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
                canvas.pixelSize = 40;
                canvas.alignHorizontal = "left";
                canvas.clip = false;

                let measure;
                let text = 'I need to measure this';

                canvas.fillStyle = 0xFFCC66FF; // Spark colors
                canvas.font = fontResource1;
                measure = canvas.measureText(text);
                console.log ('Width of "' + text + '" is ' + measure.width);
                canvas.fillText(text, 0, 80);

                canvas.fillStyle = 0XFF00FFFF;
                canvas.font = fontResource2;
                measure = canvas.measureText(text);
                console.log ('Width of "' + text + '" is ' + measure.width);
                canvas.fillText(text, 0, 160);

                canvas.fillStyle = 0xFFCC99FF;
                canvas.font = fontResource3;
                measure = canvas.measureText(text);
                console.log ('Width of "' + text + '" is ' + measure.width);
                canvas.fillText(text , 0, 240);

                canvas.fillStyle = 0xFFCC55FF;
                canvas.font = fontResource4;
                canvas.fillText(text , 0, 290);

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
