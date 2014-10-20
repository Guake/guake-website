#jQuery to collapse the navbar on scroll
$(window).scroll ->
    if $(".navbar").offset().top > 50
        $(".navbar-fixed-top").addClass "top-nav-collapse"
    else
        $(".navbar-fixed-top").removeClass "top-nav-collapse"
    return


#jQuery for page scrolling feature - requires jQuery Easing plugin
$ ->
    $(".page-scroll a").bind "click", (event) ->
        $anchor = $(this)
        $("html, body").stop().animate
            scrollTop: $($anchor.attr("href")).offset().top, 700, "easeInOutExpo"
        event.preventDefault()
        return

    return

$(document).ready ->

    #$('#nav').localScroll(800);
    RepositionNav()
    $(window).resize ->
        RepositionNav()
        return


    #.parallax(xPosition, adjuster, inertia, outerHeight) options:
    #xPosition - Horizontal position of the element
    #adjuster - y position to start from
    #inertia - speed to move relative to vertical scroll. Example: 0.1 is one tenth the speed of scrolling, 2 is twice the speed of scrolling
    #outerHeight (true/false) - Whether or not jQuery should use it's outerHeight option to determine when a section is in the viewport
    $('.intro-body').parallax(0, 0, 0.2, false);
    $('.sources').parallax(0, 1500, 0.2, false);
    deck = new $.scrolldeck(
        slides: ".slide"
        buttons: "#nav li a"
        easing: "easeInOutExpo"
    )
    return
