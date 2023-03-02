import { useId } from "react";
import { AddressEditor } from "./AddressEditor";
import { AddressEntry } from "./types";

interface Props {
  address: AddressEntry;
  onAddressUpdate: (addressEntry: AddressEntry) => any;
}

export function AddressForm(props: Props) {
  const formID = useId();

  return (
    <AddressEditor
      formID={formID}
      address={props.address}
      onUpdate={props.onAddressUpdate}
    />
  );
}
