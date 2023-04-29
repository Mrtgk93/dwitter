import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({ mode: "onChange" });
  const history = useHistory();
  const onSubmit = (data) =>
    axios
      .post("https://wit-courses-api2.onrender.com/login", data)
      .then((res) => {
        if (res.status == 200) {
          localStorage.setItem("dvitter", res.data.token);
          toast.success(
            "Başarıyla giriş yaptınız. Anasayfaya yönlendiriliyorsunuz."
          );
          setTimeout(() => {
            history.push("/");
          }, 2500);
        }
      })
      .catch((err) => console.log(err));
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="border-stone-400 border p-6 max-w-md mx-auto"
    >
      <div className=" mb-4">
        <div className="flex justify-between items-baseline">
          <label htmlFor="email">Email</label>
          {errors?.email && (
            <span className="text-sm text-red-700">{errors.email.message}</span>
          )}
        </div>
        <input
          id="email"
          {...register("email", { required: "Email boş olamaz" })}
        />
      </div>
      <div className="">
        <div className="flex justify-between items-baseline">
          <label htmlFor="password">Şifre</label>
          {errors?.password && (
            <span className="text-sm text-red-700">
              {errors.password.message}
            </span>
          )}
        </div>
        <input
          id="password"
          type="password"
          {...register("password", { required: "Şifre boş olamaz" })}
        />{" "}
      </div>

      {errors?.exampleRequired && <span>This field is required</span>}

      <button className="action-button" type="submit" disabled={!isValid}>
        Giriş Yap
      </button>
    </form>
  );
}
