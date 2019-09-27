import Defaults from './_defaults.js';

let font_sizes = [6, 8, 10, 16, 30, 50, 100, 150];

let def = Defaults.get(),
    space = def.vertical_space || 30,
    x = def.x,
    y = def.y,
    template = {}
;

for (let i in font_sizes)
{
    template['Text_' + i] = Defaults.applyToText({
        x: x,
        y: y,
        text: {
            fontSize: font_sizes[i],
            text:     def.text.text,
            maxLines: 1
        }
    }, [
        'fontFace',
        'textColor'
    ]);

    y += font_sizes[i] + (font_sizes[i] > space ? space : font_sizes[i]);
}

export default template;
