'use client';

import React, { useState } from 'react';

export default function Home() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <main className="relative w-screen h-screen overflow-hidden select-none flex flex-row">
            {/* =========================================
                LEFT HALF (53.8% WIDTH): DEEP BLACK PANE
                Exact color: #000000
            ========================================= */}
            <div 
                className="relative h-full flex items-center shrink-0"
                style={{ 
                    width: '53.808%', 
                    backgroundColor: '#000000' 
                }}
            >
                {/* Logo & Branding: 'noisia' + 'creative agency' */}
                <div 
                    className="flex items-center gap-3 z-20"
                    style={{
                        paddingLeft: '22.1%',
                    }}
                >
                    <h1 
                        className="text-white tracking-tight leading-none"
                        style={{
                            fontFamily: "'Bodoni Moda', 'Playfair Display', Didot, 'Italiana', serif",
                            fontSize: 'clamp(1.75rem, 2.7vw, 2.75rem)',
                            fontWeight: 400,
                            letterSpacing: '-0.02em',
                            color: '#f5f7f8',
                        }}
                    >
                        noisia
                    </h1>
                    <span 
                        className="leading-none select-none"
                        style={{
                            fontFamily: "'Avenir LT Pro', 'Avenir', 'Avenir Next', system-ui, sans-serif",
                            fontSize: 'clamp(0.48rem, 0.65vw, 0.72rem)',
                            fontWeight: 300,
                            letterSpacing: '0.04em',
                            color: 'rgba(230, 234, 237, 0.65)',
                            transform: 'translateY(4px)',
                        }}
                    >
                        creative agency
                    </span>
                </div>

                {/* Left portion of the center floating composition:
                    Steel Blue vertical rectangle (#40627E)
                    Positioned flush to the right boundary of the black pane
                */}
                <div 
                    className="absolute right-0 pointer-events-none transition-all duration-700 ease-out"
                    style={{
                        top: '18.63%',
                        height: '58.35%',
                        width: '15.79%', // Exactly 87px / 551px
                        backgroundColor: '#40627E',
                    }}
                />
            </div>

            {/* =========================================
                RIGHT HALF (46.192% WIDTH): SPLIT PANE
                Top header: #DDDDDD (26.71% height)
                Bottom section: #E6EAED (73.29% height)
            ========================================= */}
            <div 
                className="relative h-full flex flex-col flex-1"
                style={{ 
                    width: '46.192%',
                    backgroundColor: '#E6EAED'
                }}
            >
                {/* Top Header Region: #DDDDDD */}
                <div 
                    className="w-full relative shrink-0 transition-colors duration-500"
                    style={{
                        height: '26.71%',
                        backgroundColor: '#DDDDDD',
                    }}
                >
                    {/* Minimalist Hamburger Menu Icon */}
                    <button 
                        id="menu-toggle"
                        aria-label="Navigation Menu"
                        onClick={() => setMenuOpen(!menuOpen)}
                        className="absolute flex flex-col justify-between cursor-pointer group focus:outline-none transition-transform duration-300 active:scale-95"
                        style={{
                            top: '38.15%', // 58px / 152px
                            right: '13.53%', // 64px / 473px
                            width: '18px',
                            height: '11px',
                        }}
                    >
                        <span 
                            className={`block w-full h-[2px] bg-black transition-all duration-300 ${
                                menuOpen ? 'rotate-45 translate-y-[4.5px]' : 'group-hover:translate-x-0.5'
                            }`}
                            style={{ backgroundColor: '#000000' }}
                        />
                        <span 
                            className={`block w-full h-[2px] bg-black transition-all duration-300 ${
                                menuOpen ? '-rotate-45 -translate-y-[4.5px]' : 'group-hover:-translate-x-0.5'
                            }`}
                            style={{ backgroundColor: '#000000' }}
                        />
                    </button>
                </div>

                {/* Bottom Main Region: #E6EAED */}
                <div 
                    className="w-full flex-1"
                    style={{
                        backgroundColor: '#E6EAED',
                    }}
                />

                {/* Right portion of the center floating composition:
                    Light vertical card (#E6EAED)
                    Spanning across the top header and bottom section
                    Flush against the left seam (split boundary)
                */}
                <div 
                    className="absolute left-0 pointer-events-none transition-all duration-700 ease-out"
                    style={{
                        top: '18.63%',
                        height: '58.35%',
                        width: '34.25%', // Exactly 162px / 473px
                        backgroundColor: '#E6EAED',
                    }}
                />
            </div>

            {/* Subtle interactive navigation drawer when hamburger is clicked */}
            <div 
                className={`fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity duration-300 z-50 ${
                    menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
                }`}
                onClick={() => setMenuOpen(false)}
            >
                <div 
                    className={`absolute top-0 right-0 w-80 h-full bg-[#E6EAED] p-10 flex flex-col justify-between shadow-2xl transition-transform duration-500 ease-in-out ${
                        menuOpen ? 'translate-x-0' : 'translate-x-full'
                    }`}
                    onClick={(e) => e.stopPropagation()}
                >
                    <div className="flex justify-between items-center">
                        <span className="font-serif text-lg tracking-wider text-black">menu</span>
                        <button 
                            onClick={() => setMenuOpen(false)}
                            className="w-6 h-6 flex items-center justify-center text-xl text-neutral-800 hover:text-black cursor-pointer"
                            aria-label="Close menu"
                        >
                            ×
                        </button>
                    </div>

                    <nav className="flex flex-col space-y-6">
                        {['Works', 'About', 'Services', 'Editorial', 'Contact'].map((item) => (
                            <a 
                                key={item} 
                                href={`#${item.toLowerCase()}`}
                                onClick={() => setMenuOpen(false)}
                                className="text-2xl font-serif text-neutral-800 hover:text-black hover:translate-x-2 transition-all duration-200"
                            >
                                {item}
                            </a>
                        ))}
                    </nav>

                    <div className="text-xs text-neutral-500 tracking-wider font-sans">
                        noisia © creative agency
                    </div>
                </div>
            </div>
        </main>
    );
}
