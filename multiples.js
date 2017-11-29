$(document).ready(function(){

  // Load Actions
  buildTable();

  //functions
  function buildTable() {
    $(".div-table").append("<table></table>")
    for (i=0;i<10;i++){
      $("table").append("<tr></tr>");
      for (j=1;j<=10;j++){
        cell = i*10 + j
        $("tr:last-child").append("<td class=td>" + cell + "</td>");
      }
    }
  }

  //events
  $("input").on({
    mouseenter: function(){
      $(this).css("background-color", "lightblue");
    },

    mouseleave: function(){
      $(this).css("background-color", "white");
    },

    keyup: function(){
      num = Number($("input").val());
      if (Number.isInteger(num)) {
        $("td").each(function(){
          v = Number($(this).html());
          if ( v % num == 0) {
            $(this).css("background-color", "lightblue")
          } else {
            $(this).css("background-color", "white")
          }
        })
      }
    }

  })

});
