import Button2 from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { useState } from "react";
import "./Button.css";

type ButtonProps = {
  content: string;
  direction: string;
  icon: React.ReactNode;
  download: boolean;
};

export const Button = ({ content, direction, icon, download }: ButtonProps) => {
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
          download ? handleClickOpen() : null;
        }}
      >
        {icon}
        {download ? content : <a href={direction}>{content}</a>}
      </button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Get resume?"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            You're about to get redirected to a PDF file with my resume. Do you want
            to procede?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button2 onClick={handleClose}>No, thanks</Button2>
          <Button2
            onClick={() => {
              handleClose();
              handdleDownload();
            }}
            autoFocus
          >
            Yes!
          </Button2>
        </DialogActions>
      </Dialog>{" "}
    </>
  );
};
