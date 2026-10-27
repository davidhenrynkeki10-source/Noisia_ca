'use client';

import React, { useState, useEffect } from 'react';
import Page2 from './components/Page2';

export default function Home() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Close modal on Escape key press
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'Escape' && isMenuOpen) {
                setIsMenuOpen(false);
            }
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [isMenuOpen]);

    return (
        <main 
            className="relative w-full min-h-screen h-[100dvh] overflow-hidden select-none flex flex-row animate-fadeIn"
            style={{ 
                fontFamily: "'Big Caslon', 'BigCaslon', 'Libre Caslon Display', serif",
                WebkitFontSmoothing: 'antialiased',
            }}
        >
            {/* =========================================================
                LEFT PANE (52.55% WIDTH): PURE BLACK (#000000)
            ========================================================= */}
            <div 
                className="relative h-full flex items-center shrink-0"
                style={{ 
                    flexBasis: '52.547%',
                    width: '52.547%', 
                    maxWidth: '52.547%',
                    backgroundColor: '#000000' 
                }}
            >
                {/* Brand Logo: True 'NOISIA' / 'VISION' ambigram in Big Caslon */}
                <div 
                    className="flex items-center z-20 w-full justify-center md:justify-start pl-0 pr-6 sm:pr-8 md:pr-0 md:pl-[28.38%]"
                >
                    <h1 
                        aria-label="NOISIA"
                        title="NOISIA / VISION"
                        className="leading-none select-none inline-flex items-center uppercase text-[clamp(0.62rem,2.2vw,0.92rem)] md:text-[clamp(0.95rem,1.35vw,1.65rem)]"
                        style={{
                            fontFamily: "'Big Caslon', 'BigCaslon', 'Libre Caslon Display', serif",
                            fontWeight: 400,
                            color: '#B2DADA',
                            transform: 'rotate(180deg)',
                            WebkitTransform: 'rotate(180deg)',
                            transformOrigin: 'center center',
                            WebkitBackfaceVisibility: 'hidden',
                            backfaceVisibility: 'hidden',
                        }}
                    >
                        {['V', 'I', 'S', 'I', 'O', 'N'].map((char, index) => (
                            <span 
                                key={index} 
                                style={{ 
                                    marginRight: index < 5 ? '0.38em' : 0,
                                    display: 'inline-block',
                                }}
                            >
                                {char}
                            </span>
                        ))}
                    </h1>
                </div>

                {/* Left portion of center floating rectangle:
                    Flush against the right split boundary
                    Color: #3A3A3A (solid dark slate)
                */}
                <div 
                    className="absolute right-0 pointer-events-none transition-all duration-700 ease-out z-10"
                    style={{
                        top: '27.505%', // Vertically centered within middle band: equal 4.605% gap at top and bottom
                        height: '44.62%',
                        width: '17.51%', // Exactly 224px / 1279px
                        backgroundColor: '#3A3A3A',
                    }}
                />
            </div>

            {/* =========================================================
                RIGHT PANE (47.453% WIDTH): 3-BAND REGION
                - Top band: #DDDDDD (22.90% height)
                - Middle band: #FAFAFA (53.83% height)
                - Bottom band: #DDDDDD (23.27% height)
            ========================================================= */}
            <div 
                className="relative h-full flex flex-col flex-1 shrink-0 overflow-hidden"
                style={{ 
                    flexBasis: '47.453%',
                    width: '47.453%',
                    maxWidth: '47.453%',
                }}
            >
                {/* Top Banner Region: #DDDDDD */}
                <div 
                    className="w-full relative shrink-0 flex items-center justify-end z-30"
                    style={{
                        height: '22.90%',
                        backgroundColor: '#DDDDDD',
                    }}
                >
                    {/* Minimalist Red Hamburger Menu Icon - Toggles Page 2 Modal */}
                    <button 
                        type="button"
                        id="menu-toggle"
                        aria-label="Open Navigation Menu"
                        aria-expanded={isMenuOpen}
                        onClick={() => setIsMenuOpen(true)}
                        className="absolute p-4 -mr-4 -mt-4 flex items-center justify-center cursor-pointer group focus:outline-none transition-transform duration-200 active:scale-95 z-30"
                        style={{
                            top: '50%',
                            transform: 'translateY(-50%)',
                            right: '12.29%', // Exactly 142px / 1155px
                        }}
                    >
                        <div className="flex flex-col justify-between w-[20px] h-[13px] pointer-events-none">
                            {/* Top Red Bar */}
                            <span 
                                className="block w-full h-[2.5px] transition-all duration-300 group-hover:translate-x-0.5"
                                style={{ backgroundColor: '#DC3A47' }}
                            />
                            {/* Bottom Red Bar */}
                            <span 
                                className="block w-full h-[2.5px] transition-all duration-300 group-hover:-translate-x-0.5"
                                style={{ backgroundColor: '#DC3A47' }}
                            />
                        </div>
                    </button>
                </div>

                {/* Middle Section: #FAFAFA */}
                <div 
                    className="w-full shrink-0"
                    style={{
                        height: '53.83%',
                        backgroundColor: '#FAFAFA',
                    }}
                />

                {/* Bottom Banner Region: #DDDDDD */}
                <div 
                    className="w-full flex-1"
                    style={{
                        height: '23.27%',
                        backgroundColor: '#DDDDDD',
                    }}
                />

                {/* Right portion of center floating rectangle:
                    Flush against the left seam (split boundary)
                    Color: #E9E9E9 (solid soft grey)
                */}
                <div 
                    className="absolute left-0 pointer-events-none transition-all duration-700 ease-out z-10"
                    style={{
                        top: '27.505%', // Vertically centered within middle band: equal 4.605% gap at top and bottom
                        height: '44.62%',
                        width: '32.03%', // Exactly 370px / 1155px
                        backgroundColor: '#E9E9E9',
                    }}
                />
            </div>

            {/* =========================================================
                PAGE 2 SLIDE-DOWN MODAL
                Transitions down as a modal from the top over Page 1
            ========================================================= */}
            <div 
                id="page2-modal"
                role="dialog"
                aria-modal="true"
                aria-label="Navigation Menu"
                className={`fixed inset-0 z-50 w-full h-[100dvh] overflow-hidden transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] shadow-[0_25px_60px_-15px_rgba(0,0,0,0.5)] ${
                    isMenuOpen ? 'translate-y-0 pointer-events-auto' : '-translate-y-full pointer-events-none'
                }`}
            >
                <Page2 onHamburgerClick={() => setIsMenuOpen(false)} />
            </div>
        </main>
    );
}

