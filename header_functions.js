$(function () {
    var title = document.getElementsByTagName("title")[0].innerHTML;
    $("#title").text(title);
    console.log($(".menu1").text());
    var items = $(".menu1").length;
    var i;
    for (i = 0; i <= items; i++) {
        console.log("items: " + items);
        title_current = $("a.menu1:nth-child(" + i + ")").text();
        console.log(title_current + "/" + title);
        console.log("i: " + i);
        if ((title == title_current)) {
            $("a.menu1:nth-child(" + i + ")").addClass('w3-light-grey');
        }
        console.log("_______________");
    }

    console.log("_______________");
    console.log("menu2");
    console.log("_______________");

    console.log($(".menu2").text());
    var items = $(".menu2").length;
    var i;
    for (i = 0; i <= items; i++) {
        console.log("items: " + items);
        title_current = $("a.menu2:nth-child(" + i + ")").text();
        console.log(title_current + "/" + title);
        console.log("i: " + i);
        if ((title == title_current)) {
            $("a.menu2:nth-child(" + i + ")").addClass('w3-light-grey');
        }
        console.log("_______________")
    }
});