(function(window, $, kb, lodash, underscore ) {
    var $input = jQuery('.input');
    var $result = jQuery('.result');

    $input.focus();

    function shouldDisplayRaw(result) {
        return _.isNaN(result)
            || _.isNumber(result)
            || _.isString(result);
    }

    function kbDown() {
        try {
            eval("result = " + $input.val());
            if (_.isFunction(result)) {
                $result.text(result.toString());
            } else if (shouldDisplayRaw(result)) {
                $result.text(result);
            } else if (_.isUndefined(result)) {
                $result.text('undefined');
            } else if (_.isNull(result)) {
                $result.text('null');
            } else {
                $result.text(JSON.stringify(result, null, 4));
            }
            $result.css('color', 'black');
        } catch(e) {
            $result.text(e);
            $result.css('color', 'red');
        }
    }

    function kbUp(a, b, c) {
    }

    kb.on('enter', kbDown, kbUp);
})(window, jQuery, KeyboardJS, _.noConflict(), _);
