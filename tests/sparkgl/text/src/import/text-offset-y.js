import Defaults from './_defaults.js';

let def = Defaults.get(),
    font_size = def.text.fontSize || 36;


let offsets = [
    -font_size / 2,
    0,
    2 * font_size
];

let space = def.vertical_space || 30,
    x = def.x,
    y = def.y,
    max_lines = 3,
    template = {};

for (let i in offsets) {
    template['Text_' + i] = Defaults.applyToText({
        x: x,
        y: y,
        text: {
            fontSize: font_size,
            text: def.text.longText,
            maxLines: max_lines,
            offsetY: offsets[i]
        }
    }, [
        'fontFace',
        'textColor',
        'wordWrapWidth'
    ]);

    y += font_size * max_lines + space;
}

export default template;
