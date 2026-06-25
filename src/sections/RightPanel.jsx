// sections/RightPanel.jsx
'use client';
import { useState } from 'react';
import { BiSearch } from 'react-icons/bi';

export default function RightPanel({ subsections }) {
    const [query, setQuery] = useState('');

    const filtered = subsections.filter(sub =>
        sub.name.toLowerCase().includes(query.toLowerCase()) ||
        sub.id.toLowerCase().includes(query.toLowerCase())
    );

    return (
        <aside className=" bg-zinc-900 border-l border-white/10 p-6 scrollbar-auto fixed right-0 top-16 overflow-x-hidden h-screen overflow-y-auto">
            <h3 className="text-white font-bold text-sm mb-4 uppercase  ">
                This page Contents
            </h3>

            {/* Search Bar */}
            <div className="mb-4">
               
                <input
                    type="text"
                    placeholder="Search..."
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    className="  rounded-lg bg-zinc-800 py-1.5 pl-7 pr-7 text-xs text-zinc-100 placeholder-zinc-500 outline-none focus:ring-1 focus:ring-zinc-600"
                    style={{width:'8vw'}}
                />
           
            </div>

            {/* Filtered Results */}
            <div className="space-y-3 flex flex-col items-start">
                {filtered.length > 0 ? (
                    
                    filtered.map((sub) => (
                        <a
                            key={sub.id}
                            href={`#${sub.id}`}
                            className="text-green-400 text-sm hover:text-zinc-950 w-full hover:bg-white rounded-lg p-1 transition-colors block"
                        >
                            {sub.name}
                        </a>
                    ))
                ) : (
                    <p className="text-zinc-500 text-xs">
                        No results for "<span className="text-zinc-300">{query}</span>"
                    </p>
                )}
            </div>
        </aside>
    );
}