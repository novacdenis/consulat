import { setLocale } from "yup";

setLocale({
  mixed: {
    required: "Это поле обязательно к заполнению",
  },
  number: {
    min: "Минимум ${min} символов",
  },
  string: {
    email: "Неверный емайл",
    min: "Минимум ${min} символов",
  },
});
