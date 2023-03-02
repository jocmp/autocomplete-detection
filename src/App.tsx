import React from 'react';
import { MetaControls } from './MetaControls';
import { Layout } from './Layout';
import './App.css';
import { emptyAddress } from './emptyAddress';
import { AddressEntry } from './types';

export default function App() {
  const [address, setAddress] = React.useState<AddressEntry>(emptyAddress);
  const [showDebug, setDebug] = React.useState(false);

  return (
    <>
      <div className="main">
        <div className="layout">
          <MetaControls
            address={address}
            onAddressUpdate={setAddress}
            showDebug={showDebug}
            setDebug={setDebug}
          />
          <Layout
            address={address}
            onAddressUpdate={setAddress}
          />
        </div>
        <div className="debug">
          {showDebug &&
            <fieldset>
              <legend>Debug log</legend>
              <pre>
                {JSON.stringify({}, null, 2)}
              </pre>
            </fieldset>
          }
        </div>
      </div>
    </>
  );
}
