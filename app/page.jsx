'use client';

import React, { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Page2 from './components/Page2';

function HomeContent() {
    const searchParams = useSearchParams();
    const pageQuery = searchParams.get('page');
    const [currentPage, setCurrentPage] = useState(pageQuery === '2' ? 2 : 1);

    // Keep state in sync with URL
    useEffect(() => {
        if (pageQuery === '2') {
            setCurrentPage(2);
        } else {
            setCurrentPage(1);
        }
    }, [pageQuery]);

    const goToPage2 = () => {
        setCurrentPage(2);
        if (typeof window !== 'undefined') {
            window.history.pushState({ page: 2 }, '', '?page=2');
        }
    };

    const goToPage1 = () => {
        setCurrentPage(1);
        if (typeof window !== 'undefined') {
            window.history.pushState({ page: 1 }, '', '/');
        }
    };

    // If on Page 2, render Page 2 exactly as designed
    if (currentPage === 2) {
        return (
            <div className="w-full h-full animate-fadeIn">
                <Page2 onHamburgerClick={goToPage1} />
            </div>
        );
    }

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
                    className="flex items-center z-20 w-full justify-center md:justify-start pr-6 sm:pr-8 md:pr-0 pl-2 sm:pl-4 md:pl-[28.38%]"
                >
                    <h1 
                        aria-label="NOISIA"
                        title="NOISIA / VISION"
                        className="leading-none select-none inline-flex items-center uppercase"
                        style={{
                            fontFamily: "'Big Caslon', 'BigCaslon', 'Libre Caslon Display', serif",
                            fontSize: 'clamp(1.4rem, 2.05vw, 2.45rem)',
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
                        top: '25.55%',
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
                    className="w-full relative shrink-0 flex items-center justify-end"
                    style={{
                        height: '22.90%',
                        backgroundColor: '#DDDDDD',
                    }}
                >
                    {/* Minimalist Red Hamburger Menu Icon - Tapping opens Page 2 */}
                    <button 
                        id="menu-toggle"
                        aria-label="Navigate to Page 2"
                        onClick={goToPage2}
                        className="absolute flex flex-col justify-between cursor-pointer group focus:outline-none transition-transform duration-300 active:scale-95"
                        style={{
                            top: '50%',
                            transform: 'translateY(-50%)',
                            right: '12.29%', // Exactly 142px / 1155px
                            width: '20px',
                            height: '13px',
                        }}
                    >
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
                        top: '25.55%',
                        height: '44.62%',
                        width: '32.03%', // Exactly 370px / 1155px
                        backgroundColor: '#E9E9E9',
                    }}
                />
            </div>
        </main>
    );
}

export default function Home() {
    return (
        <Suspense fallback={<div className="w-screen h-screen bg-black" />}>
            <HomeContent />
        </Suspense>
    );
}
