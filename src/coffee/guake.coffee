#jQuery to collapse the navbar on scroll
$(window).scroll ->
    if $(".navbar").offset().top > 50
        $(".navbar-fixed-top").addClass "top-nav-collapse"
        #$(".github-ribbon a img").removeClass "github-ribbon-top"
        #$(".github-ribbon a img").addClass "github-ribbon"
        $( ".github-ribbon a img" ).fadeIn "slow", "swing"
    else
        $(".navbar-fixed-top").removeClass "top-nav-collapse"
        $( ".github-ribbon a img" ).fadeOut "slow", "swing"
        #$(".github-ribbon a img").removeClass "github-ribbon"
        #$(".github-ribbon a img").addClass "github-ribbon-top"
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

    #$('nav').localScroll(800);
    # Recalculate for parallax
    RepositionNav()
    $(window).resize ->
       RepositionNav()
       return


    ###blueimp.Gallery(
        document.getElementById('links').getElementsByTagName('a'),
        {
            container: '#blueimp-gallery-carousel',
            carousel: false
        }
    );###
    # blueimp.Gallery([
            # {
                # title: 'Main page',
                # href: 'img/screenshot-main.gif',
                # poster: 'img/screenshot-main.gif'
            # },
        # ], {
            # container: '#blueimp-image-carousel',
            # carousel: false
        # });

    #.parallax(xPosition, adjuster, inertia, outerHeight) options:
    #xPosition - Horizontal position of the element
    #adjuster - y position to start from
    #inertia - speed to move relative to vertical scroll. Example: 0.1 is one tenth the speed of scrolling, 2 is twice the speed of scrolling
    #outerHeight (true/false) - Whether or not jQuery should use it's outerHeight option to determine when a section is in the viewport
    #$('#intro').parallax(0, 700, 0.2, false);
    #$('#sources').parallax(0, 2000, 0.4, true);

    # deck = new $.scrolldeck({
    #     slides: ".slide",
    #     buttons: "nav li a",
    #     easing: "easeInOutExpo",
    #     offset: 0,
    # })

    # init controller
    controller = new ScrollMagic.Controller()
    scale_tween = TweenMax.to('#scale-animation', 1, {
          transform: 'scale(.75)',
          ease: Linear.easeNone
        })

     # create a scene
    new ScrollMagic.Scene({
            triggerElement: '#scale-trigger'
        })
        .setTween(scale_tween)
        .addTo(controller) #// assign the scene to the controller
