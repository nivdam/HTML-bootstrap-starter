function keyCodes() {
  // Define values for keycodes
  this.tab =      9;
  this.enter =    13;
  this.untab =    16;
  this.escape =   27;
  this.space =    32;
  this.pageUp =   33;
  this.pageDoun = 34;
  this.end =      35;
  this.home =     36;
  this.left =     37;
  this.up =       38;
  this.right =    39;
  this.down =     40;
}

var keys = new keyCodes();


// === Document Ready === //
jQuery(document).ready(function ($) { 

});  // end Document Ready



// === RESPONSIVE === //
$(window).ready(main_responsive).resize(main_responsive);

function main_responsive() {

  if ($(window).width() >= 576) {
    /*console.log( "576" );*/
  } else {
    /*console.log( "575" );*/
  }


  if ($(window).width() >= 751) {
    /*console.log( "768" );*/
  } else {
    /*console.log( "767" );*/
  }


  if ($(window).width() >= 975) {
    /*console.log( '992px' );*/

  } else {
    /*console.log( '991px' );*/
  }

} // End openRest_mobile
