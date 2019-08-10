jQuery(document).ready(function ($) {
    var Body = $('body');
    Body.addClass('preloader-site');
});
$(window).on('load', function () {
    $('.preloader-wrapper').fadeOut();
    $('body').removeClass('preloader-site');
});

// scrolling on click

var lastId,
    topMenu = $(".navbar-nav"),
    topMenuHeight = topMenu.outerHeight() + 15,
    menuItems = topMenu.find("a"),
    scrollItems = menuItems.map(function () {
        var item = $($(this).attr("href"));
        if (item.length) {
            return item;
        }
    });

menuItems.click(function (e) {
    var href = $(this).attr("href"),
        offsetTop = href === "#" ? 0 : $(href).offset().top - topMenuHeight + 1 + (-104);
    $('html, body').stop().animate({
        scrollTop: offsetTop
    }, 800);
    e.preventDefault();
});

$(window).scroll(function () {
    var fromTop = $(this).scrollTop() + topMenuHeight;
    var cur = scrollItems.map(function () {
        if ($(this).offset().top + (-104) < fromTop)
            return this;
    });
    cur = cur[cur.length - 1];
    var id = cur && cur.length ? cur[0].id : "";

    if (lastId !== id) {
        lastId = id;
        $('.navbar ul li').removeClass("active")
        $('.navbar ul li a[href*="#"]').removeClass("active")
        menuItems
            .parent().removeClass("active")
            .end().filter("[href='#" + id + "']").parent().addClass("active");
    }
});

$('.footer li a').on('click', function (e) {
    e.preventDefault();
    var athis = this;
    var target = this.hash,
        menu = target;
    $target = $(target);
    $('html, body').stop().animate({
        'scrollTop': $target.offset().top + (-104)
    }, 800, 'swing', function () {
        window.location.hash = target;
    });
});