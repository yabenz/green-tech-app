
import logo from '/public/logo.svg'
import Button from '/src/components/UI/Button';


const navLinks = [
    { label: 'Our Products', path: '#' },
    { label: 'About us', path: '#' },
    { label: 'News', path: '#' },
    { label: 'Careers', path: '#' },
    { label: 'Contact', path: '#' },
];


export default function NavBar() {
    return (
        <div className="flex justify-center w-full bg-primary p-1" >
            <nav className="flex justify-between items-center px-4 w-full max-w-[1280px]">
                <a href='/'><img src={logo} width='53px' className='px-1' /></a>
                <ul className="text-white flex gap-5 lg:gap-7">
                    {navLinks.map((item) => (
                        <li><a href={item.path}>{item.label}</a>  </li>
                    ))}
                </ul>
                <div className="p-6 space-y-4">
                   <a href='#' className='text-white p-5 font-semibold'>Sign In</a>

                    <Button label="Start free trial" variant="secondary" onClick={() => alert('Secondary clicked')}
                    />
                </div>
            </nav>
        </div>
    )
}