import { Card, Form, Input, Button } from "./form";

export default function LoginForm() {
  return (
    <div>
      <Card>
        <Form>
          <label htmlFor="username">Username</label>
          <Input type="text" name="username" />
          <label htmlFor="password">Password</label>
          <Input type="password" name="password" />
          <Button type="submit">Login</Button>
        </Form>
      </Card>
    </div>
  );
}
