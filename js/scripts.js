$(function () {

    $(document).ready(function () {

        $("#robby-close-eyes").css("opacity", 0);

        // close eyes of robby
        setInterval(function () {
            $("#robby-close-eyes").css("opacity", 1);
            setTimeout(function () {
                $("#robby-close-eyes").css("opacity", 0);
            }, 200)
        }, 4000);

        // walk robby
        $(document).keydown(function (event) {
            if (event.which == 40) {
                $("#robby-slides").addClass("walk-east").removeClass("look-west");
                $("#robby-close-eyes").css("left", "90px");
            }
            if (event.which == 38) {
                $("#robby-slides").addClass("walk-west");
                $("#robby-close-eyes").css("left", "55px");
            }
        });
        $(document).keyup(function (event) {
            if (event.which == 40) { $("#robby-slides").removeClass("walk-east") }
            if (event.which == 38) { $("#robby-slides").removeClass("walk-west").addClass("look-west") }
        });
    });
    /*
    let tween1 = TweenMax.from('#exampleElement1', 1, { autoAlpha: 0, x: -200, ease: Circ.easeOut, });
    let tween2 = TweenMax.from('#exampleElement2', 1, { autoAlpha: 0, x: 200, ease: Circ.easeIn, });
    let tween3 = TweenMax.from('#exampleElement3', 1, { autoAlpha: 0, x: -200, ease: Circ.easeOut, });

    let controller = new ScrollMagic.Controller();

    let scene1 = new ScrollMagic.Scene({
        triggerElement: '#exampleElement1',
        offset: 100,
    }).setTween(tween1);

    let scene2 = new ScrollMagic.Scene({
        triggerElement: "#exampleElement2",
        offset: 0,
        triggerHook: 0.5
    }).setTween(tween2);

    let scene3 = new ScrollMagic.Scene({
        triggerElement: "#exampleElement3",
        offset: 0,
        triggerHook: 0.5
    }).setTween(tween3);

    controller.addScene([scene1, scene2, scene3]);
    */
});