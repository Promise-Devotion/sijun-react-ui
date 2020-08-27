import React from "react";

interface Props {
  value: { [k: string]: any };
  fields: Array<{ name: string; label: string; input: { type: string } }>;
}

const Form: React.FunctionComponent<Props> = (props) => {
  return (
    <div>
      {props.fields.map((f) => (
        <div>
            {f.label}
            <input type={f.input.type}/>
        </div>
      ))}
    </div>
  );
};
export default Form;
