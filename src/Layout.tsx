import { AddressForm } from "./AddressForm";
import { AddressEntry } from "./types";

interface Props {
  address: AddressEntry;
  onAddressUpdate: (address: AddressEntry) => any;
}

export function Layout(props: Props) {
  return (
    <div>
      <fieldset>
        <legend>Delivery Address</legend>
        <AddressForm
          address={props.address}
          onAddressUpdate={props.onAddressUpdate}
        />
      </fieldset>
    </div>
  );
}
