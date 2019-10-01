import Defaults from './_defaults.js';

let font_styles = [
    false, // attribute will not be set
    'normal',
    'italic',
    'bold',
    'italic bold',
    'oblique deg45'
];

let def = Defaults.get(),
    x = def.x,
    y = def.y,
    template = {}
;

for (let i in font_styles) {
    let tpl = {
        x: x,
        y: y,
        text: {
            text: def.text.text
        }
    };

    if (font_styles[i] !== false) {
        tpl.text.fontStyle = font_styles[i];
    }

    template['Text_' + i] = Defaults.applyToText(tpl, [
        'fontFace',
        'fontSize',
        'textColor'
    ]);

    y += (def.text.fontSize || def.vertical_space) + def.vertical_space;
}

export default template;
