import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import type { NavLinks } from "@/types/types";

import { LogOut, Menu } from 'lucide-react';
import { useAuthStore } from '@/stores/authStore'
import { useNavigate } from "react-router-dom";

interface MobileNavProps {
    links: NavLinks;
    type: string;
}

function MobileNav({ links, type = '' }: MobileNavProps) {

    const logout = useAuthStore((state) => state.logout)
    const navigate = useNavigate()

    const handleLogout = () => {
        logout()
        console.log('User has been logged out')
        navigate('/signin')
    }




    return (
        <section>

            <Sheet >
                <SheetTrigger>
                    <Menu color={type=='user' ?'#333' :'#ddd'} size={27} /> {/* Hamburger icon */}
                </SheetTrigger>
                <SheetContent className="w-75">
                    <SheetHeader>
                        {/* <SheetTitle>Menu</SheetTitle> */}
                        <SheetDescription>
                            <div className="flex flex-col justify-between  h-130">
                                <ul className="text-2xl pt-10 px-5">
                                    {links.map((item) => (
                                        <li className="p-1">
                                            <a href={item.path} className=" text-gray-900 hover:opacity-70">
                                                {item.label}
                                            </a>
                                        </li>
                                    ))}
                                </ul>

                                {type === 'user' &&

                                    <button onClick={handleLogout} className="flex justify-center items-center gap-2 text-xl text-primary">
                                        Log out
                                        <LogOut />
                                    </button>

                                }
                            </div>
                        </SheetDescription>
                    </SheetHeader>
                </SheetContent>
            </Sheet>
        </section>
    )
}

export default MobileNav
