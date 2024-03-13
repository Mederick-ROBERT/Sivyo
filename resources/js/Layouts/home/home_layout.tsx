import { Link, Head } from '@inertiajs/react'
import { usePage } from '@inertiajs/react'
import { JSX } from 'react'

import './home_layout.scss'
import logo from '../../../picture/Logo/Logo2.png'

interface LayoutProps {
  children: JSX.Element
  title?: string
}

export default function HomeLayout({ children, title = 'Home' }: LayoutProps) {
  const { user } = usePage().props

  return (
    <main className="main_wrapper">
      <header className="home_header">
        <Head title={title} />
        <Link href={'/'}>
          <img src={logo} alt="Logo" className="home_sivyo_logo" />
        </Link>
        <nav className="home_navigation">
          <ul className="home_navigation_list">
            {user ? (
              <>
                <li className="home_navigation_item">
                  <Link href={'/dashboard'} className="home_navigation_link">
                    Dashboard
                  </Link>
                </li>
                <li className="home_navigation_item">
                  <Link href={'/logout'} method={'post'} as={'button'} className="home_navigation_link">
                    Logout
                  </Link>
                </li>
              </>
            ) : (
              <>
                <li className="home_navigation_item">
                  <Link href={'/login'} className="home_navigation_link">
                    Login
                  </Link>
                </li>
                <li className="home_navigation_item">
                  <Link href={'/register'} className="home_navigation_link">
                    Register
                  </Link>
                </li>
              </>
            )}
          </ul>
        </nav>
      </header>
      <article>{children}</article>
    </main>
  )
}
