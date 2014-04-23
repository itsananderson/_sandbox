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
        $result.css({
            'fontFamily': '"Courier New", Courier, monospace',
            'color': 'black'
        });
        try {
            var evalResult = eval($input.val());
            if (_.isFunction(evalResult)) {
                $result.text(evalResult.toString());
            } else if (shouldDisplayRaw(evalResult)) {
                $result.text('' + evalResult);
            } else if (_.isUndefined(evalResult)) {
                $result.text('undefined');
            } else if (_.isNull(evalResult)) {
                $result.text('null');
            } else if (evalResult instanceof HTMLElement) {
                $result.css('fontFamily', 'inherit');
                $result.text('');
                $result.append(evalResult);
            } else {
                $result.text(JSON.stringify(evalResult, null, 2));
            }
        } catch(e) {
            $result.text(e);
            $result.css('color', 'red');
        }
    }

    function kbUp(a, b, c) {}

    kb.on('enter', kbDown, kbUp);
})(window, jQuery, KeyboardJS, _.noConflict(), _);
