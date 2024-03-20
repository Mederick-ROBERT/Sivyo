import { PageProps } from "@/types";
import {useEffect, useState} from "react";
import {Head, Link, router} from "@inertiajs/react";

// region Components
import InputGroup from '@/Components/Forms/InputGroup/InputGroup'
import Button from '@/Components/Forms/Button/Button'
import {useToast} from "@chakra-ui/react";
// endregion

export default function ChangePassword({ errors, flash }: PageProps) {
  const { success } = flash;

  // toast action for errors
  const toast = useToast();

  useEffect(() => {
    Object.keys(errors).map((error: any) => {
      if(error) {
        console.log(errors[error]);
        toast({
          title: 'Password error',
          description: errors[error],
          status: 'error',
          duration: 6000,
          isClosable: true,
          variant: 'subtle',
        });
      }
    })
  }, [errors]);
  // ----------------------------

  const [values, setValues] = useState({
    old_password: '',
    new_password: '',
    password_confirmation: '',
  });

  // toast action for success update
  useEffect(() => {
    if (success) {
      toast({
        title: 'Password updated',
        description: success,
        status: 'success',
        duration: 3000,
        isClosable: true,
        variant: 'subtle',
      });
    }
  }, [flash]);

  function handleChange(e: any) {
    const key = e.target.id;
    const value = e.target.value;
    setValues(values => ({
      ...values,
      [key]: value,
    }));
  }

  function handleSubmit(e: any) {
    e.preventDefault();
    router.put('/change-password', values);
    setValues({
      old_password: '',
      new_password: '',
      password_confirmation: '',
    })
  }

  return (
    <>
      <h1>Change password</h1>
      <form method={'post'} onSubmit={handleSubmit}>
        <InputGroup label={'Old Password'} name={'old_password'} onChange={handleChange} value={values.old_password} type={'password'} />
        <InputGroup label={'New Password'} name={'new_password'} onChange={handleChange} value={values.new_password} type={'password'} />
        <InputGroup label={'Confirm Password'} name={'password_confirmation'} onChange={handleChange} value={values.password_confirmation} type={'password'} />
        <Button type={'submit'} content={'Change Password'} />
      </form>
    </>
  )
}
