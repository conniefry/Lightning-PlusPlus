import Defaults from './_defaults.js';

let text_align = [
    false, // attribute will not set
    'left',
    'center',
    'right'
];

let def = Defaults.get(),
    space = def.vertical_space || 30,
    x = def.x,
    y = def.y,
    template = {}
;

for (let i in text_align)
{
    let tpl = {
        x: x,
        y: y,
        text: {
            text:     def.text.text,
            maxLines: 1,
        }
    };

    if (text_align[i] !== false)
    {
        tpl.text.textAlign = text_align[i];
    }

    template['Text_1_' + i] = Defaults.applyToText(tpl, [
        'fontFace',
        'fontSize',
        'textColor'
    ]);

    y += (def.text.fontSize || space) + space;
}


let max_lines = 3;

for (let i in text_align)
{
    let tpl = {
        x: x,
        y: y,
        text: {
            text:     def.text.longText,
            maxLines: max_lines
        }
    };

    if (text_align[i] !== false)
    {
        tpl.text.textAlign = text_align[i];
    }

    template['Text_2_' + i] = Defaults.applyToText(tpl, [
        'fontFace',
        'fontSize',
        'textColor',
        'wordWrapWidth'
    ]);

    y += (def.text.fontSize || space) * max_lines + space;
}


export default template;
