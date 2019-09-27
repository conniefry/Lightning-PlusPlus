import Defaults from './_defaults.js';

let text_colors = [
    false,      // attribute will not set
    0xff0000ff,
    0xff00ff00,
    0xffffff00
];

let def = Defaults.get(),
    space = def.vertical_space || 30,
    x = def.x,
    y = def.y,
    template = {}
;

for (let i in text_colors)
{
    let tpl = {
        x: x,
        y: y,
        text: {
            text: def.text.text
        }
    };

    if (text_colors[i] !== false)
    {
        tpl.text.textColor = text_colors[i];
    }

    template['Text_' + i] = Defaults.applyToText(tpl, [
        'fontFace',
        'fontSize'
    ]);

    y += (def.text.fontSize || space) + space;
}

export default template;
