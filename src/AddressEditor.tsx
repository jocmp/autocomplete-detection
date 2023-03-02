import { map } from "lodash";
import { TextInput } from "./TextInput";
import { usAdminAreas, countries } from "./database";
import { Address, AddressEntry } from "./types";
import React from "react";

interface Props {
  address: AddressEntry;
  formID: string;
  onUpdate: (address: AddressEntry) => any;
}

export function AddressEditor(props: Props) {
  const { address, onUpdate } = props;

  function updateField(field: keyof AddressEntry) {
    return function onChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
      onUpdate({
        ...address,
        [field]: e.target.value,
      });
    }
  }

  function updateCountryCode(e: React.ChangeEvent<HTMLSelectElement>) {
    const nextCountryCode = e.target.value;

    function adminAreaOrDefault() {
      if (nextCountryCode !== 'US') {
        return '';
      }

      return address.administrativeAreaCode;
    }

    onUpdate({
      ...address,
      countryCode: nextCountryCode,
      administrativeAreaCode: adminAreaOrDefault(),
    });
  }

  return (
    <form id={props.formID}>
      <label htmlFor="country-code">Country</label>
      <select
        className="selector"
        id="country-code"
        name="country-code"
        value={address.countryCode}
        required
        autoComplete="country"
        onChange={updateCountryCode}
      >
        {map(countries, (name, key) => (
          <option key={key} value={key}>{name}</option>
        ))}
      </select>
      <TextInput
        id="contact-name"
        label="Name"
        onChange={updateField('contactName')}
        autoComplete="name"
        value={address.contactName}
        required
      />
      <TextInput
        id="street-address"
        label="Street Address"
        autoComplete="address-line1"
        onChange={updateField('streetAddress')}
        value={address.streetAddress}
        required
      />
      <TextInput
        id="extended-address"
        label="Extended Address"
        autoComplete="address-line2"
        onChange={updateField('extendedAddress')}
        value={address.extendedAddress}
      />
      <TextInput
        id="locality"
        label="City"
        autoComplete="address-level2"
        onChange={updateField('locality')}
        value={address.locality}
        required
      />
      {address.countryCode === 'US' &&
        <>
          <label htmlFor="admin-area">State</label>
          <select
            className="selector"
            id="admin-area"
            name="admin-area"
            autoComplete="address-level1"
            value={address.administrativeAreaCode}
            required
            onChange={updateField('administrativeAreaCode')}
          >
            <option disabled value=""></option>
            {map(usAdminAreas, (name, key) => (
              <option key={key} value={key}>{name}</option>
            ))}
          </select>
        </>
      }
      <TextInput
        id="postal-code"
        label="Postal Code"
        onChange={updateField('postalCode')}
        autoComplete="postal-code"
        value={address.postalCode}
        required
      />
    </form>
  );
}
