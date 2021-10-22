import { InputComponent } from "../Input/Input";
import { FormWrap } from "./Form.styled";
import { SubButton } from "../Buttons/SubmitButton";
export const Form = ({ options, onSubmit, btnName }) => {
  return (
    <FormWrap onSubmit={onSubmit}>
      {options.map(
        ({
          label,
          value,

          type,
          name,
          onChange,
          pattern,
          key,
          autoComplete,
        }) => (
          <InputComponent
            key={key}
            lable={label}
            value={value}
            type={type}
            name={name}
            onChange={onChange}
            pattern={pattern}
            autoComplete={autoComplete}
          />
        )
      )}
      <SubButton title={btnName} />
    </FormWrap>
  );
};
