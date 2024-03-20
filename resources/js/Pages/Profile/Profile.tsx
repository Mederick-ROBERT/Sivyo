import { PageProps } from "@/types";
import {useEffect, useState} from "react";
import {Head, Link, router} from "@inertiajs/react";

// region Components
import InputGroup from '@/Components/Forms/InputGroup/InputGroup'
import Button from '@/Components/Forms/Button/Button'
import {useToast} from "@chakra-ui/react";
// endregion


export default function Profile({ auth, errors, flash }: PageProps) {
  const { username, email } = auth.user;
  const { success } = flash;

  // toast action for email error
  const emailError = errors.email;

  const toast = useToast();

  useEffect(() => {
    if (emailError) {
      toast({
        title: 'Email error',
        description: emailError,
        status: 'error',
        duration: 3000,
        isClosable: true,
        variant: 'subtle',
      });
    }
  }, [errors]);
  // ----------------------------

  const [values, setValues] = useState({
    username: username,
    email: email,
  });

  // toast action for success update
  useEffect(() => {
    if (success) {
      toast({
        title: 'Profile updated',
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
    router.put('/profile', values);
  }

  return (
    <>
      <Head title={'Profile'} />
      <h1>Our Profile</h1>
      <div>
        <h2>Update our profile</h2>
        <form method={'post'} onSubmit={handleSubmit}>
          <InputGroup label={'Username'} name={'username'} onChange={handleChange} value={values.username} />
          <InputGroup label={'Email'} name={'email'} onChange={handleChange} value={values.email} type={'email'} />
          <Button type={'submit'} content={'Save change'} />
        </form>
      </div>
      <div>
        <Link href={'/change-password'}>Change password</Link>
      </div>
    </>
  );
}
