import React from "react";
import { isCharsValid } from "../../utils/inputCheck";
import { GetErr } from "../../utils/getErr";

export function EditForm(formData) {
  let isValid;
  let validLastName;
  let validFirstName;
  let validMsg;
  let validPhone;
  let validEmail;
  let isValidArr = [];
  let nameInput = "nameInput";
  let msgInput = "msgInput";
  let emailInput = "emailInput";
  let phoneInput = "phoneInput";
  Object.entries(formData).map((formField) => {
    console.log("formField[0]: ", formField[0]);
    if (formField[0] === "lastName") {
      let isValidLastName = isCharsValid(formData.lastName.length);
      validLastName = GetErr(isValidLastName, nameInput);
      let newObj = { lastName: formField[1] };
      validLastName = { ...validLastName, ...newObj };
      isValidArr.push(validLastName);
    }
    if (formField[0] === "firstName") {
      let isValidFirstName = isCharsValid(formData.lastName.length);
      validFirstName = GetErr(isValidFirstName, nameInput);
      let newObj = { firstName: formField[1] };
      validFirstName = { ...validFirstName, ...newObj };
      isValidArr.push(validFirstName);
    }
    if (formField[0] === "message") {
      let isValidMsg = isMsgValid(formData.lastName.length);
      validMsg = GetErr(isValidMsg, msgInput);
      let newObj = { message: formField[1] };
      validMsg = { ...validMsg, ...newObj };
      isValidArr.push(validMsg);
    }
    if (formField[0] === "phone") {
      let isValidPhone = isPhoneValid(formData.phone);
      validPhone = GetErr(isValidPhone, phoneInput);
      let newObj = { phone: formField[1] };
      validPhone = { ...validPhone, ...newObj };
      isValidArr.push(validPhone);
    }
    if (formField[0] === "email") {
      let isValidEmail = isEmailValid(formData.email);
      validEmail = GetErr(isValidEmail, emailInput);
      let newObj = { email: formField[1] };
      validEmail = { ...validEmail, ...newObj };
      isValidArr.push(validEmail);
    }
  });
  console.log("isValidArr: ", isValidArr);
  //   const { lastName, firstName, message, phone, email } = formData;
  //   console.log("email: ", email);
  //   let isValid;
  //   let nameInput = "nameInput";
  //   let msgInput = "msgInput";
  //   let emailInput = "emailInput";
  //   let phoneInput = "phoneInput";
  //   let isValidLastName = isCharsValid(formData.lastName.length);
  //   isValid = GetErr(isValidLastName, nameInput);
  //   //console.log("isValid: ", isValid);
  //   let isValidFirstName = isCharsValid(formData.firstName.length);
  //   isValid = GetErr(isValidFirstName, nameInput);
  //   let isValidMsg = isMsgValid(formData.message.length);
  //   isValid = GetErr(isValidMsg, msgInput);
  //   let isValidEmail = isEmailValid(formData.email);
  //   isValid = GetErr(isValidEmail, emailInput);
  //   let isValidPhone = isPhoneValid(formData.phone);
  //   isValid = GetErr(isValidPhone, phoneInput);
  //let data = {};
  //let dataArr = [];
  //let temp = dataArr.push(isValid);

  return isValidArr;
}

// function getError(isValidCheck, field, type) {
//   let error;
//   console.log("isValidCheck: ", isValidCheck);
//   console.log("field: ", field);
//   console.log("type: ", type);
//   switch (type) {
//     case "nameInput":
//       if (isValidCheck) {
//         error = {
//           valid: isValidCheck,
//           message: "",
//         };
//         return error;
//       } else {
//         error = {
//           valid: isValidCheck,
//           message: "input characters must be between 0 and 40 in length",
//         };
//         return error;
//       }

//     case "msgInput":
//       if (isValidCheck) {
//         error = {
//           valid: isValidCheck,
//           message: "",
//         };
//         return error;
//       } else {
//         error = {
//           valid: isValidCheck,
//           message: "input characters must be between 0 and 40 in length",
//         };
//         return error;
//       }
//     case "emailInput":
//       if (isValidCheck) {
//         error = {
//           valid: isValidCheck,
//           message: "",
//         };
//         return error;
//       } else {
//         error = {
//           valid: isValidCheck,
//           message: "please use a valid email",
//         };
//         return error;
//       }
//     case "phoneinput":
//       if (isValidCheck) {
//         error = {
//           valid: isValidCheck,
//           message: "",
//         };
//         return error;
//       } else {
//         error = {
//           valid: isValidCheck,
//           message: "phone must be In numeric format: xxx-xxx-xxxx",
//         };
//         return error;
//       }
//     default:
//       return true;
//   }
// }

// function isCharsValid(chars) {
//   if (chars > 0 && chars < 40) {
//     return true;
//   } else {
//     return false;
//   }
// }

function isMsgValid(chars) {
  if (chars > 0 && chars < 200) {
    return true;
  } else {
    return false;
  }
}

function isEmailValid(emailAdress) {
  let EMAIL_REGEXP = new RegExp(
    "^[a-z0-9]+(.[_a-z0-9]+)*@[a-z0-9-]+(.[a-z0-9-]+)*(.[a-z]{2,15})$",
    "i"
  );
  return EMAIL_REGEXP.test(emailAdress);
}

function isPhoneValid(phoneNumber) {
  let PHONE_REGEXP = new RegExp("^([0-9]{3})-([0-9]{3})-([0-9]{4})$", "i");
  return PHONE_REGEXP.test(phoneNumber);
}
