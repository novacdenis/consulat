import Link from "next/link";
import AuthLayout from "@/layouts/auth.layout";
import Form from "@/components/form";
import Input from "@/components/input";
import Button from "@/components/button";
import { authLoginSchema } from "@/services/validation/schemas";
import { createNotification } from "@/actions/notificationsAction";

export default function Login() {
  const onFinish = () => {
    createNotification();
  };

  return (
    <div className="auth-card login">
      <Form onFinish={onFinish} validationSchema={authLoginSchema}>
        <Form.Item name="email">
          <Input placeholder="Email" type="email" />
        </Form.Item>
        <Form.Item name="password">
          <Input placeholder="Пароль" type="password" />
        </Form.Item>
        <Button.Group>
          <Button htmlType="submit">Войти</Button>
          <Link href="/auth/register" passHref>
            <a className="nested-link">
              <Button type="outline">Регистрация</Button>
            </a>
          </Link>
        </Button.Group>
      </Form>
      <div className="d-flex justify-content-center">
        <Link href="/auth/reset">
          <a className="pt-4 link">Забыли пароль?</a>
        </Link>
      </div>
    </div>
  );
}

Login.getLayout = function getLayout(page) {
  return <AuthLayout>{page}</AuthLayout>;
};
