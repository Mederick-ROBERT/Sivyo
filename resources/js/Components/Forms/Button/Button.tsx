import './button.scss'

interface ButtonProps {
  type: 'submit' | 'button' | 'reset'
  content: string
}

function Button(props: ButtonProps) {
  const { type, content } = props

  return (
    <button type={type} className="form_button">
      {content}
    </button>
  )
}

export default Button
