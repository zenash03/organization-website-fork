import Link from "next/link"
import Image from "next/image"
import { readSession, readUser } from "@/lib/actions/auth.action"
import { fetchProfile } from "@/lib/actions/profile.action";
import { redirect } from "next/navigation";

export default async function Topbar() {  
    if(!readSession()) redirect("/sign-in");
     
    const user = await readUser();
    if(!user) return;
    
    const profile = await fetchProfile(user.id);
    
    return (
        <nav className="topbar">
            <div className="grid grid-cols-[16rem_1fr]">
                <Link href={"/"} className="flex px-6 py-4 relative items-center justify-between">
                    <Image src={"/assets/img/logo-sarang-semut.webp"} alt={"Logo sarang semut"} width={40} height={40} />
                    <p className="text-white text-md md:block hidden">UKM Sarang Semut</p>
                </Link>
                
                <div className="flex justify-end px-6 py-4 relative items-center">
                    <p className="md:block hidden max-w-72 truncate">Welcome, { profile?.name }</p>
                </div>
            </div>
        </nav>
    )
}