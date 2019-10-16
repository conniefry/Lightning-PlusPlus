import Defaults from './_defaults.js';

let font_effects = [
    false // effect will not be set
    // Shadow: Pastel Purple
    , {shadow: true, shadowColor: 0xffa8a8eb, shadowOffsetX: 4, shadowOffsetY: 4, shadowBlur: 2}
    // Shadow: Pale Olive Green
    , {shadow: true, shadowColor: 0xffaedb78, shadowOffsetX: -5, shadowOffsetY: -5, shadowBlur: 4}
    // Highlight: Pale Olive Green
    , {
        highlight: true,
        highlightColor: 0xffaedb78,
        highlightOffset: 0,
        highlightPaddingLeft: 0,
        highlightPaddingRight: 0
    }
    // Shadow: Pastel Purple, Highlight: Pale Olive Green
    , {
        shadow: true,
        shadowColor: 0xffa8a8eb,
        shadowOffsetX: -5,
        shadowOffsetY: -5,
        shadowBlur: 4,
        highlight: true,
        highlightColor: 0xffaedb78,
        highlightOffset: 0,
        highlightPaddingLeft: 100,
        highlightPaddingRight: 100
    }
];

let def = Defaults.get();
let x = def.x, y = def.y;
let template = {};

for (let i in font_effects) {
    let tpl = {
        x: x,
        y: y,
        text: {
            text: def.text.text
        }
    };

    if (font_effects[i] !== false) {
        Object.assign(tpl.text, font_effects[i]);
    }

    template['Text_' + i] = Defaults.applyToText(tpl, [
        'fontFace'
        , 'fontSize'
        , 'textColor'
    ]);

    y += (def.text.fontSize || def.vertical_space) + def.vertical_space;
}

export default template;
