import Defaults from './_defaults.js';

let def = Defaults.get();
let font_size = def.text.fontSize || 36;

let line_heights = [
    0.5 * font_size,
    1 * font_size,
    2 * font_size,
    3 * font_size,
    4 * font_size
];

let   space = def.vertical_space || 30
    , x = def.x
    , y = def.y
    , template = {}
    ;

for (let i in line_heights) {
    template['Text_' + i] = Defaults.applyToText({
        x: x,
        y: y,
        text: {
            fontSize: font_size,
            text: def.text.longText,
            lineHeight: line_heights[i]
        }
    }, [
        'fontFace',
        'textColor',
        'wordWrapWidth',
        'maxLines'
    ]);

    y += (def.text.maxLines || 5) * line_heights[i] + space;
}

export default template;
