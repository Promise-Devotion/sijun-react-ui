import React, { ReactFragment } from "react";
import Input from "../input/input";
import classes from "../helpers/classes";
import "./form.scss";

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
    const newValue = { ...formData, [name]: value };
    props.onChange(newValue);
  };
  return (
    <form className={classes("jun-form")} onSubmit={onSubmit}>
      <table>
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
      </table>
      <div>{props.buttons}</div>
    </form>
  );
};
export default Form;
