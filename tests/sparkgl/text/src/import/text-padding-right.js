import Defaults from './_defaults.js';

let paddings = [-50, 0, 50];

let def = Defaults.get(),
    space = def.vertical_space || 30,
    x = def.x,
    y = def.y,
    template = {};

for (let i in paddings) {
    template['Text_' + i] = Defaults.applyToText({
        x: x,
        y: y,
        text: {
            text: def.text.text,
            paddingRight: paddings[i]
        }
    }, [
        'fontFace',
        'fontSize',
        'textColor'
    ]);

    y += (def.text.fontSize || space) + space;
}

export default template;
