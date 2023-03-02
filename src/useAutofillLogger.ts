import React from "react";

export interface AutofillEvent {
  inputName: string;
}

interface Logger {
  log: (event: AutofillEvent) => any;
}

export const AutofillLoggerContext = React.createContext<Logger>({
  log: () => { },
});

export function useAutofillLogger() {
  return React.useContext(AutofillLoggerContext);
}
