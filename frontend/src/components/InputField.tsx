interface InputFieldProps{
  name: string,
  type: string,
  value: string,
  label: string
  onChange: (e: React.FormEvent<HTMLInputElement>) => void,
}

const InputField = ({name, type, value, label, onChange}: InputFieldProps) => {
  return (
    <div className="ml-auto relative">
      <input
        className="bg-black border-b-2 w-96 focus:outline-none text-xl"
        name={name}
        type={type}
        value={value} 
        onChange={onChange}  
      />
      <label
        htmlFor={name}
        className="text-md absolute bottom-1 transition-all left-0 -translate-y-7"
      >
        {label}
      </label>
    </div>
  )
}

export default InputField