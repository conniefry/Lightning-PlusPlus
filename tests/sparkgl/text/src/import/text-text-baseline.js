import Defaults from './_defaults.js';

let values = [
    false, // attribute will not set
    'alphabetic',
    'top',
    'hanging',
    'middle',
    'ideographic',
    'bottom'
];

let def = Defaults.get(),
    text = 'Wqfegl',
    font_size = def.text.fontSize || 36,
    text_width_with_space = 6 /* quantity of chars */ * (0.69 * font_size),
    x = def.x,
    y = def.y,
    template = {
        TopLine: {
            x: 0, y: y, w: 1100, h: 1, rect: true
        },
        BottomLine: {
            x: 0, y: y + font_size, w: 1100, h: 1, rect: true
        }
    }
;

for (let i in values)
{
    let tpl = {
        x: x,
        y: y,
        text: {
            fontSize: font_size,
            text:     text
        }
    };

    if (values[i] !== false)
    {
        tpl.text.textBaseline = values[i];
    }

    template['Text_' + i] = Defaults.applyToText(tpl, [
        'fontFace',
        'textColor'
    ]);

    x += text_width_with_space;
}

export default template;
