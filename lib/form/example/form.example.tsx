import { useState } from "react";
import Form from '../form'
import React from 'react';

const FormExample = () => {
    const [formdata] = useState({
        username: 'sijun',
        password: '123456'
    })
    const [fields] = useState( [
        {name: 'username', label: '用户名', input: {type: 'text'}},
        {name: 'password', label: '密码', input: {type: 'password'}}
    ])
  return (
    <Form value={formdata} fields={fields}></Form>
  );
};
export default FormExample;
