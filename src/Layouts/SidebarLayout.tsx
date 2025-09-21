import MobileNavUser from "@/Components/MobileNavUser";
import Sidebar from "@/Components/Sidebar";
import { useAuthStore } from "@/stores/authStore";
import { MessageCircleWarning } from "lucide-react";
import { Outlet } from "react-router-dom";



export default function SidebarLayout() {
    const userData = useAuthStore(state => state.userData)

    if (!userData) {
        return (
            <div className="flex-col flex-center gap-4 h-screen bg-gray-50">
                <div className="flex-col flex-center gap-4 bg-white rounded-2xl p-20">
                    <MessageCircleWarning className="text-red-400 " size={55} />
                    <b>You're not logged in!</b>
                    <p className="opacity-30">-------</p>
                    <a href='/signin' className="form-link">Sign in</a>
                    or
                    <a href='/' className='form-link'>&rarr; Go to your Homepage </a>
                </div>
            </div>
            )
    }

    return (
        <main className="flex h-screen w-full font-inter">
            <Sidebar user={userData} />
            <div className="flex flex-col size-full">
                <div className="root-layout">
                    <a href="/">
                        <img src="public/logo.svg" className="w-9" alt="logo" />
                    </a>
                    <MobileNavUser user={userData} />
                </div>
                <Outlet /> {/* Renders the child route */}
            </div>
        </main>
    );
}
