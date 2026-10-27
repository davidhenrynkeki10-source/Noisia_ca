'use client';

import React from 'react';

export default function Page2({ onHamburgerClick }) {
    return (
        <main 
            className="relative w-full min-h-screen h-[100dvh] overflow-hidden select-none flex flex-col m-0 p-0"
            style={{ 
                fontFamily: "'MegantE-Personal-Use-Only', 'Megante', sans-serif",
                WebkitFontSmoothing: 'antialiased',
            }}
        >
            {/* =========================================================
                TOP SECTION (42.35% HEIGHT): PURE WHITE (#FFFFFF)
                Contains the red minimalist hamburger menu in the top right
            ========================================================= */}
            <div 
                className="w-full relative shrink-0"
                style={{
                    height: '42.35%',
                    backgroundColor: '#FFFFFF',
                }}
            >
                {/* Close Button at Top Left (replacing <) */}
                <button 
                    type="button"
                    id="close-button"
                    aria-label="Close modal"
                    onClick={onHamburgerClick}
                    className="absolute p-3 -ml-3 -mt-3 flex items-center justify-center cursor-pointer group focus:outline-none transition-transform duration-300 ease-out hover:scale-125 origin-center active:scale-95 text-black hover:text-black select-none z-30"
                    style={{
                        top: '20.14%',
                        left: '6.3%',
                    }}
                >
                    <svg 
                        width="20" 
                        height="20" 
                        viewBox="0 0 24 24" 
                        fill="none" 
                        stroke="currentColor" 
                        strokeWidth="1.75" 
                        strokeLinecap="round" 
                        strokeLinejoin="round"
                        className="transition-transform duration-300 group-hover:rotate-90 pointer-events-none"
                    >
                        <line x1="18" y1="6" x2="6" y2="18" />
                        <line x1="6" y1="6" x2="18" y2="18" />
                    </svg>
                </button>
            </div>

            {/* =========================================================
                MIDDLE SECTION (44.41% HEIGHT): NEUTRAL GREY (#898989)
                Contains 'Assets', 'Services', 'Platform' stacked vertically
            ========================================================= */}
            <div 
                className="w-full relative shrink-0 flex items-end justify-end"
                style={{
                    height: '44.41%',
                    backgroundColor: '#898989',
                }}
            >
                {/* Vertical Navigation Links Column: Assets and the next menu item being under */}
                <div 
                    className="flex flex-col items-start gap-4 sm:gap-5 md:gap-6"
                    style={{
                        marginRight: '6.3%', // Exactly aligned with the hamburger above
                        marginBottom: '4.8vh', // Positioned nicely in the lower portion of the grey band
                    }}
                >
                    <a 
                        href="#assets"
                        onClick={onHamburgerClick}
                        className="inline-block transition-transform duration-300 ease-out cursor-pointer text-white/90 hover:text-white hover:scale-110 origin-left tracking-wide"
                        style={{
                            fontFamily: "'MegantE-Personal-Use-Only', 'Megante', sans-serif",
                            fontSize: 'clamp(0.85rem, 0.95vw, 1.1rem)',
                            fontWeight: 400,
                            letterSpacing: '0.04em',
                            color: '#FFFFFF',
                        }}
                    >
                        Assets
                    </a>

                    <a 
                        href="#services"
                        onClick={onHamburgerClick}
                        className="inline-block transition-transform duration-300 ease-out cursor-pointer text-white/90 hover:text-white hover:scale-110 origin-left tracking-wide"
                        style={{
                            fontFamily: "'MegantE-Personal-Use-Only', 'Megante', sans-serif",
                            fontSize: 'clamp(0.85rem, 0.95vw, 1.1rem)',
                            fontWeight: 400,
                            letterSpacing: '0.04em',
                            color: '#FFFFFF',
                        }}
                    >
                        Services
                    </a>

                    <a 
                        href="#platform"
                        onClick={onHamburgerClick}
                        className="inline-block transition-transform duration-300 ease-out cursor-pointer text-white/90 hover:text-white hover:scale-110 origin-left tracking-wide"
                        style={{
                            fontFamily: "'MegantE-Personal-Use-Only', 'Megante', sans-serif",
                            fontSize: 'clamp(0.85rem, 0.95vw, 1.1rem)',
                            fontWeight: 400,
                            letterSpacing: '0.04em',
                            color: '#FFFFFF',
                        }}
                    >
                        Platform
                    </a>
                </div>
            </div>

            {/* =========================================================
                BOTTOM SECTION (13.24% HEIGHT): SOLID BLACK (#000000)
            ========================================================= */}
            <div 
                className="w-full flex-1"
                style={{
                    height: '13.24%',
                    backgroundColor: '#000000',
                }}
            />
        </main>
    );
}
