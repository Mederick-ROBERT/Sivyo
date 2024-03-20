import { Link } from '@inertiajs/react'
import {JSX, useState} from 'react'

import './layout.scss'
import logo from '../../../Picture/Logo/Logo2.png'

import { IconButton } from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'
import NavigationDrawer from "@/Components/Overlay/NavigationDrawer/NavigationDrawer";

interface LayoutProps {
  children: JSX.Element
}

export default function Layout({ children }: LayoutProps) {
  const [open, setOpen] = useState(false)

  function handleChangeStatusDrawer() {
    setOpen(!open)
  }

  function openDrawer() {
    setOpen(true)
  }


  return (
    <main className="main_wrapper">
      <header className="app_header">
        <Link href={'/'}>
          <img src={logo} alt="Logo" className="sivyo_logo" />
        </Link>
        <IconButton aria-label='open Navbar' icon={<HamburgerIcon />} onClick={openDrawer} />
        <NavigationDrawer isOpen={open} changeStatusDrawer={handleChangeStatusDrawer} />
      </header>
      <article>{children}</article>
    </main>
  )
}
