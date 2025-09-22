import type { User } from "@/types/types"
import { sidebarLinks } from '@/Constants'
import { useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";


type SidebarProps = {
  user: User | null
}

const Sidebar = ({ user }: SidebarProps) => {


  const location = useLocation();
  const pathname = location.pathname;

  console.log(pathname)

  return (
    <section className="sidebar">

      <nav className="flex flex-col gap-4">

        {/* Logo */}
        <a href='/' className="cursor-pointer item-center flex mb-8">
          <img src='public/logo.svg' className="size-9 " />
          <h1 className="sidebar-logo">&nbsp; GreenTech</h1>
        </a>

        {/* Sidebar Links */}
        {sidebarLinks.map((item) => {
          const isActive =
            pathname === item.route || pathname.startsWith(`${item.route}/`);

          return (
            <a
              href={item.route}
              key={item.label}
              className={cn("flex gap-2 rounded-sm p-2", {
                "bg-primary": isActive,
              })}
            >
              <div className="relative size-6">
                <img
                  src={item.imgURL}
                  alt={item.label}
                  className={cn({
                    "invert": isActive,
                  })}
                />
              </div>
              <p className={cn("sidebar-label", { "!text-white": isActive })}>
                {item.label}
              </p>
            </a>
          );
        })}
      </nav>

    </section>
  )
}

export default Sidebar
