export default Defaults;

let def = {
    x: 50,
    y: 50,
    vertical_space: 30,
    text: {
        fontFace: 'RobotoRegular',
        fontSize:  36,
        text:      'Text a little too long so this part won\'t be visible',
        longText:  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        textColor: 0xffff00ff,
        wordWrapWidth: 800,
        maxLines: 2,
    }
};

let Defaults = {
    get: function(prop) {
        let val = JSON.parse(JSON.stringify(def));
        if (!prop) {
            return val;
        }
        let keys = prop.split('.');
        for (let i in keys) {
            if (typeof (val[keys[i]]) == 'undefined') {
                return undefined;
            }
            val = val[keys[i]];
        }
        return val;
    },
    applyToText: function(obj, props) {
        for (let i in props) {
            let prop = props[i];
            if (typeof(def.text[prop]) != 'undefined' && def.text[prop] !== false) {
                obj.text[prop] = def.text[prop];
            }
        }
        return obj;
    }
};
