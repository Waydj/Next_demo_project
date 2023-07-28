"use client";

import { useState, useTransition } from "react";
import postContact from "./post-contact";

export default function Form() {
  const [message, setMessage] = useState("");
  const [showMessage, setShowMessage] = useState(false);
  const [isPending, startTransition] = useTransition("");

  const handleSubmit = (data) => {
    const name = data.get("name");
    const email = data.get("email");

    startTransition(() => {
      let message;
      postContact({ name, email }).then((json) => {
        console.log(json);

        const errorMessage = json.ErrorMessage;

        if (json.Count > 0) {
          message = "Thanks for contacting me!";
        } else if (errorMessage && errorMessage.includes("already exists")) {
          message = "Sorry, that email address is taken.";
        } else if (
          errorMessage &&
          errorMessage.includes("properties invalid")
        ) {
          message = "Sorry, that email address is invalid.";
        } else {
          message = "Sorry, something went wrong. Please try again later.";
        }

        setMessage(message);
        setShowMessage(true);
      });
    });
  };

  return (
    <form action={handleSubmit} className="indent grid w-[270px] gap-2">
      <label htmlFor="name">Name</label>
      <input type="text" name="name" id="name" required />
      <label htmlFor="email">Email</label>
      <input type="email" name="email" id="email" required />
      <button
        type="submit"
        disabled={isPending}
        className="mt-3 h-[36px] w-[130px] bg-blue-700 text-center text-white disabled:bg-slate-50 disabled:text-slate-500"
      >
        {isPending ? "Sending" : "Submit"}
      </button>
      {showMessage ? message : null}
    </form>
  );
}
