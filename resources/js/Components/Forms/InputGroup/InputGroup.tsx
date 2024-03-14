import './input_group.scss'

interface InputGroupProps {
  label: string
  name: string
  type?: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  value: string
  placeholder?: string
}
function InputGroup(props: InputGroupProps) {
  const { label, name, type = 'text', onChange, value, placeholder } = props

  return (
    <div className="input_group">
      <label htmlFor={name} className="input_label">
        {label}
      </label>
      <input
        type={type}
        id={name}
        name={name}
        onChange={onChange}
        value={value}
        className="input_item"
        placeholder={placeholder}
      />
    </div>
  )
}

export default InputGroup
