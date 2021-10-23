import { InputComponent } from "../Input/Input";
import { FormWrap } from "./Form.styled";
import { SubButton } from "../Buttons/SubmitButton";

export const Form = ({
  onSubmit,
  btnName,
  dataForm,
  onChange,
  formOptions,
}) => {
  return (
    <FormWrap onSubmit={onSubmit}>
      {formOptions.map(({ label, type, name, pattern, autoComplete }) => (
        <InputComponent
          key={name}
          lable={label}
          value={dataForm[name]}
          type={type}
          name={name}
          onChange={onChange}
          pattern={pattern}
          autoComplete={autoComplete}
        />
      ))}
      <SubButton title={btnName} />
    </FormWrap>
  );
};
