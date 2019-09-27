import Defaults from './_defaults.js';

let values = [-150, 0, 150];

let def = Defaults.get(),
    space = def.vertical_space || 30,
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
            text:     def.text.text,
            maxLines: 1,
            cutSx:    values[i]
        }
    }, [
        'fontFace',
        'fontSize',
        'textColor'
    ]);

    y += (def.text.fontSize || space) + space;
}


let max_lines = 3;

for (let i in values)
{
    template['Text_2_' + i] = Defaults.applyToText({
        x: x,
        y: y,
        text: {
            text:     def.text.longText,
            maxLines: max_lines,
            cutSx:    values[i]
        }
    }, [
        'fontFace',
        'fontSize',
        'textColor',
        'wordWrapWidth'
    ]);

    y += (def.text.fontSize || space) * max_lines + space;
}


export default template;
