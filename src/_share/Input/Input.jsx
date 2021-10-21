import TextField from "@mui/material/TextField";
export const InputComponent = ({
  lable,
  value,
  type = "text",
  name,
  onChange,
  pattern,
  autoComplete = "on",
}) => {
  return (
    <TextField
      color="secondary"
      id="outlined-basic"
      label={lable}
      variant="outlined"
      margin="normal"
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      pattern={pattern}
      required
      autoComplete={autoComplete}
    />
  );
};
