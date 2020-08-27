import React, { ReactFragment } from "react";

interface Props {
  value: { [k: string]: any };
  fields: Array<{ name: string; label: string; input: { type: string } }>;
  buttons: ReactFragment;
}

const Form: React.FunctionComponent<Props> = (props) => {
  return (
    <form>
      {props.fields.map((f) => (
        <div>
          {f.label}
          <input type={f.input.type} />
        </div>
      ))}
      <div>{props.buttons}</div>
    </form>
  );
};
export default Form;
