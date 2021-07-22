import React, { useEffect, useState } from "react";

function EditForm({ reservations }) {
  //console.log("reservations props: ", reservations.length);
  //if (reservations.length) {}
  //for (let i = 0; i < reservations.length; i++) {}
  let fetchData;
  let myMessages;
  useEffect(() => {
    fetchData = async () => {
      myMessages = await reservations;
    };
    fetchData();
  }, [reservations]);

  //   if (reservations[0]) {
  //     console.log("reservations[0].firstName: ", reservations[0].firstName);
  //   }

  return <div>Edit Form</div>;
}

export default EditForm;
