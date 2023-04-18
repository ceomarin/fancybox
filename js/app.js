$(document).ready(function () {
    $("#verVideo").click(function () {
        Fancybox.show([
            {
                src: "https://www.youtube.com/watch?v=PkCQk63eLN0",
                type: "video",
                ratio: 16 / 10,
                width: 640,
                height: 360,
            },
        ]);
    });

    Fancybox.bind('[data-fancybox="single-image"]', {
        //
    });

    $("#verMapa").click(function () {
        Fancybox.show([
            {
                src: "https://www.google.com/maps/place/Mall+Sport/@-33.3704552,-70.5078587,17z/data=!4m14!1m7!3m6!1s0x9662cbf23d9cebf1:0x89a205dc0337fb8f!2sMall+Sport!8m2!3d-33.3704552!4d-70.5063567!16s%2Fg%2F11bxw8vpz0!3m5!1s0x9662cbf23d9cebf1:0x89a205dc0337fb8f!8m2!3d-33.3704552!4d-70.5063567!16s%2Fg%2F11bxw8vpz0",
                width: 800,
                height: 600,
            },
        ]);
    });
});
