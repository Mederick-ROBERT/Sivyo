import { useEffect, useRef } from 'react'

import './errors.scss'

interface ErrorsProps {
  errors: string | string[]
  time?: number
  random: number
}

export default function Errors(props: ErrorsProps) {
  const { errors, time = 10, random } = props

  const errorTimeRef: any = useRef(null)
  const errorModal: any = useRef(null)

  useEffect(() => {
    errorModal.current.style.display = 'flex'
    const errorTimerWidth = errorTimeRef.current.offsetWidth
    errorTimeRef.current.style.transition = `width ${time}s linear`
    errorTimeRef.current.style.width = '0px'

    const timeoutId = setTimeout(() => {
      errorModal.current.style.display = 'none'
      errorTimeRef.current.style.width = `${errorTimerWidth}px`
      errorTimeRef.current.style.transition = ''
    }, time * 1000)

    return () => {
      clearTimeout(timeoutId)
    }
  }, [errors, random])

  return (
    <div className="errors" ref={errorModal}>
      <p className="error_text">{errors}</p>
      <span className="error_time" ref={errorTimeRef}></span>
    </div>
  )
}
