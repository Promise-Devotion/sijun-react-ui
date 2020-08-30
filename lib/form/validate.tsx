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
  const addError = (key: string, error: string) : void => {
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
    if (rule.minLength && !isEmpty(value) && value.length < rule.minLength) {
      addError(rule.key, '太短')
    }
    if (rule.maxLength && !isEmpty(value) && value.length > rule.maxLength) {
      addError(rule.key, '太长')
    }
    if (rule.pattern && !(rule.pattern.test(value))) {
      addError(rule.key,  '不符合规范')
    }
  });
  return errors;
};

export default Validate;
