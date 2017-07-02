$(document).ready(function () {
    $("#aProjects").mouseover(function () {
        //$(".sticker1").css("animation-play-state", "running");
        $("#divContentProjects").css("display", "inherit");
    });

    $("#aProjects").mouseout(function () {
        //$(".sticker1").css("animation-play-state", "paused");
        $("#divContentProjects").css("display", "none");
    });

    $("#aBlog").mouseover(function () {
        //$(".sticker2").css("animation-play-state", "running");
        $("#divContentBlog").css("display", "inherit");
    });

    $("#aBlog").mouseout(function () {
        //$(".sticker2").css("animation-play-state", "paused");
        $("#divContentBlog").css("display", "none");
    });

    function readTextFile(file) {
        var rawFile = new XMLHttpRequest();
        rawFile.open("GET", file, false);
        rawFile.onreadystatechange = function () {
            if (rawFile.readyState === 4) {
                if (rawFile.status === 200 || rawFile.status == 0) {
                    var allText = (rawFile.responseText).split("~.~.~.");
                    var projectOne = allText[0];
                    var projectTwo = allText[1];
                }
            }
        }
        rawFile.send(null);
    }

    readTextFile("https://raw.githubusercontent.com/HLLedford/portfolio/master/content/projectCMS.txt");
});