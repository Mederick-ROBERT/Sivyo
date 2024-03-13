import { Head } from '@inertiajs/react'
import { useState } from 'react'
import { router } from '@inertiajs/react'
import AuthLayout from '../../../Layouts/auth/auth_layout'

// region Component
import Input_group from '../../../Components/forms/input_group/input_group'
import Button from '../../../Components/forms/button/button'
// endregion

export default function Register() {
  const [values, setValues] = useState({
    username: '',
    email: '',
    password: '',
  })

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const key = e.target.id
    const value = e.target.value
    setValues((values) => ({
      ...values,
      [key]: value,
    }))
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    router.post('/register', values)
  }

  return (
    <>
      <Head title="Register" />
      <div className="container">
        <div className="title">Page de Registration</div>
        <form method="post" onSubmit={handleSubmit}>
          <Input_group
            label={'username'}
            name={'username'}
            type={'text'}
            onChange={handleChange}
            value={values.username}
          />
          <Input_group
            label={'email'}
            name={'email'}
            type={'email'}
            onChange={handleChange}
            value={values.email}
          />
          <Input_group
            label={'password'}
            name={'password'}
            type={'password'}
            onChange={handleChange}
            value={values.password}
          />
          <Button type={'submit'} content={'Register'} />
        </form>
      </div>
    </>
  )
}

Register.layout = (page: any) => <AuthLayout children={page} title={'Login'} />
