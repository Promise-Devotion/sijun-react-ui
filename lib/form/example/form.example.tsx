import { useState, Fragment } from "react";
import Form from "../form";
import React from "react";
import { FormValue } from "../form";
import Validate from "../validate";

const FormExample = () => {
  const [formData, setFormData] = useState<FormValue>({
    username: "sijun",
    password: "123456",
  });
  const [fields] = useState([
    { name: "username", label: "用户名", input: { type: "text" } },
    { name: "password", label: "密码", input: { type: "password" } },
  ]);
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    const rules = [
      { key: "username", required: true },
      { key: "username", maxLength: 18, minLength: 6 },
      { key: "username", pattern: /^[A-Za-z0-9]+$/ }
    ];
    const errors = Validate(formData, rules);

    console.log(errors);
  };
  return (
    <Form
      value={formData}
      fields={fields}
      buttons={
        <Fragment>
          <button type="submit">提交</button>
          <button>取消</button>
        </Fragment>
      }
      onSubmit={onSubmit}
      onChange={(newValue) => setFormData(newValue)}
    ></Form>
  );
};
export default FormExample;
