import React from "react";

export function GetErr(isValidCheck, type) {
  let error;
  console.log("isValidCheck: ", isValidCheck);
  console.log("type: ", type);
  switch (type) {
    case "nameInput":
      if (isValidCheck) {
        error = {
          valid: isValidCheck,
          message: "",
        };
        return error;
      } else {
        error = {
          valid: isValidCheck,
          message: "input characters must be between 0 and 40 in length",
        };
        return error;
      }

    case "msgInput":
      if (isValidCheck) {
        error = {
          valid: isValidCheck,
          message: "",
        };
        return error;
      } else {
        error = {
          valid: isValidCheck,
          message: "input characters must be between 0 and 40 in length",
        };
        return error;
      }
    case "emailInput":
      if (isValidCheck) {
        error = {
          valid: isValidCheck,
          message: "",
        };
        return error;
      } else {
        error = {
          valid: isValidCheck,
          message: "please use a valid email",
        };
        return error;
      }
    case "phoneinput":
      if (isValidCheck) {
        error = {
          valid: isValidCheck,
          message: "",
        };
        return error;
      } else {
        error = {
          valid: isValidCheck,
          message: "phone must be In numeric format: xxx-xxx-xxxx",
        };
        return error;
      }
    default:
      return true;
  }
}
