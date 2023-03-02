import React from 'react';
import { MetaControls } from './MetaControls';
import { Layout } from './Layout';
import './App.scss';
import { emptyAddress } from './emptyAddress';
import { AddressEntry } from './types';
import { AutofillEvent, AutofillLoggerContext } from './useAutofillLogger';

export default function App() {
  const [runningLog, setLog] = React.useState<AutofillEvent[]>([]);
  const [address, setAddress] = React.useState<AddressEntry>(emptyAddress);
  const [showDebug, setDebug] = React.useState(true);

  function log(event: AutofillEvent) {
    runningLog.push(event)
    setLog(runningLog);
  }

  function clearLog() {
    setLog([]);
  }

  const logger = { log };

  return (
    <AutofillLoggerContext.Provider value={logger}>
      <div className="main">
        <div className="layout">
          <MetaControls
            address={address}
            onAddressUpdate={setAddress}
            showDebug={showDebug}
            setDebug={setDebug}
            clearLog={clearLog}
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
                {runningLog.map((event, idx) => (
                  <div key={`${event} + ${idx}`}>{JSON.stringify(event)}</div>
                ))}
              </pre>
            </fieldset>
          }
        </div>
      </div>
    </AutofillLoggerContext.Provider>
  );
}
