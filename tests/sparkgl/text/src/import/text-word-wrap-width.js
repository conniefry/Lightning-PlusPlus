import Defaults from './_defaults.js';

let word_wrap_widths = [
    0,
    200,
    400,
    800
];

let def = Defaults.get(),
    space = def.vertical_space || 30,
    x = def.x,
    y = def.y,
    template = {}
;

for (let i in word_wrap_widths)
{
    template['Text_' + i] = Defaults.applyToText({
        x: x,
        y: y,
        text: {
            text:          def.text.longText,
            wordWrapWidth: word_wrap_widths[i]
        }
    }, [
        'fontFace',
        'fontSize',
        'textColor',
        'maxLines'
    ]);

    y += (def.text.maxLines || 5) * (def.text.fontSize || space) + space;
}

export default template;
