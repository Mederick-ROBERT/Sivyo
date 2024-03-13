import { Link } from '@inertiajs/react'
import { JSX } from 'react'

import './layout.scss'
import logo from '../../../picture/Logo/Logo2.png'

interface LayoutProps {
  children: JSX.Element
}

export default function Layout({ children }: LayoutProps) {
  return (
    <main className="main_wrapper">
      <header className="app_header">
        <Link href={'/'}>
          <img src={logo} alt="Logo" className="sivyo_logo" />
        </Link>
        <nav className="navigation">
          <ul className="navigation_list">
            <li className="navigation_item">
              <Link href={'/dashboard'} className="navigation_link">
                Dashboard
              </Link>
            </li>
            <li className="navigation_item">
              <Link href={'/recipes'} className="navigation_link">
                Recipes
              </Link>
            </li>
          </ul>
          <ul className="navigation_list">
            <li className="navigation_item">
              <Link href={'/logout'} method={'post'} as={'button'} className="navigation_link">
                Logout
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      <article>{children}</article>
    </main>
  )
}
