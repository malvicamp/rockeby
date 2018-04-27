$(document).ready(function(){
    var getLastDigit = function(currentText) {
        return parseInt(currentText.substr(currentText.length - 1));
    };


    var toggleClickHandler = function(dataInt, direction) {
        var dataSuffix = "-" + dataInt + "]";

        $("[data-style-toggle-" + direction + dataSuffix).click(function(e) {
            e.preventDefault();
            e.stopPropagation();
            var $toggleTextEl = $("[data-style-toggle-text" + dataSuffix);
            var currentText = $toggleTextEl.text();
            var lastDigit = getLastDigit(currentText);
            var newDigit;

            if (direction === 'left') {
                newDigit = (lastDigit === 1) ? 5 : (lastDigit - 1);
            } else {
                newDigit = (lastDigit === 5) ? 1 : (lastDigit + 1);
            }

            var $textEl = $("[data-style-text" + dataSuffix);
            $textEl.css('font-feature-settings', "'ss0" + newDigit + "'" + newDigit);
            $toggleTextEl.text(currentText.replace(/.$/, newDigit));
        })
    };

    toggleClickHandler(1, 'left');
    toggleClickHandler(2, 'left');

    toggleClickHandler(1, 'right');
    toggleClickHandler(2, 'right');
});