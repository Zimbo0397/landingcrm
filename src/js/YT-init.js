var myPlayer;
jQuery(function () {
    var isIframe=function(){var a=!1;try{self.location.href!=top.location.href&&(a=!0)}catch(b){a=!0}return a};if(!isIframe()){var logo=$("<a href='http://pupunzi.com/#mb.components/components.html' style='position:absolute;top:0;z-index:1000'><img id='logo' border='0' src='http://pupunzi.com/images/logo.png' alt='mb.ideas.repository'></a>");$("#wrapper").prepend(logo),$("#logo").fadeIn()}
    myPlayer = jQuery("#video").YTPlayer();
});