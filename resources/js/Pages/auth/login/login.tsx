import { Link } from '@inertiajs/react'
import { useState } from 'react'
import { router } from '@inertiajs/react'
import AuthLayout from '../../../Layouts/auth/auth_layout'
import { usePage } from '@inertiajs/react'

import './login.scss'

// region Components
import Input_group from '../../../Components/forms/input_group/input_group'
import Button from '../../../Components/forms/button/button'
// import Errors from '../../components/forms/errors'
// endregion

export default function Login({ status, canResetPassword }: { status?: string, canResetPassword: boolean }) {
    const [values, setValues] = useState({
        email: "",
        password: "",
    })

    function handleChange(e) {
        const key = e.target.id;
        const value = e.target.value
        setValues(values => ({
            ...values,
            [key]: value,
        }))
    }

    function handleSubmit(e) {
        e.preventDefault()
        router.post('/login', values)
        setValues(values => ({
            email: values.email,
            password: "",
        }))
    }

  return (
    <div className="login_container">
      <div className="content_wrapper">
        <div className="welcome_back">
          <h1 className="welcome_back_title">Welcome back!</h1>
          <p className="welcome_back_text">Log in to your account to continue</p>
          <p className="welcome_back_signup">
            Need an account ?{' '}
            <Link href={'/register'} className="welcome_back_signup_link">
              Sign up
            </Link>
          </p>
        </div>
        <form method="post" onSubmit={handleSubmit}>
          <Input_group
            type={'email'}
            name={'email'}
            label={'Email'}
            onChange={handleChange}
            value={values.email}
            placeholder={'jhon.doe@sivyo.fr'}
          />
          <Input_group
            type={'password'}
            name={'password'}
            label={'Password'}
            onChange={handleChange}
            value={values.password}
          />
          <Button type={'submit'} content={'Login'} />
        </form>
        {/*{error && <Errors errors={error} time={2} random={random} />}*/}
      </div>
    </div>
  )
}

Login.layout = (page: any) => <AuthLayout children={page} title={'Login'} />
