function calculateAge(date) {
    date = date.split('-');
    var birthYear = date[0];
    var birthMonth = date[1];
    var birthDay = date[2];

    var todayDate = new Date();
    var currentYear = todayDate.getFullYear();
    var currentMonth = todayDate.getMonth()+1;
    var currentDay = todayDate.getDate();

    var age = currentYear - birthYear;

    if (currentMonth < birthMonth) {
        --age;
    }
    else if (currentMonth === birthMonth) {
        if (currentDay < birthDay) {
            --age;
        }
    }
    return age;
}

//Smooth Scroll to sections
$(document).ready(function() {
    $('a[href^="#"]').on('click', function(event) {
        var target = $($(this).attr('href'));
        var scrollValue = 0;
        var extraOffset = 70;

        event.preventDefault();
        if (target.length) {
            scrollValue = target.offset().top-extraOffset
        }

        $('html, body').stop().animate({
            scrollTop: scrollValue
        }, 1000);
    });

});


/*Analytics code*/
 (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-106096111-1', 'auto');
ga('send', 'pageview');