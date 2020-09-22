import { DialogContentText } from "@material-ui/core";
import ActionDialog from "@saleor/components/ActionDialog";
import { ConfirmButtonTransitionState } from "@saleor/components/ConfirmButton";
import React from "react";
import { FormattedMessage, useIntl } from "react-intl";

export interface UshopDeleteDialogProps {
  confirmButtonState: ConfirmButtonTransitionState;
  open: boolean;
  onConfirm: () => void;
  onClose: () => void;
  name: string;
}

const UshopDeleteDialog: React.FC<UshopDeleteDialogProps> = ({
  name,
  confirmButtonState,
  onClose,
  onConfirm,
  open
}) => {
  const intl = useIntl();

  return (
    <ActionDialog
      open={open}
      onClose={onClose}
      confirmButtonState={confirmButtonState}
      onConfirm={onConfirm}
      variant="delete"
      title={intl.formatMessage({
        defaultMessage: "Гадуур дагавар устгах",
        description: "dialog title"
      })}
    >
      <DialogContentText>
        <FormattedMessage
          defaultMessage="Are you sure you want to delete {ushopName}?"
          description="dialog content"
          values={{
            ushopName: <strong>{name}</strong>
          }}
        />
      </DialogContentText>
    </ActionDialog>
  );
};

UshopDeleteDialog.displayName = "UshopDeleteDialog";
export default UshopDeleteDialog;
