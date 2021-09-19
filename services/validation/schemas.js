import { object, string, ref } from "yup";
import "./locale";

export const authLoginSchema = object({
  email: string().email().required(),
  password: string().min(6).required(),
});

export const authResetSchema = object({
  email: string().email().required(),
});

export const authRegisterSchema = object({
  first_name: string().min(2).required(),
  last_name: string().min(2).required(),
  email: string().email().required(),
  phone: string().required(),
  password: string().min(6).required(),
  confirm_password: string().oneOf([ref("password"), null], "Пароли не совпадают"),
});
