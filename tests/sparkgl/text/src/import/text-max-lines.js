import Defaults from './_defaults.js';

let max_lines = [1, 2, 3, 0];

let def = Defaults.get(),
    space = def.vertical_space || 30,
    x = def.x,
    y = def.y,
    template = {};

for (let i in max_lines) {
    template['Text_' + i] = Defaults.applyToText({
        x: x,
        y: y,
        text: {
            text: def.text.longText,
            maxLines: max_lines[i]
        }
    }, [
        'fontFace',
        'fontSize',
        'textColor',
        'wordWrapWidth'
    ]);

    y += (def.text.fontSize || space) * max_lines[i] + space;
}

export default template;
