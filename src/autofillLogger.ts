import React from "react";

export interface AutofillEvent {
  id: string;
  inputName: string;
  createdAt: Date;
}

interface Logger {
  log: (event: Pick<AutofillEvent, 'inputName'>) => any;
}

export const AutofillLoggerContext = React.createContext<Logger>({
  log: () => { },
});

export function useAutofillLogger() {
  return React.useContext(AutofillLoggerContext);
}
