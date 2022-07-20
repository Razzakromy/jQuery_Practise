$(function () {
    $("#draggable").draggable();
    $("#droppable").droppable({
        drop: function (event, ui) {
            $(this)
                .addClass("ui-state-highlight")
                .find("p")
                .html("Dropped!");
        }
    });
});

$(function () {
    $("#resizable").resizable();
});

$( function() {
    $( "#selectable" ).selectable();
  } );

  $( function() {
    $( "#sortable" ).sortable();
  } );

  $( function() {
    $( "#accordion" ).accordion();
  } );

  $( function() {
    var availableTags = [
      "Abu Saleh",
      "Abdullah",
      "Barek",
      "Shakil",
      "Shoikot",
      "Ismail",
      "Nuru",
      "Romy",
      "Kobir",
      "Korim",
      "Monnas",
      "Madhu",
      "Khalek",
      "Sharif",
      "Johir",
      "Atik",
      "Juwel",
      "Monju",
      "Fahim",
      "Nayeem",
      "Munni"
    ];
    $( "#tags" ).autocomplete({
      source: availableTags
    });
  } );

  $( function() {
    $( "input" ).checkboxradio();
  } );

  $( function() {
    $( ".controlgroup" ).controlgroup()
    $( ".controlgroup-vertical" ).controlgroup({
      "direction": "vertical"
    });
  } );

  $( function() {
    $( "#datepicker" ).datepicker();
  } );

  $( function() {
    $( "#dialog" ).dialog();
  } );

  $( function() {
    $( "#menu" ).menu();
  } );

  $( function() {
    $( "#progressbar" ).progressbar({
      value: 37
    });
  } );

  $( function() {
    $( "#speed" ).selectmenu();
 
    $( "#files" ).selectmenu();
 
    $( "#number" )
      .selectmenu()
      .selectmenu( "menuWidget" )
        .addClass( "overflow" );
 
    $( "#salutation" ).selectmenu();
  } );
  $( function() {
    $( "#slider" ).slider();
  } );

  $( function() {
    var spinner = $( "#spinner" ).spinner();
 
    $( "#disable" ).on( "click", function() {
      if ( spinner.spinner( "option", "disabled" ) ) {
        spinner.spinner( "enable" );
      } else {
        spinner.spinner( "disable" );
      }
    });
    $( "#destroy" ).on( "click", function() {
      if ( spinner.spinner( "instance" ) ) {
        spinner.spinner( "destroy" );
      } else {
        spinner.spinner();
      }
    });
    $( "#getvalue" ).on( "click", function() {
      alert( spinner.spinner( "value" ) );
    });
    $( "#setvalue" ).on( "click", function() {
      spinner.spinner( "value", 5 );
    });
 
    $( "button" ).button();
  } );