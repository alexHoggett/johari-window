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
      <label
        htmlFor={name}
        className="text-3xl mr-7 absolute bottom-1"
      >
        {label}
          </label>
      <input
        className="bg-black border-b-2 w-96 focus:outline-none text-xl"
        name={name}
        type={type}
        value={value} 
        onChange={onChange}  
      />
    </div>
  )
}

export default InputField