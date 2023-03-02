import { isEmpty, omitBy, pick } from "lodash";
import { AddressEntry } from "./types";

export function isEmptyAddress(address: AddressEntry) {
  // Select only user-entered fields. Leave out IDs and other checks.
  const addressEntryFields = pick(address, userEnteredFields);
  // Leave out falsey fields
  const presentFields = omitBy(addressEntryFields, isEmpty);

  // If no fields remain, then the address is "empty".
  return isEmpty(presentFields);
}

const userEnteredFields = [
  'contactName',
  'streetAddress',
  'extendedAddress',
  'locality',
  'administrativeAreaCode',
  'postalCode'
];
