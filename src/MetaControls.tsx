import { AddressEntry } from "./types";
import * as database from './database';
import { emptyAddress } from "./emptyAddress";
import { isEmpty } from "lodash";
import { isEmptyAddress } from "./addresses";
import { clear } from "console";

interface Props {
  address: AddressEntry;
  onAddressUpdate: (address: AddressEntry) => any;
  showDebug: boolean;
  setDebug: (isDebug: boolean) => any;
  clearLog: () => any;
}

/**
 * Toggles for the simulated app state.
 */
export function MetaControls({
  address,
  onAddressUpdate,
  showDebug,
  setDebug,
  clearLog,
}: Props) {
  function toggleDebug() {
    setDebug(!showDebug);
  }

  function resetAddress() {
    onAddressUpdate(emptyAddress);
  }

  return (
    <div className="meta-controls">
      <fieldset>
        <legend className="meta-legend">Meta controls 🪬</legend>
        <div>
          <input
            type="checkbox"
            id="debug"
            name="debug"
            onChange={toggleDebug}
            checked={showDebug}
          />
          <label htmlFor="debug">Show Logs</label>
        </div>
        <div>
          <button
            className="reset-button"
            type="button"
            onClick={resetAddress}
            disabled={isEmptyAddress(address)}
          >
            Reset Address
          </button>
        </div>
        <div>
          <button
            className="clear-button"
            type="button"
            onClick={clearLog}
          >
            Clear Log
          </button>
        </div>
      </fieldset>
    </div>
  )
}
