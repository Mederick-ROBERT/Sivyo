import { JSX } from 'react'
import { Head, Link } from '@inertiajs/react'

import './auth_layout.scss'
import logo from '../../../picture/Logo/Logo2.png'

interface AuthLayoutProps {
  children: JSX.Element
  title: string
}

export default function AuthLayout({ children, title }: AuthLayoutProps) {
  return (
    <main className="auth_wrapper">
      <header className="auth_header">
        <Head title={title} />
        <Link href={'/'}>
          <img src={logo} alt="Logo" className="sivyo_logo" />
        </Link>
      </header>
      <article>{children}</article>
    </main>
  )
}
