import { useState, Fragment } from "react";
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
    <Form value={formdata} fields={fields} 
        buttons={
            <Fragment>
                <button>提交</button>
                <button>取消</button>
            </Fragment>
        }
    ></Form>
  );
};
export default FormExample;
