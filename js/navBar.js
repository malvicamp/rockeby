$(document).ready(function (){
    var navigate = function(sectionName) {
        var dataSuffix = sectionName + "]";
        
        $("[data-nav-" + dataSuffix).click(function(e) {
            e.preventDefault();
            e.stopPropagation();
            $('html, body').animate({
                scrollTop: ($("[data-section-" + dataSuffix).offset().top - 75)
            }, 1250);
        });
    };
    
    navigate('styles');
    navigate('features');
    navigate('languages');
    navigate('about');
});