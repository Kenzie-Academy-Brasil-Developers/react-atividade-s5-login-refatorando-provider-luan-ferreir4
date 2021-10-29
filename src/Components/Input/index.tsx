import { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: string;
  register: any;
  text: string
}

export const Input = ({ error, register, text, ...rest }: InputProps) => {
  return (
    <div>
      {error && <label>{error}</label>}
      <input {...register(text)}{...rest} />
    </div>
  );
};
