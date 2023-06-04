jQuery(function ($) {
  var totalSteps1 = $("#inner_tab .inner_tab_body").find(
    ".inner_tab_content"
  ).length;
  $(".inner_next").click(function () {
    var getindex = $(this).parents(".inner_tab_content").index() + 1;
    console.log(getindex);
    if (getindex == 1) {
      var isFussy = $(this)
        .parents(".inner_tab_content")
        .find('input[name="pet-fussy"]')
        .is(":checked");
      var fussyVal = $(this)
        .parents(".inner_tab_content")
        .find('input[name="pet-fussy"]:checked')
        .val();
      var isFussyType = $(this)
        .parents(".inner_tab_content")
        .find('input[type="radion"]')
        .is(":checked");
      if (isFussy == false) {
        alert("Please select fusyy");
      } else if (fussyVal == true && isFussyType == false) {
        alert("Please select fussy type below");
      } else {
        $("#tab ul li.tab2")
          .find(".current_step")
          .text(getindex + 1);
        if (totalSteps1 == getindex + 1) {
          $("#tab ul li.tab2").addClass("completed_step");
        }
        $(this)
          .parents(".inner_tab_body")
          .find(".inner_tab_content")
          .eq(getindex)
          .show()
          .siblings()
          .hide();
      }
    }
    if (getindex == 2) {
      var isSnack = $(this)
        .parents(".inner_tab_content")
        .find('input[name="snackradio"]')
        .is(":checked");
      if (isSnack == false) {
        alert("Please select Snack");
      } else {
        $("#tab ul li.tab2")
          .find(".current_step")
          .text(getindex + 1);
        if (totalSteps1 == getindex + 1) {
          $("#tab ul li.tab2").addClass("completed_step");
        }
        $(this)
          .parents(".inner_tab_body")
          .find(".inner_tab_content")
          .eq(getindex)
          .show()
          .siblings()
          .hide();
      }
    }
    if (getindex == 3) {
      var isSnack = $(this)
        .parents(".inner_tab_content")
        .find('input[name="pet-kibbles"]')
        .is(":checked");
      if (isSnack == false) {
        alert("Please select Snack");
      } else {
        $("#tab ul li.tab2")
          .find(".current_step")
          .text(getindex + 1);
        if (totalSteps1 == getindex + 1) {
          $("#tab ul li.tab2").addClass("completed_step");
        }
        $(this)
          .parents(".inner_tab_body")
          .find(".inner_tab_content")
          .eq(getindex)
          .show()
          .siblings()
          .hide();
      }
    }
  });
});
