"use strict";
$(document).ready(function() {
  // Initialize Common Elements
  let divStart = $("#divStart");
  let divAttackAim = $("#divAttackAim");
  let divAttackRoll = $("#divAttackRoll");
  let divDefenseRoll = $("#divDefenseRoll");
  let divResult = $("#divResult");
  let divBottomButtons = $("#divBottomButtons");
  let btnStart = $("#btnStart");
  let divBodyParts = $("#divBodyParts");
  let btnPrev = $("#btnPrev");
  let btnNext = $("#btnNext");
  let rbgAiming = $("#rbgAiming");
  let aiming = false;
  let aimingMod = 0;
  let optBodyParts = $("#optBodyParts");
  // Removes the hiding Bootstrap class to show element.
  const DisplayElement = el => el.removeClass("d-none");
  // Adds the hiding Bootstrap class to hide the element.
  const HideElement = el => el.addClass("d-none");

  // Start Logic
  DisplayElement(divStart);

  btnStart.click(e => {
    HideElement(divStart);
    DisplayElement(divAttackAim);
    DisplayElement(divBottomButtons);
    DisplayElement(btnPrev);
  });

  rbgAiming.on("change", () => {
    //Value if attacker is aiming or not
    aiming = $("input[name=aiming]:checked").val();
    if (aiming == true) {
      console.log(aiming);
      DisplayElement(divBodyParts);
    } else {
      console.log(aiming);
      HideElement(divBodyParts);
    }
    // Display Next Button
    DisplayElement(btnNext);
  });

  btnNext.click(e => {
    //console.log($(".jumbotron:not(.d-none)")[0].id);
    console.log(optBodyParts.children("option:selected").val());
  });
});
