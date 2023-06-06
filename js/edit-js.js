jQuery(function ($) {
  $("input").on("keypress", function (e) {
    if (e.keyCode == 13) {
      console.log(e);
      var getindex = $(this).parents(".inner_tab_content").index() + 1;
      console.log(getindex);
      if (e.target.name == "info") {
        const accInfo = $(this)
          .parents(".inner_tab_content")
          .find('input[name="info"')
          .val();
        console.log(accInfo);
        if (accInfo == "") {
          alert("Please enter personal information");
        }
      } else if (getindex == 1) {
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
      } else if (getindex == 2) {
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
      } else if (getindex == 3) {
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
    }
  });

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
  $(".next").click(function () {
    const accInfo = $(this)
      .parents(".inner_tab_content")
      .find('input[name="info"')
      .val();
    console.log(accInfo);
    if (accInfo == "") {
      alert("Please enter personal information");
    }
  });
  $("#inner_tab2 a.innner_previous_btn").click(function (e) {
    e.preventDefault();
    var getindex = $(this).parents(".inner_tab_content").index() - 1;
    $("#tab ul li.tab1")
      .find(".current_step")
      .text(getindex + 1);
    $(this)
      .parents(".inner_tab_body")
      .find(".inner_tab_content")
      .eq(getindex)
      .show()
      .siblings()
      .hide();
  });
});
