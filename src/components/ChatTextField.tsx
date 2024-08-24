import { SxProps, TextField, TextFieldProps } from "@mui/material";

export type Props = {
  label?: string;
  sx?: SxProps;
  disabled?: boolean;
  rows?: string | number;
} & TextFieldProps;

const ChatTextField = ({
  label,
  sx,
  disabled,
  rows,
  ...textFieldProps
}: Props) => {
  return (
    <TextField
      label={label}
      sx={sx}
      disabled={disabled}
      rows={rows}
      {...textFieldProps}
    />
  );
};

export default ChatTextField;
