import React from "react";
import { useForm } from "react-hook-form";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <div className="pt-20">
      <form onSubmit={handleSubmit(onSubmit)}>
        <input placeholder="name" {...register("name")} />

        <input {...register("exampleRequired", { required: true })} />

        {errors.exampleRequired && <span>This field is required</span>}

        <input type="submit" />
      </form>
    </div>
  );
};

export default Login;
