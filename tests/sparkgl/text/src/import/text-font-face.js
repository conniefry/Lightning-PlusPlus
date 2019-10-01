import Defaults from './_defaults.js';

let font_faces = [
    'RobotoBold',
    'RobotoRegular',
    'DancingScriptRegular',
    'XFINITYSansTTMedium',
    'IndieFlower'
];

let def = Defaults.get(),
    x = def.x,
    y = def.y,
    template = {};

for (let i in font_faces) {
    template['Text_' + i] = Defaults.applyToText({
        x: x,
        y: y,
        text: {
            fontFace: font_faces[i],
            text: def.text.text
        }
    }, [
        'fontSize',
        'textColor'
    ]);

    y += (def.text.fontSize || def.vertical_space) + def.vertical_space;
}

export default template;
