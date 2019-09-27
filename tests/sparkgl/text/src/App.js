import test_text_cut_e_x          from './import/text-cut-e-x.js';          // Used "wordWrapWidth", "maxLines"
import test_text_cut_e_y          from './import/text-cut-e-y.js';          // Used "wordWrapWidth", "maxLines"
import test_text_cut_s_e_x        from './import/text-cut-s-e-x.js';        // Used "wordWrapWidth", "maxLines"
import test_text_cut_s_e_y        from './import/text-cut-s-e-y.js';        // Used "wordWrapWidth", "maxLines"
import test_text_cut_s_x          from './import/text-cut-s-x.js';          // Used "wordWrapWidth", "maxLines"
import test_text_cut_s_y          from './import/text-cut-s-y.js';          // Used "wordWrapWidth", "maxLines"
import test_text_font_face        from './import/text-font-face.js';
import test_text_font_size        from './import/text-font-size.js';        // Used "maxLine: 1"
import test_text_font_style       from './import/text-font-style.js';
import test_text_line_height      from './import/text-line-height.js';      // Used "wordWrapWidth", "maxLines"
import test_text_max_lines        from './import/text-max-lines.js';        // Used "wordWrapWidth"
import test_text_max_lines_suffix from './import/text-max-lines-suffix.js'; // Used "wordWrapWidth", "maxLines"
import test_text_offset_x         from './import/text-offset-x.js';
import test_text_offset_y         from './import/text-offset-y.js';         // Used "wordWrapWidth", "maxLines"
import test_text_padding_left     from './import/text-padding-left.js';
import test_text_padding_right    from './import/text-padding-right.js';
import test_text_text_align       from './import/text-text-align.js';       // Used "wordWrapWidth", "maxLines"
import test_text_text_baseline    from './import/text-text-baseline.js';
import test_text_text_color       from './import/text-text-color.js';
import test_text_word_wrap_width  from './import/text-word-wrap-width.js';  // Used "maxLine"

import test_text_padding_offest_cut_max_lines from './import/text-padding-offset-cut-max-lines.js';

let test_template = test_text_padding_offest_cut_max_lines;

export default class MyApp extends ux.App {
    static getFonts() {
        return [
            {family: 'RobotoBold', url: MyApp.getPath('fonts/Roboto-Bold.ttf'), descriptors: {}}
            , {family: 'RobotoRegular', url: MyApp.getPath('fonts/Roboto-Regular.ttf'), descriptors: {}}
            , {family: 'DancingScriptRegular', url: MyApp.getPath('fonts/DancingScript-Regular.ttf'), descriptors: {}}
            , {family: 'XFINITYSansTTMedium', url: MyApp.getPath('fonts/XFINITYSansTT-Medium.ttf'), descriptors: {}}
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
