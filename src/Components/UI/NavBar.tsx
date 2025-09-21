
import MobileNav from '@/Components/UI/MobileNav';
import logo from '/public/logo.svg'
import Button from '@/Components/UI/Btn';
import type { NavLinks } from '@/types/types';



const navLinks: NavLinks = [
    { label: 'Our Products', path: '#' },
    { label: 'About us', path: '#' },
    { label: 'News', path: '#' },
    { label: 'Careers', path: '#' },
    { label: 'Contact', path: '#' },
];


export default function NavBar() {


    return (
        <div className="flex justify-center w-full bg-primary p-3" >
            <nav className="flex items-center px-4 w-full max-w-[var(--maxpagewidth)] lg:mx-20 sm:mx-auto ">
                <a href='/'><img src={logo} className='max-w-[43px]' /></a>
                <div className='md:block w-full hidden '>
                    <ul className="text-white flex justify-center gap-5 lg:gap-7 xl:gap-10 px-7 ">
                        {navLinks.map((item) => (
                            <li><a href={item.path}>{item.label}</a>  </li>
                        ))}
                    </ul>
                </div>
                <div className="md:flex items-center gap-3 p-2 hidden ">
                    <a href='/signup' className='text-white font-semibold h-fit whitespace-nowrap'>Sign up</a>
                    <Button label="Start free trial" variant="secondary" onClick={() => console.log('/free-trial')}/>
                </div>
                <a className='w-full flex justify-end md:hidden'>
                    <MobileNav links={navLinks} />
                </a>

            </nav>
        </div>
    )
}