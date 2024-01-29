import Sidebar from "@/components/Sidebar";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="w-full text-slate-900">
        <main className="h-screen w-full flex flex-col justify-center items-center bg-[#1A2238]">
          <h1 className="text-9xl font-extrabold text-white tracking-widest">
            404
          </h1>
          <div className="bg-[#FF6A3D] px-2 text-sm rounded rotate-12 absolute">
            Page Not Found
          </div>
          <button className="mt-5">
           

              <span className="relative block px-8 py-3 bg-[#1A2238] border border-current">
                <Link href="/dashboard/main">Go Home</Link>
              </span>
  
          </button>
        </main>
      </div>
    </div>
  );
}
