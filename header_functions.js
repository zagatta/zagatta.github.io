$(function(){
    var title = document.getElementsByTagName("title")[0].innerHTML;
    $("#title").text(title);
    var items = $(".w3-bar-item").length;
    var i;
    for (i = 0; i <= items; i++) {
        if ( (title ===  $("a.w3-button:nth-child(" + i + ")").text())){
            $("a.w3-button:nth-child(" + i + ")").addClass('w3-light-grey');
        }
    } 
    
});