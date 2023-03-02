import React, { RefObject, useEffect, useRef } from "react";
import { useAutofillLogger } from "./autofillLogger";

interface Props {
  id: string;
  label: string;
  value: string;
  required?: boolean;
  autoComplete?: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => any;
}

export function TextInput({
  id,
  label,
  onChange,
  value,
  autoComplete = undefined,
  required = false,
}: Props) {
  const logger = useAutofillLogger();
  const ref = useRef(null);


  function onAutofill(event: any) {
    if (!('data' in event) || event.inputType === 'insertReplacementText') {
      logger.log({ inputName: id, event: { inputType: event.inputType } });
    }
  }

  useAutofillDetection(ref, onAutofill);

  return (
    <div className="text-input">
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        name={id}
        type="text"
        required={required}
        onChange={onChange}
        autoComplete={autoComplete}
        value={value}
        ref={ref}
      />
    </div>
  );
}

// https://usehooks.com/useEventListener/
function useAutofillDetection(element: RefObject<HTMLInputElement>, onAutofill: (event: any) => any) {
  const savedHandler = useRef(onAutofill)

  useEffect(() => {
    savedHandler.current = onAutofill
  }, [onAutofill])

  useEffect(() => {
    const targetElement = element?.current;

    if (!(targetElement && targetElement.addEventListener)) return

    // Create event listener that calls handler function stored in ref
    const listener: typeof onAutofill = event => savedHandler.current(event);

    targetElement.addEventListener('input', listener);

    // Remove event listener on cleanup
    return () => {
      targetElement.removeEventListener('input', listener);
    }
  }, [element]);
}
