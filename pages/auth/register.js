import Link from "next/link";
import AuthLayout from "@/layouts/auth.layout";
import Form from "@/components/form";
import Input from "@/components/input";
import Button from "@/components/button";
import { authRegisterSchema } from "@/services/validation/schemas";
export default function Register() {
  const onFinish = () => null;

  return (
    <div className="auth-card">
      <Form onFinish={onFinish} validationSchema={authRegisterSchema}>
        <Input.Group>
          <Form.Item name="first_name">
            <Input placeholder="Имя" />
          </Form.Item>
          <Form.Item name="last_name">
            <Input placeholder="Фамилия" />
          </Form.Item>
        </Input.Group>
        <Form.Item name="email">
          <Input placeholder="Email" type="email" />
        </Form.Item>
        <Form.Item name="phone">
          <Input placeholder="Телефон" />
        </Form.Item>
        <Form.Item name="password">
          <Input placeholder="Пароль" />
        </Form.Item>
        <Form.Item name="confirm_password">
          <Input placeholder="Подтверждение паролья" />
        </Form.Item>
        <Button.Group>
          <Button htmlType="submit">Зарегистрироваться</Button>
          <Link href="/auth/login" passHref dontClone>
            <a className="nested-link">
              <Button type="outline">Войти</Button>
            </a>
          </Link>
        </Button.Group>
      </Form>
    </div>
  );
}

Register.getLayout = function getLayout(page) {
  return <AuthLayout>{page}</AuthLayout>;
};
