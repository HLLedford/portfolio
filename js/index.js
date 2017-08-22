$(document).ready(function() {
    
//    Projects
    $.ajax({
        url: "https://api.github.com/repositories/94455851/contents/CMS/Projects",
        dataType: "json",
        success: function(returndata) {
            $.each(returndata, function(index) {
            	fetchHTML(returndata[index]["download_url"], 1);
            });
        }
    });
    
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
    $.ajax({
        url: "https://api.github.com/repositories/94455851/contents/CMS/Blog",
        dataType: "json",
        success: function(returndata) {
            $.each(returndata, function(index) {
            	fetchHTML(returndata[index]["download_url"], 3);
            });
        }
    });
    
});

function fetchHTML(download_url, section) {
    $.get(download_url, function(responseText) {
        var html = $(responseText);
        
        if (section == 1) {
            html.appendTo($('#projects'));
        }
        
        if (section == 2) {
            html.appendTo($('#about'));
        }
        
        if (section == 3) {
            html.appendTo($('#blog'));
        }
    });
    
};
