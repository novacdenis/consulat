import AuthLayout from "@/layouts/auth.layout";
import { Form, FormItem, Input } from "@/components/form";

export default function Login() {
  const onFinish = () => null;

  return (
    <div className="auth-card">
      <Form onFinish={onFinish}>
        <FormItem
          name="test"
          label="Test"
          rules={[
            {
              required: true,
              message: " ceva",
            },
            {
              minLength: 4,
              message: " min4",
            },
          ]}
        >
          <Input />
        </FormItem>
      </Form>
    </div>
  );
}

Login.getLayout = function getLayout(page) {
  return <AuthLayout>{page}</AuthLayout>;
};
