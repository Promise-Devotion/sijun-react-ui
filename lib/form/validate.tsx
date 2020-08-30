import { FormValue } from "./form";

interface FormRule {
  key: string;
  required?: boolean;
  minLength?: number;
  maxLength?: number;
  pattern?: RegExp
}

interface FormErrors {
  [k: string]: string[];
}

function isEmpty(value: any) {
  return value === undefined || value === null || value === ""
}

type FormRules = Array<FormRule>;
const Validate = (FormValue: FormValue, rules: FormRules): FormErrors => {
  let errors = {};
  const addError = (key: string, error: OneError) : void => {
    if (errors[key] === undefined) {
      errors[key] = []
    }
    errors[key].push(error)
  }
  rules.map((rule) => {
    const value = FormValue[rule.key];
    if (rule.required && isEmpty(value)) {
      addError(rule.key, '必填')
    }
    if (rule.minLength && isEmpty(value) && value.length < rule.minLength) {
      addError(rule.key, 'minLength')
    }
    if (rule.maxLength && isEmpty(value) && value.length > rule.maxLength) {
      addError(rule.key, 'maxLength')
    }
  });
  return errors;
};

export default Validate;
