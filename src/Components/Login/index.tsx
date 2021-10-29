import { Input } from "../Input";

import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import UserData from "../../Interfaces/UserData";
import { UseAuth } from "../../Providers/Auth";
import { LoginContainer, LoginForm } from "../../Styles/ComponentsStyles/LoginContainer";

export const Login = () => {
  const { signIn } = UseAuth();

  const loginSchema = yup.object().shape({
    email: yup.string().required("Campo obrigatório").email("Email invalido"),
    password: yup
      .string()
      .required("Campo obrigatório")
      .min(6, "Mínimo de 6 caracteres"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginSchema),
  });

  const handleLogin = (data: UserData) => {
    console.log(data);
    signIn(data);
  };

  return (
    <LoginContainer>
      <h3>Login:</h3>

      <LoginForm onSubmit={handleSubmit(handleLogin)}>
        {/* <input {...register("email")}/>
        <input {...register("password")}/> */}

        <Input
          placeholder="Email"
          register={register}
          text={"email"}
          error={errors.email?.message}
        />
        <Input
          placeholder="Senha"
          register={register}
          text={"password"}
          error={errors.password?.message}
        />
        <button type="submit">Entrar</button>
      </LoginForm>
    </LoginContainer>
  );
};
