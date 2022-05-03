const InputCheck = ({ label, name, checked, onChange }) => {
  return (
    <div className="mt-2">
      <input
        name={name}
        type="checkbox"
        className="mr-2"
        checked={checked}
        onChange={onChange}
      />
      <label className="font-semibold">{label}</label>
    </div>
  );
};

export default InputCheck;
