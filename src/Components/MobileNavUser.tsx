import type { NavLinks, User } from '@/types/types'
import React from 'react'
import MobileNav from '@/Components/UI/MobileNav'

type MobileNavProps ={
    user: User | null
}

const navLinks: NavLinks = [
    { label: 'Our Products', path: '#' },
    { label: 'About us', path: '#' },
    { label: 'News', path: '#' },
    { label: 'Careers', path: '#' },
    { label: 'Contact', path: '#' },
];

const MobileNavUser = ({user}: MobileNavProps) => {
  return (
    <div>
      <MobileNav links={navLinks} type='user'/>
    </div>
  )
}

export default MobileNavUser
