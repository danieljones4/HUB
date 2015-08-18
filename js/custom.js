jQuery(document).ready(function() {
    if (!("ontouchstart" in document.documentElement)) {
        document.documentElement.className += "noTouch";
    } 
    jQuery(".box-back-outer").height(jQuery(".reserve").innerHeight());
    jQuery(".reserve").height(jQuery(".box-back-outer").innerHeight());
    jQuery(".box-back").height(jQuery(".box-back-outer").innerHeight());

})