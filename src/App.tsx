import React from 'react';
import { MetaControls } from './MetaControls';
import { Layout } from './Layout';
import './App.scss';
import { emptyAddress } from './emptyAddress';
import { AddressEntry } from './types';
import { AutofillEvent, AutofillLoggerContext, EventData } from './autofillLogger';

export default function App() {
  const [runningLog, setLog] = React.useState<AutofillEvent[]>([]);
  const [address, setAddress] = React.useState<AddressEntry>(emptyAddress);
  const [showDebug, setDebug] = React.useState(true);

  function log(data: EventData) {
    runningLog.push({ id: crypto.randomUUID(), createdAt: new Date(), data });
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
                {runningLog.slice().reverse().map((event) => (
                  <div key={event.id}>
                    <span className="weight-bold">{event.createdAt.toLocaleTimeString()}</span>
                    <div>{JSON.stringify(event.data)}</div>
                  </div>
                ))}
              </pre>
            </fieldset>
          }
        </div>
      </div>
    </AutofillLoggerContext.Provider>
  );
}
