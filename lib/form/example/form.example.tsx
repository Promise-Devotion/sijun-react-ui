import { useState, Fragment } from "react";
import Form from "../form";
import React from "react";
import { FormValue } from "../form";
import Validate from "../validate";
import Button from '../../button/button';

const FormExample = () => {
  const [formData, setFormData] = useState<FormValue>({
    username: "sijun",
    password: "",
  });
  const [fields] = useState([
    { name: "username", label: "用户名用户名", input: { type: "text" } },
    { name: "password", label: "密码", input: { type: "password" } },
  ]);

  const [errors, setErrors] = useState({})
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    const rules = [
      { key: "username", required: true },
      { key: "username", maxLength: 18, minLength: 6 },
      { key: "username", pattern: /^[A-Za-z0-9]+$/ }
    ];
    const errors = Validate(formData, rules);
    setErrors(errors)
  };
  return (
    <Form
      value={formData}
      fields={fields}
      buttons={
        <Fragment>
          <Button type="submit" level="danger">提交</Button>
          <Button level="normal">取消</Button>
        </Fragment>
      }
      errors={errors}
      onSubmit={onSubmit}
      onChange={(newValue) => setFormData(newValue)}
    >
    </Form>
  );
};
export default FormExample;
