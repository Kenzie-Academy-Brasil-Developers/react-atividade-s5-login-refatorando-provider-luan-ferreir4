import { InputHTMLAttributes } from "react";
import { InputBox } from "../../Styles/ComponentsStyles/input";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: string;
  register: any;
  text: string
}

export const Input = ({ error, register, text, ...rest }: InputProps) => {
  return (
    <InputBox>
      {error && <p>{error}</p>}
      <input {...register(text)}{...rest} />
    </InputBox>
  );
};
