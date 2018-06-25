$(document).ready(function() {
    if($(window).width() >= 768) {
        $("a").removeAttr("data-toggle");
        $("#messenger").addClass("show");
        $("#contacts").addClass("show")
    } 

    $(window).resize(function() {
        if($(window).width() >= 768) {
            $("a").removeAttr("data-toggle");
            $("#messenger").addClass("show");
            $("#contacts").addClass("show")
        } else {
            $("a").attr("data-toggle", "collapse");
            $("#contacts").addClass("show");
            $("#messenger").removeClass("show");
        }
    })
})