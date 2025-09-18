import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/Components/UI/sheet"
import type { NavLinks } from "@/types/types";

import { Menu } from 'lucide-react';

interface MobileNavProps {
    links: NavLinks;
}

function MobileNav({ links }: MobileNavProps) {
    return (
        <section>

            <Sheet >
                <SheetTrigger>
                    <Menu color='#ddd' size={27} />
                </SheetTrigger>
                <SheetContent className="w-75">
                    <SheetHeader>
                        {/* <SheetTitle>Menu</SheetTitle> */}
                        <SheetDescription>
                            <ul className="text-2xl pt-10 px-5">
                                {links.map((item) => (
                                    <li className="p-1">
                                        <a href={item.path} className=" text-gray-900 hover:opacity-70">
                                            {item.label}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </SheetDescription>
                    </SheetHeader>
                </SheetContent>
            </Sheet>
        </section>
    )
}

export default MobileNav
