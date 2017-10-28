(function ($) {
    var gm =new gnMenu( document.getElementById( 'gn-menu' ) );
    $(document).click(function(event) {
        if($(event.target).is("#custom_nav *")) return;
        gm.bodyClickFn();
    });
})(jQuery);
