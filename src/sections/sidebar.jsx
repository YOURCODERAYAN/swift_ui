'use client';
import Info from '@/utils/info';
import Link from 'next/link';       
import { usePathname } from 'next/navigation';
import  {BiSolidNavigation} from 'react-icons/bi';




export default function Sidebar(){

    const pathname = usePathname();

    const getslug = (text)=> text.toLowerCase().replace(/\s+/g , '-');

        return(

            <nav className="fixed h-full overflow-y-auto bg-zinc-900 mt-18 z-20" style={{ width: '250px' }}>
                <div className="flex flex-col gap-3 px-3 pt-4">
                    <div className="mb-6 ml-2 flex items-center gap-2 self-start text-xl font-semibold text-zinc-100">
                     <BiSolidNavigation  size={30} />   
                        Components
                    </div>

                    {Info.map((items, key) => {
                        const slug = getslug(items.text);
                        const isActive = pathname.includes(slug);

                        return (
                            <Link
                                href={`/component/${slug}`}
                                className={`flex  items-center gap-3 rounded-lg px-3 py-2 text-sm text-zinc-300 transition-colors duration-200 hover:bg-zinc-800 hover:text-white ${
                                    isActive ? 'bg-zinc-800 text-white' : 'bg-transparent'
                                }`}
                                key={key}
                                style={{width:'10vw'}}
                            >
                                <span className="shrink-0 text-zinc-400">{items.icon}</span>
                                <span className="truncate text-sm">{items.text}</span>
                            </Link>
                        );
                    })}
                </div>
                 <div className="diagonal-stripes absolute right-1 top-0 z-20 h-screen w-6" />

                <div
                    style={{
                        position: 'absolute',
                        right: 0,
                        top: 0,
                        bottom: 0,
                        width: '1px',
                        background:
                            'linear-gradient(180deg, transparent 0%, rgba(255, 255, 255, 0.5) 50%, transparent 100%)',
                        boxShadow: '8 0 20px rgba(255, 255, 255, 0.5)',
                    }}
                />

            </nav>
        )
}
