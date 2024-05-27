import { useState } from "react";
import { useForm } from "react-hook-form";
import "./App.css";

import { json } from "express";

function App() {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm();

  const delay = (d) => {
    return new Promise((res, rej) => {
      setTimeout(() => {
        res();
      }, d * 1000);
    });
  };

  const onSubmit = async (data) => {
    await delay(2);

    console.log(data);
    if (data.username !== "gopal") {
      setError("myform", { message: "Credentials of the form are invalid" });
    }
    if (data.username === "atul") {
      setError("blocked", { message: "This madarchod user is blocked" });
    }
  };

  return (
    <>
      {isSubmitting && <div>Loading....</div>}
      <div className="container">
        <form action="" onSubmit={handleSubmit(onSubmit)}>
          <input
            type="text"
            placeholder="username"
            {...register("username", {
              required: { value: true, message: "this field is required" },
              minLength: { value: 3, message: "Min. Lenght is 3" },
              maxLength: { value: 8, message: "Max. Lenght is 8" },
            })}
          />
          {errors.username && (
            <div className="red">{errors.username.message}</div>
          )}
          <br />

          <input
            type="password"
            {...register("password", {
              minLength: { value: 7, message: "Min length of password is 7" },
            })}
            placeholder="password"
          />
          {errors.password && (
            <div className="red">{errors.password.message}</div>
          )}
          <br />
          <input type="submit" disabled={isSubmitting} value="Submit" />
          {errors.myform && <div className="red">{errors.myform.message}</div>}
          {errors.blocked && (
            <div className="red">{errors.blocked.message}</div>
          )}
        </form>
      </div>
    </>
  );
}

export default App;
