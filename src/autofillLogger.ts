import React from "react";

export interface EventData {
  inputName: string;
  event: {
    inputType: string;
  };
}

export interface AutofillEvent {
  id: string;
  createdAt: Date;
  data: EventData;
}

interface Logger {
  log: (data: EventData) => any;
}

export const AutofillLoggerContext = React.createContext<Logger>({
  log: () => { },
});

export function useAutofillLogger() {
  return React.useContext(AutofillLoggerContext);
}
