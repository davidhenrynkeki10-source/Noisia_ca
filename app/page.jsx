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
            className="relative w-screen h-screen overflow-hidden select-none flex flex-row animate-fadeIn"
            style={{ fontFamily: "'MegantE-Personal-Use-Only', 'Megante', sans-serif" }}
        >
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
                            fontFamily: "'MegantE-Personal-Use-Only', 'Megante', sans-serif",
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
                            fontFamily: "'MegantE-Personal-Use-Only', 'Megante', sans-serif",
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
                    className="absolute right-0 pointer-events-none transition-all duration-700 ease-out z-10"
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
                    {/* Minimalist Hamburger Menu Icon - Tapping opens Page 2 */}
                    <button 
                        id="menu-toggle"
                        aria-label="Navigate to Page 2"
                        onClick={goToPage2}
                        className="absolute flex flex-col justify-between cursor-pointer group focus:outline-none transition-transform duration-300 active:scale-95"
                        style={{
                            top: '38.15%', // 58px / 152px
                            right: '13.53%', // 64px / 473px
                            width: '18px',
                            height: '11px',
                        }}
                    >
                        <span 
                            className="block w-full h-[2px] bg-black transition-all duration-300 group-hover:translate-x-0.5"
                            style={{ backgroundColor: '#000000' }}
                        />
                        <span 
                            className="block w-full h-[2px] bg-black transition-all duration-300 group-hover:-translate-x-0.5"
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
                    White vertical card (#FFFFFF)
                    Spanning across the top header and bottom section
                    Flush against the left seam (split boundary)
                */}
                <div 
                    className="absolute left-0 pointer-events-none transition-all duration-700 ease-out z-10"
                    style={{
                        top: '18.63%',
                        height: '58.35%',
                        width: '34.25%', // Exactly 162px / 473px
                        backgroundColor: '#FFFFFF',
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
