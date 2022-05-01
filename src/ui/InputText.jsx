import React from "react";

const InputText = ({
  label,
  name,
  type = "text",
  placeholder,
  value,
  required = false,
  onChange,
  className,
}) => {
  return (
    <div>
      <label className="font-semibold">{label}</label>
      <input
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={` border-2 border-[#5D9FC6] mt-2 rounded-lg w-full py-2 px-3 focus:outline-none ${className}`}
      />
    </div>
  );
};

export default InputText;
