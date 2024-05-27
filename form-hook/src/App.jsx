import { useState } from "react";
import { useForm } from "react-hook-form";
import "./App.css";

function App() {
  const {
    register,
    handleSubmit,
    watch,
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
    // await delay(2);

    let r = await fetch("http://localhost:3000/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify(data),
    });
    let res = await r.text();
    console.log(data, res);

    // if (data.username !== "gopal") {
    //   setError("myform", { message: "Credentials of the form are invalid" });
    // }
    // if (data.username === "atul") {
    //   setError("blocked", { message: "This madarchod user is blocked" });
    // }
  };

  return (
    <>
      {isSubmitting && <div>Loading....</div>}
      <div className="container">
        <form action="" onSubmit={handleSubmit(onSubmit)}>
          <input
            type="text"
            placeholder="Username"
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
            placeholder="Password"
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
