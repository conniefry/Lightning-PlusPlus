import Defaults from './_defaults.js';

let def = Defaults.get(),
    x = def.x,
    y = def.y,
    template = {};

let values = [{
    textAlign: 'left'
}, {
    textAlign: 'center',
    cutSx: 20,
    cutSy: 60
}, {
    textAlign: 'right',
    cutSx: 20,
    cutSy: 60,
    cutEx: 220,
    cutEy: 250
}];

/*
 * Set common values
 */
for (let i in values) {
    values[i].text = def.text.longText;
    values[i].wordWrapWidth = 400;
    values[i].lineHeight = 60;
    values[i].offsetY = -45;
    values[i].paddingLeft = -15;
    values[i].paddingRight = 500;
}

/*
 * Test with maxLines
 */
for (let i in values) {
    let tpl = {
        x: x,
        y: y,
        text: JSON.parse(JSON.stringify(values[i]))
    };

    tpl.text.maxLines = 4;

    template['Text_1_' + i] = Defaults.applyToText(tpl, [
        'fontFace',
        'fontSize',
        'textColor'
    ]);

    x += 450;
}


/*
 * Test without maxLines
 */

x = def.x;
y += 300;

for (let i in values) {
    let tpl = {
        x: x,
        y: y,
        text: JSON.parse(JSON.stringify(values[i]))
    };

    template['Text_2_' + i] = Defaults.applyToText(tpl, [
        'fontFace',
        'fontSize',
        'textColor'
    ]);

    x += 450;
}

export default template;
