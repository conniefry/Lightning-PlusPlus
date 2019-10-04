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

    let fontUrl = basePackageUri + "/../../static/fonts/Roboto-Italic.ttf";
    let fontUrl2 = basePackageUri + "/../../static/fonts/Roboto-Regular.ttf";


    let fontResource1 = sparkscene.create({t: "fontResource", url: fontUrl, fontStyle: "normal"}); // Ignores normal, takes italic
    let fontResource2 = sparkscene.create({t: "fontResource", url: fontUrl2, fontStyle: "oblique 45deg"}); // Makes it oblique 45 degree
    let fontResource3 = sparkscene.create({t: "fontResource", url: fontUrl2, fontStyle: "Italic"}); // Simulates "italic"
    let fontResource4 = sparkscene.create({t: "fontResource", url: fontUrl2, fontStyle: "bold"}); // Ignores bold

    promises.push(fontResource1.ready);
    promises.push(fontResource2.ready);
    promises.push(fontResource3.ready);
    promises.push(fontResource4.ready);

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
                canvas.fillText(text, 0, 80);
                console.log("Font style for fontResource1 is " + fontResource1.fontStyle);

                canvas.fillStyle = 0XFF00FFFF;
                canvas.font = fontResource2;
                canvas.fillText(text, 0, 160);
                console.log("Font style for fontResource2 is " + fontResource2.fontStyle);

                canvas.fillStyle = 0xFFCC99FF;
                canvas.font = fontResource3;
                canvas.fillText(text , 0, 240);
                console.log("Font style for fontResource3 is " + fontResource3.fontStyle);

                canvas.fillStyle = 0xFFCC55FF;
                canvas.font = fontResource4;
                canvas.fillText(text , 0, 290);
                console.log("Font style for fontResource4 is " + fontResource4.fontStyle);

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
