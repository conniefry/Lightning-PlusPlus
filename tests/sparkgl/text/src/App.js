/*
import test_template from './import/text-cut-e-x.js';
import test_template from './import/text-cut-e-y.js';
import test_template from './import/text-cut-s-e-x.js';
import test_template from './import/text-cut-s-e-y.js';
import test_template from './import/text-cut-s-x.js';
import test_template from './import/text-cut-s-y.js';
import test_template from './import/text-font-face.js';
import test_template from './import/text-font-size.js';
import test_template from './import/text-font-style.js';
import test_template from './import/text-line-height.js';
import test_template from './import/text-max-lines.js';
import test_template from './import/text-max-lines-suffix.js';
import test_template from './import/text-offset-x.js';
import test_template from './import/text-offset-y.js';
import test_template from './import/text-padding-left.js';
import test_template from './import/text-padding-offset-cut-max-lines.js';
import test_template from './import/text-padding-right.js';
import test_template from './import/text-text-align.js';
import test_template from './import/text-text-baseline.js';
import test_template from './import/text-text-color.js';
import test_template from './import/text-word-wrap-width.js';
*/
import test_template from './import/text-word-wrap-width.js';

export default class MyApp extends ux.App {
    static getFonts() {
        return [
            {family: 'RobotoRegular', url: MyApp.getPath('fonts/Roboto-Regular.ttf'), descriptors: {}}
            , {family: 'RobotoItalic', url: MyApp.getPath('fonts/Roboto-Italic.ttf'), descriptors: {}}
            , {family: 'RobotoBold', url: MyApp.getPath('fonts/Roboto-Bold.ttf'), descriptors: {}}
            , {family: 'IndieFlower', url: MyApp.getPath('fonts/IndieFlower.ttf'), descriptors: {}}
        ];
    }

    static _template() {
        return {
            BackgroundImage: {src: MyApp.getPath('bg-grayscale-1080p.png')},
            Test: test_template
        };
    }
}

MyApp.COLORS = {
    BACKGROUND: 0xff282e32
};
