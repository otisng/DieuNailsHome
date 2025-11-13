// Back to top button
var btn = $('#backtotop');

$(window).scroll(function () {
    if ($(window).scrollTop() > 300) {
        btn.addClass('show');
    } else {
       btn.removeClass('show');
    }
});

btn.on('click', function (e) {
    e.preventDefault();
    $('html, body').animate({ scrollTop: 0 }, '300');
});

window.onload = function() {
    document.querySelector('.preloader').style.display = 'none';
}