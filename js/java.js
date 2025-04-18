$(document).ready(function () {
    $(document).ready(function () {
        progressBarUpdate(1, 180);
    });

    function rotate(element, degree) {
        element.css({
            '-webkit-transform': 'rotate(' + degree + 'deg)',
            '-moz-transform': 'rotate(' + degree + 'deg)',
            '-ms-transform': 'rotate(' + degree + 'deg)',
            '-o-transform': 'rotate(' + degree + 'deg)',
            'transform': 'rotate(' + degree + 'deg)',
            'zoom': 1
        });
    }

    function progressBarUpdate(x, outOf) {
        var firstHalfAngle = 180;
        var secondHalfAngle = 0;

        // caluclate the angle
        var drawAngle = x / outOf * 360;

        // calculate the angle to be displayed if each half
        if (drawAngle <= 180) {
            firstHalfAngle = drawAngle;
        } else {
            secondHalfAngle = drawAngle - 180;
        }

        // set the transition
        rotate($(".slice1"), firstHalfAngle);
        rotate($(".slice2"), secondHalfAngle);

        // set the values on the text
        $(".status").html(x + " of " + outOf);
    }

});

