import React from "react";

interface Props {
  id: string;
  label: string;
  value: string;
  required?: boolean;
  autoComplete?: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export function TextInput({
  id,
  label,
  onChange,
  value,
  autoComplete = undefined,
  required = false,
}: Props) {
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
      />
    </div>
  );
}
