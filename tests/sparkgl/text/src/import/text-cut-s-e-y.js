import Defaults from './_defaults.js';

let def = Defaults.get(),
    font_size = def.text.fontSize || 36
;


let values = [
    {s: font_size / 2, e: 0},
    {s: font_size / 2, e: font_size / 1.1},
    {s: 0, e: font_size / 1.2}
];


let space = def.vertical_space || 30,
    x = def.x,
    y = def.y,
    template = {}
;

for (let i in values)
{
    template['Text_1_' + i] = Defaults.applyToText({
        x: x,
        y: y,
        text: {
            fontSize: font_size,
            text:     def.text.text,
            maxLines: 1,
            cutSy:    values[i].s,
            cutEy:    values[i].e
        }
    }, [
        'fontFace',
        'textColor'
    ]);

    y += font_size + space;
}


let max_lines = 3;

for (let i in values)
{
    template['Text_2_' + i] = Defaults.applyToText({
        x: x,
        y: y,
        text: {
            fontSize: font_size,
            text:     def.text.longText,
            maxLines: max_lines,
            cutSy:    values[i].s,
            cutEy:    values[i].e
        }
    }, [
        'fontFace',
        'textColor',
        'wordWrapWidth'
    ]);

    y += font_size * max_lines + space;
}


export default template;
