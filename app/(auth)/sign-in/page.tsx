import LoginForm from "@/components/forms/LoginForm";
import Image from "next/image"; // Import the correct Image component from Next.js
import { useRouter } from "next/navigation";

export default async function Page() {
  return (
    <div className="min-h-screen flex items-center bg-gray-200">
      <div className="bg-primary h-screen md:w-1/2 md:flex hidden items-center justify-center">
        <div className="block p-5">
          <div className="text-white lg:space-y-2">
            <h2 className="2xl:text-5xl xl:text-4xl lg:text-3xl text-xl">UNIT KEGIATAN MAHASISWA</h2>
            <h6 className="xl:text-3xl lg:text-2xl text-lg">Sarang Semut</h6>
            <p className="text-slate-400 lg:text-lg text-base">Universitas Tanjungpura</p>
          </div>

          <Image src="/assets/img/logo-sarang-semut.webp" alt="logo" width={200} height={200} className="w-7/12 mx-auto" />
        </div>
      </div>
      <section className="md:w-1/2 w-full p-8">
        <h1 className="font-medium md:text-4xl text-2xl ">Halaman login</h1>

        <main className="py-5">
          <LoginForm />
        </main>
      </section>
    </div>
  );
}
