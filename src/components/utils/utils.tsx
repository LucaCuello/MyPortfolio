import { DialogContentText, DialogTitle } from "@mui/material";
import ButtonMui from "@mui/material/Button";
import { styled } from "@mui/material/styles";

export const CustomDialogTitle = styled(DialogTitle)`
  font-family: "Raleway", sans-serif;
  color: var(--mint-50);
  font-weight: 700;
`;

export const CustomDialogContentText = styled(DialogContentText)`
  font-family: "Raleway", sans-serif;
  color: var(--neutral-200);
  font-weight: 400;
`;

export const CustomButtonMui = styled(ButtonMui)`
  font-family: "Raleway", sans-serif;
  color: var(--mint-150);
  font-weight: 700;
  :hover {
    color: var(--mint-400);
    background-color: var(--mint-150);
  }
`;

export const dialogProps = {
  backgroundColor: "var(--mint-400)",
  borderRadius: "15px",
};
