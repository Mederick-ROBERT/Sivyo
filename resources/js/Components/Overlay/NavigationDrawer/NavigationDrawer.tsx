import {Link} from "@inertiajs/react";

import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from '@chakra-ui/react'

interface NavigationDrawerProps {
  isOpen: boolean
  changeStatusDrawer: () => void;
  placement?: 'right' | 'left' | 'top' | 'bottom';
}

export default function NavigationDrawer({ isOpen, changeStatusDrawer, placement = 'right' }: NavigationDrawerProps) {
  return (
    <Drawer
      isOpen={isOpen}
      placement='right'
      onClose={changeStatusDrawer}
    >
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerHeader>Navigation</DrawerHeader>

        <DrawerBody>
          <nav className="navigation">
            <ul className="navigation_list">
              <li className="navigation_item">
                <Link href={'/dashboard'} className="navigation_link" onClick={changeStatusDrawer}>
                  Dashboard
                </Link>
              </li>
              <li className="navigation_item">
                <Link href={'/recipes'} className="navigation_link" onClick={changeStatusDrawer}>
                  Recipes
                </Link>
              </li>
              <li className="navigation_item">
                <Link href={'/user-creation'} className="navigation_link" onClick={changeStatusDrawer}>
                  My creations
                </Link>
              </li>
              <li className="navigation_item">
                <Link href={'/profile'} className="navigation_link" onClick={changeStatusDrawer}>
                  Profile
                </Link>
              </li>
            </ul>
            <ul className="navigation_list">
              <li className="navigation_item">
                <Link href={'/logout'} method={'post'} as={'button'} className="navigation_link"
                      onClick={changeStatusDrawer}>
                  Logout
                </Link>
              </li>
            </ul>
          </nav>
        </DrawerBody>

        <DrawerFooter>
          <button onClick={changeStatusDrawer}>
            Cancel
          </button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  )
}
