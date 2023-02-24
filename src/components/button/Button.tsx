import ButtonMui from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { styled } from "@mui/material/styles";
import { useState } from "react";
import "./Button.css";

type ButtonProps = {
  content: string;
  direction: string;
  icon: React.ReactNode;
  document: boolean;
};

const CustomDialogTitle = styled(DialogTitle)`
  font-family: "Raleway", sans-serif;
  color: var(--clear-white);
  font-weight: 700;
`;

const CustomDialogContentText = styled(DialogContentText)`
  font-family: "Raleway", sans-serif;
  color: var(--clear-white);
  font-weight: 400;
`;

const CustomButtonMui = styled(ButtonMui)`
  font-family: "Raleway", sans-serif;
  color: var(--accent-ligth);
  font-weight: 700;
  :hover {
    color: var(--dark-main);
    background-color: var(--accent-ligth);
  }
`;

const dialogProps = {
  backgroundColor: "var(--dark-main)",
  borderRadius: "15px",
};

export const Button = ({ content, direction, icon, document }: ButtonProps) => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handdleDownload = () => {
    window.open(direction, "_blank");
  };

  return (
    <>
      <button
        className="comp-button"
        onClick={() => {
          document ? handleClickOpen() : null;
        }}
      >
        {icon}
        {document ? content : <a href={direction}>{content}</a>}
      </button>
      <Dialog
        PaperProps={{ style: dialogProps }}
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <CustomDialogTitle id="alert-dialog-title">
          {"Before you go"}
        </CustomDialogTitle>
        <DialogContent style={{ color: "var(--clear-white)" }}>
          <CustomDialogContentText id="alert-dialog-description">
            A new browser tab with my personal resume (.PDF) is about to open. Do you
            want to procede?
          </CustomDialogContentText>
        </DialogContent>
        <DialogActions>
          <CustomButtonMui onClick={handleClose}>No, thanks</CustomButtonMui>
          <CustomButtonMui
            onClick={() => {
              handleClose();
              handdleDownload();
            }}
            autoFocus
          >
            Yes!
          </CustomButtonMui>
        </DialogActions>
      </Dialog>{" "}
    </>
  );
};
