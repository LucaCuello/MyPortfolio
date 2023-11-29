import { Dialog, DialogActions, DialogContent } from "@mui/material";
import { saveAs } from "file-saver";
import { useState } from "react";
import { ButtonProps } from "../../interfaces/interfaces";
import {
  CustomButtonMui,
  CustomDialogContentText,
  CustomDialogTitle,
  dialogProps,
} from "../utils/utils";
import "./Button.css";

export const Button = ({
  variant,
  content = "Button",
  hasIcon = false,
  icon,
  size = "md",
  as = "button",
  linkTo = "#",
  target = "_blank",
  isCV = false,
}: ButtonProps) => {
  const [open, setOpen] = useState(false);
  const isLink = as === "link";

  const handleDownload = () => {
    handleClose();
    if (isCV) {
      saveAs(linkTo, "LucaCuelloCV2023ENG.pdf");
    }
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return isLink ? (
    <>
      <Dialog
        PaperProps={{ style: dialogProps }}
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <CustomDialogTitle id="alert-dialog-title">
          Download Rresume
        </CustomDialogTitle>
        <DialogContent style={{ color: "var(--clear-white)" }}>
          <CustomDialogContentText id="alert-dialog-description">
            Do you want to download my resume in PDF format?
          </CustomDialogContentText>
        </DialogContent>
        <DialogActions>
          <CustomButtonMui onClick={handleClose}>Cancel</CustomButtonMui>
          <CustomButtonMui onClick={handleDownload}>Download</CustomButtonMui>
        </DialogActions>
      </Dialog>
      <a
        className={`button button-${variant} button-${size}`}
        href={isCV ? "#" : linkTo}
        target={target}
        onClick={isCV ? handleClickOpen : undefined}
      >
        {hasIcon && icon}
        <span>{content}</span>
      </a>
    </>
  ) : (
    <button className={`button button-${variant} button-${size}`}>
      {hasIcon && icon}
      <span>{content}</span>
    </button>
  );
};
