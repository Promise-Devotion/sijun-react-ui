import React, {ReactFragment} from "react";
import Input from "../input/input";
// import classes from "../helpers/classes";
import "./form.scss";

import {scopedClassMaker} from '../helpers/classes';
const scopedClass = scopedClassMaker('jun-form')
const sc = scopedClass

export interface FormValue {
  [k: string]: any;
}

interface Props {
  value: FormValue;
  fields: Array<{ name: string; label: string; input: { type: string } }>;
  buttons: ReactFragment;
  onSubmit: React.FormEventHandler;
  onChange: (value: FormValue) => void;
  errors: { [k: string]: string[] };
}

const Form: React.FunctionComponent<Props> = (props) => {
  const formData = props.value;
  const onSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    props.onSubmit(e);
  };
  const onInputChange = (name: string, value: string) => {
    const newValue = {...formData, [name]: value};
    props.onChange(newValue);
  };
  return (
    <form className={sc("")} onSubmit={onSubmit}>
      <table className={sc('table')}>
        <tbody>
        {props.fields.map(f =>
          <tr key={f.name} className={sc('tr')}>
            <td className={sc('td')}>
              <span className={sc('label')}>
                {f.label}
              </span>
            </td>
            <td className={sc('td')}>
              <Input
                type={f.input.type}
                value={formData[f.name]}
                onChange={(e) => onInputChange(f.name, e.target.value)}
              />
              <div className={sc('error')}>
                {
                  props.errors[f.name]
                }
              </div>
            </td>
          </tr>
        )}
        {/*<tr className={sc('tr')}>*/}
        {/*  {props.buttons}*/}
        {/*</tr>*/}
        </tbody>
      </table>
      {/* <table>
        <tbody>
          {props.fields.map((f) => (
            <tr className={classes("jun-form-row")} key={f.name}>
              <td>
                <label>{f.label}</label>
              </td>
              <td>
                <Input
                  type={f.input.type}
                  value={formData[f.name]}
                  onChange={(e) => onInputChange(f.name, e.target.value)}
                />
                <div>{props.errors[f.name]}</div>
              </td>
            </tr>
          ))}
        </tbody>
      </table> */}
      <div>{props.buttons}</div>
    </form>
  );
};
export default Form;
