$(document).ready(function() {
    
//    Projects
    // $.ajax({
        // url: "https://api.github.com/repositories/94455851/contents/CMS/Projects",
        // dataType: "json",
        // success: function (returndata)
        // {
        // alert(returndata[1]["name"]);
        // }  
    // });
    
    // var divStr = "<div>" + "</div>";

    // var html = $(divStr);

    // html.appendTo($('#projects'))
    
//    About Me
    $.ajax({
        url: "https://api.github.com/repositories/94455851/contents/CMS/About",
        dataType: "json",
        success: function (returndata)
        {
            fetchHTML(returndata[0]["download_url"], 2);
        }  
    });
    
    
//    Blog
    // $.ajax({
        // url: "https://api.github.com/repositories/94455851/contents/CMS/Blog",
        // dataType: "json",
        // success: function (returndata)
        // {
        // alert(returndata[1]["name"]);
        // }  
    // });
    
});

function fetchHTML(download_url, section) {
    $.get(download_url, function(responseText) {
        var html = $(responseText);
        
        if (section == 1) {
            
        }
        
        if (section == 2) {
            html.appendTo($('#about'));
        }
        
        if (section == 3) {
            
        }
    });
    
};
