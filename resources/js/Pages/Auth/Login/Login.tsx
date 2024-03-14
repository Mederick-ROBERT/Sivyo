import { Link } from '@inertiajs/react'
import {useEffect, useState} from 'react'
import { router } from '@inertiajs/react'
import AuthLayout from '@/Layouts/Auth/AuthLayout'
import { PageProps } from "@/types";

import './login.scss'

// region Components
import InputGroup from '@/Components/Forms/InputGroup/InputGroup'
import Button from '@/Components/Forms/Button/Button'
import { useToast } from '@chakra-ui/react'
// endregion

export default function Login({ errors }: PageProps) {
    const [values, setValues] = useState({
        email: "",
        password: "",
    })

    const toast = useToast()

    useEffect(() => {
        if(errors.email) {
            toast({
                title: 'Credentials error',
                description: errors.email,
                status: 'error',
                duration: 3000,
                isClosable: true,
                variant: 'subtle',
            })
        }
    }, [errors])

    function handleChange(e: any) {
        const key = e.target.id;
        const value = e.target.value
        setValues(values => ({
            ...values,
            [key]: value,
        }))
    }

    function handleSubmit(e: any) {
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
              <InputGroup
                type={'email'}
                name={'email'}
                label={'Email'}
                onChange={handleChange}
                value={values.email}
                placeholder={'jhon.doe@sivyo.fr'}
              />
              <InputGroup
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
