import Defaults from './_defaults.js';

let max_lines_suffix = [
    false, // attribute will not be set
    null,  // attribute will be set to "null"
    '',
    '...',
    '>>>'
];

let def = Defaults.get(),
    space = def.vertical_space || 30,
    x = def.x,
    y = def.y,
    template = {};

for (let i in max_lines_suffix)
{
    let tpl = {
        x: x,
        y: y,
        text: {
            text: def.text.longText
        }
    };

    if (max_lines_suffix[i] !== false)
    {
        tpl.text.maxLinesSuffix = max_lines_suffix[i];
    }

    template['Text_' + i] = Defaults.applyToText(tpl, [
        'fontFace',
        'fontSize',
        'textColor',
        'wordWrapWidth',
        'maxLines'
    ]);

    y += (def.text.fontSize || space) * (def.text.maxLines || 5) + space;
}

export default template;
