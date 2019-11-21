// JavaScript Document
$(document).ready(function() {
    "use strict";
    $( "#salutation" ).selectmenu();

    $( "#datepicker" ).datepicker();

    $( "input" ).checkboxradio();
    $( "fieldset" ).controlgroup();

    $( "#currency" ).on( "change", function() {
      $( "#spinner" ).spinner( "option", "culture", $( this ).val() );
 
    $( "#spinner" ).spinner({
      min: 5,
      max: 2500,
      step: 25,
      start: 1000,
      numberFormat: "C"
 
    $( ".widget input[type=submit], .widget a, .widget button" ).button();
    $( "button, input, a" ).click( function( event ) {
      event.preventDefault();
    } );
  } );
 
	