/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


$( document ).ready( function() {
    $( '.layer-fullslider' ).flexslider( {
        animation       : 'fade', 
        animationspeed  : 750, 
        direction       : 'horizontal', 
        pauseOnHover    : true, 
        slideshotSpeed  : 4000, 
        touch           : false, 
        
        prevText        : '', 
        nextText        : '' 
    } );
    
    $( 'a[rel^="prettyPhoto"]' ).prettyPhoto( {
        deeplinking     : false, 
//        show_title      : false, 
        social_tools    : false 
    } );
    
    $( '.layer-homebox' ).responsiveEqualHeightGrid();
    $( '.footerSect' ).responsiveEqualHeightGrid();
    $( '.layer-video' ).responsiveEqualHeightGrid();
    $( '.layer-flag' ).responsiveEqualHeightGrid();
    $( '.layer-profile' ).responsiveEqualHeightGrid();
    
    $( '.listing-highlight' ).endlessRiver( {
        buttons : false, 
        pause   : true, 
        speed   : 80 
    } );
    
    $( '.layer-body, .layer-fullslider' ).click( function() {
        $( '.layer-formsearch form' ).fadeOut( 'fast' );
    } );
    
    $( window ).scroll( function() {
        $( '.layer-formsearch form' ).fadeOut( 'fast' );
    } );
} );



/* Function to toggle mobile menu */
function toggleMenu() {
    var mobile_menu = $( '.layer-headermobilemenu' );
    var pos_mobmenu = $( mobile_menu ).position();
    
    
    var height_win  = $( window ).height();
    var height_menu = height_win - 80;
    $( mobile_menu ).css( 'height', height_menu + 'px' );
    
    
    if( pos_mobmenu.left == '0' ) {
        $( 'body' ).removeClass( 'noScroll' );
        $( mobile_menu ).animate( { 'left': '100%' }, 'fast', function() {
            $( '.layer-headermobile .panel-togglemenu a' ).removeClass( 'menu-active' );
        } );
    } else {
        $( 'body' ).addClass( 'noScroll' );
        $( mobile_menu ).animate( { 'left': '0%' }, 'fast', function() {
            $( '.layer-headermobile .panel-togglemenu a' ).addClass( 'menu-active' );
        } );
    }
}


function toggleSearchForm() {
    var form    = $( '.layer-formsearch form' );
    
    if( !$( form ).is( ':visible' ) ) {
        $( form ).fadeIn( 'fast' );
    } else {
        $( form ).fadeOut( 'fast' );
    }
}