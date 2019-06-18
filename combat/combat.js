"use strict";
$(document).ready(function () {
  // Initialize Common Elements
  let isAiming = false;
  let aimingMod = 0;
  let baseAttack = 0, modifierAttack = 0;
  let baseDefense = 0, modifierDefence = 0;
  // Removes the hiding Bootstrap class to show element.
  const DisplayElement = el => el.removeClass("d-none");
  // Adds the hiding Bootstrap class to hide the element.
  const HideElement = el => el.addClass("d-none");

  // Start Logic
  DisplayElement($("#divStart"));

  $("#btnStart").click(e => {
    HideElement($("#divStart"));
    DisplayElement($("#divAttackAim"));
    DisplayElement($("#divBottomButtons"));
    DisplayElement($("#btnPrev"));
    HideElement($("#btnNextBody"));
    if (isAiming) {

      DisplayElement($("#btnNextBody"));
      (aimingMod == 0) ? HideElement($("#btnNextBody")) : DisplayElement($("#btnNextBody"));
    }
    else {

    }
  });

  $("#rbgAiming").on("change", () => {
    //Value if attacker is aiming or not
    isAiming = $("input[name=aiming]:checked").val();
    // Display dropdown for body list
    if (isAiming == 1) {
      DisplayElement($("#divBodyParts"));
      (aimingMod == 0) ? HideElement($("#btnNextBody")) : DisplayElement($("#btnNextBody"));
    } else {
      HideElement($("#divBodyParts"));
      DisplayElement($("#btnNextBody"));
    }
  });

  $("#optBodyParts").on("change", () => {
    aimingMod = $("#optBodyParts").children("option:selected").val();
    // If it is not default value, show next button
    (aimingMod != 0) ? DisplayElement($("#btnNextBody")) : HideElement($("#btnNextBody"));
  });

  // Start <- Aim
  $("#btnPrevBody").click(e => {
    HideElement($("#divAttackAim"));
    DisplayElement($("#divStart"));
  });

  // Aim -> Attack Roll
  $("#btnNextBody").click(e => {
    HideElement($("#divAttackAim"));
    DisplayElement($("#divAttackRoll"));
  });

  // Aim <- Attack Roll
  $("#btnPrevAttRoll").click(e => {
    HideElement($("#divAttackRoll"));
    DisplayElement($("#divAttackAim"));
  });

  // Attack Roll -> Defense Roll
  $("#btnNextAttRoll").click(e => {

    if (isNaN($("#inputAttBase").val()) || $("#inputAttBase").val() == "")
      return;
    if (isNaN($("#inputAttMod").val()) || $("#inputAttMod").val() == "")
      return;

    let baseVal = $("#inputAttBase").val();
    let modVal = $("#inputAttMod").val();

    HideElement($("#divAttackRoll"));
    DisplayElement($("#divDefenseRoll"));
  });

  // Attack Roll <- Defense Roll
  $("#btnPrevDefRoll").click(e => {
    HideElement($("#divDefenseRoll"));
    DisplayElement($("#divAttackRoll"));
  });

  // Defense Roll -> Result
  $("#btnNextDefRoll").click(e => {

    if (isNaN($("#inputDefBase").val()) || $("#inputDefBase").val() == "")
      return;
    if (isNaN($("#inputDefMod").val()) || $("#inputDefMod").val() == "")
      return;

    let baseVal = $("#inputDefBase").val();
    let modVal = $("#inputDefMod").val();

    HideElement($("#divDefenseRoll"));
    DisplayElement($("#divResult"));
  });

  // Defense Roll <- Result
  $("#btnPrevResult").click(e => {
    HideElement($("#divResult"));
    DisplayElement($("#divDefenseRoll"));
  });
});
