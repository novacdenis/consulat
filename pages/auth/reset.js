import Link from "next/link";
import AuthLayout from "@/layouts/auth.layout";
import Form from "@/components/form";
import Input from "@/components/input";
import Button from "@/components/button";
import { authResetSchema } from "@/services/validation/schemas";

export default function Reset() {
  const onFinish = () => null;

  return (
    <div className="auth-card login">
      <Form onFinish={onFinish} validationSchema={authResetSchema}>
        <Form.Item name="email">
          <Input placeholder="Email" type="email" />
        </Form.Item>
        <Button htmlType="submit">Восстановить</Button>
      </Form>
      <div className="d-flex justify-content-center">
        <Link href="/auth/login">
          <a className="pt-4 link">Вспомнили пароль?</a>
        </Link>
      </div>
    </div>
  );
}

Reset.getLayout = function getLayout(page) {
  return <AuthLayout>{page}</AuthLayout>;
};
