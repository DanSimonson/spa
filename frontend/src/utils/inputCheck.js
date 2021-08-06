import React from "react";

export function isCharsValid(chars) {
  if (chars > 0 && chars < 40) {
    return true;
  } else {
    return false;
  }
}

export function isMsgValid(chars) {
  if (chars > 0 && chars < 200) {
    return true;
  } else {
    return false;
  }
}

export function isEmailValid(emailAdress) {
  let EMAIL_REGEXP = new RegExp(
    "^[a-z0-9]+(.[_a-z0-9]+)*@[a-z0-9-]+(.[a-z0-9-]+)*(.[a-z]{2,15})$",
    "i"
  );
  return EMAIL_REGEXP.test(emailAdress);
}

export function isPhoneValid(phoneNumber) {
  let PHONE_REGEXP = new RegExp("^([0-9]{3})-([0-9]{3})-([0-9]{4})$", "i");
  return PHONE_REGEXP.test(phoneNumber);
}
