import React from "react";
import { useAutofillLogger } from "./useAutofillLogger";

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

  function onAnimation(e: React.AnimationEvent<HTMLInputElement>) {
    if (e.animationName === 'onAutoFillStart') {
      logger.log({ inputName: id });
    }
  }

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
        onAnimationStart={onAnimation}
        value={value}
      />
    </div>
  );
}
