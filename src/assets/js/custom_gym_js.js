document.addEventListener('DOMContentLoaded', function () {
    x = "conflidfs";
    $(document).ready(function () {
        var PathName = $(location).attr('pathname');
        $("a[href='" + PathName + "']").parents('li').addClass("start active open");

        $('body').on('click', 'app-sidebar .nav-item', function () {
            $("app-sidebar .nav-item.start.active.open").removeClass("start active open");
            $(this).addClass("start active open");
            $(this).parents('li').addClass("start active open");
            return false;
        });

    });
});
