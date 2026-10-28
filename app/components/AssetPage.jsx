'use client';

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

// Artists list - Add or customize artists here
export const ARTISTS = [
    {
        slug: 'david',
        name: 'David Ngachi',
        artwork1: {
            image: '/assets/artwork1.png',
            title: '“The Prince” (The Tale of Patrick the Terrible Series)',
            medium: 'Oil on Canvas',
            dimension: '24 × 24 in',
            date: '2025',
            status: 'Sold',
        },
        artwork2: {
            image: '/assets/artwork2.png',
            title: '“Rituals and Goats”',
            medium: 'Oil on Canvas',
            dimension: '60 × 72 in',
            date: '2025',
            price: '$9,000',
        },
    },
    // Next artist template (replace with your next artist's info):
    {
        slug: 'next-artist',
        name: 'Next Artist',
        artwork1: {
            image: '/assets/artwork1.png',
            title: '“Upcoming Series I”',
            medium: 'Oil on Canvas',
            dimension: '36 × 48 in',
            date: '2025',
            price: '$12,000',
        },
        artwork2: {
            image: '/assets/artwork2.png',
            title: '“Upcoming Series II”',
            medium: 'Mixed Media',
            dimension: '48 × 60 in',
            date: '2025',
            status: 'Sold',
        },
    },
];

export default function AssetPage({ onBack, person }) {
    const [artwork1Hovered, setArtwork1Hovered] = useState(false);
    const [artwork2Hovered, setArtwork2Hovered] = useState(false);
    const [currentArtistIndex, setCurrentArtistIndex] = useState(0);
    const containerRef = useRef(null);

    // Sync active artist from window hash or prop
    useEffect(() => {
        const syncArtistFromHash = () => {
            const rawHash = window.location.hash.replace('#', '');
            if (!rawHash || rawHash === 'assets' || rawHash === 'marcus') {
                window.location.hash = '#david';
                setCurrentArtistIndex(0);
                return;
            }
            const foundIdx = ARTISTS.findIndex((a) => a.slug === rawHash);
            if (foundIdx !== -1) {
                setCurrentArtistIndex(foundIdx);
            }
        };

        syncArtistFromHash();
        window.addEventListener('hashchange', syncArtistFromHash);
        return () => window.removeEventListener('hashchange', syncArtistFromHash);
    }, []);

    // Current active artist
    const currentPerson = person || ARTISTS[currentArtistIndex] || ARTISTS[0];

    // Artist navigation (< and >)
    const goPrevArtist = () => {
        const prevIdx = (currentArtistIndex - 1 + ARTISTS.length) % ARTISTS.length;
        setCurrentArtistIndex(prevIdx);
        window.location.hash = `#${ARTISTS[prevIdx].slug}`;
    };

    const goNextArtist = () => {
        const nextIdx = (currentArtistIndex + 1) % ARTISTS.length;
        setCurrentArtistIndex(nextIdx);
        window.location.hash = `#${ARTISTS[nextIdx].slug}`;
    };

    // Keyboard navigation
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'ArrowLeft') {
                goPrevArtist();
            } else if (e.key === 'ArrowRight') {
                goNextArtist();
            } else if (e.key === 'Escape' && onBack) {
                onBack();
            }
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [currentArtistIndex, onBack]);

    return (
        <main
            id="assets-page"
            className="relative w-full h-[100dvh] min-h-screen bg-black text-white overflow-hidden select-none flex flex-col justify-between"
            style={{
                fontFamily: "'Montserrat', -apple-system, BlinkMacSystemFont, sans-serif",
                WebkitFontSmoothing: 'antialiased',
            }}
        >
            {/* =========================================================
                TOP HEADER NAVIGATION: < (back) with "Asset" below
            ========================================================= */}
            <header className="relative w-full z-30 pt-[4.8vh] pl-[5vw] flex flex-col items-start">
                <button
                    type="button"
                    onClick={onBack ? onBack : () => { window.location.hash = ''; }}
                    aria-label="Back to home"
                    className="group inline-flex items-center text-white cursor-pointer focus:outline-none transition-opacity duration-200 hover:opacity-80"
                >
                    {/* Minimalist Left Chevron Arrow */}
                    <svg
                        width="15"
                        height="20"
                        viewBox="0 0 15 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="transition-transform duration-200 group-hover:-translate-x-1"
                    >
                        <polyline points="13 2 3 12 13 22" />
                    </svg>
                </button>

                <span
                    className="text-[clamp(1.15rem,1.5vw,2rem)] font-medium tracking-tight text-white mt-[7.5vh]"
                    style={{
                        fontFamily: "'Montserrat', sans-serif",
                        fontWeight: 500,
                        color: '#FFFFFF',
                    }}
                >
                    Asset
                </span>
            </header>

            {/* =========================================================
                MAIN ASSET GALLERY / CAROUSEL COMPOSITION
                Recreating the exact 2304x1282 proportion and layering:
                - David Ngaji card (left dark card, overlaps grey card)
                - Grey card (middle backdrop card)
                - Artwork 1 (portrait)
                - Coral Pink divider bar
                - Artwork 2 (figures)
            ========================================================= */}
            <div className="relative w-full flex-1 flex items-center overflow-x-clip overflow-y-visible mt-[5vh]">
                <div
                    ref={containerRef}
                    className="relative w-full h-full flex items-center transition-transform duration-500 ease-out"
                    style={{
                        transform: 'translateY(4.2vh)',
                    }}
                >
                    {/* Wrapper maintaining aspect ratio and relative positions */}
                    <div className="relative w-full h-full flex items-center">

                        {/* 1. David Ngaji Card (Overlapping left card)
                            Position in canvas: x=49px (2.12%), y=535px (41.73%), w=571px (24.78%), h=315px (24.57%)
                        */}
                        <div
                            className="absolute z-20 flex items-center shadow-2xl"
                            style={{
                                left: '2.12%',
                                width: '24.78%',
                                minWidth: '220px',
                                height: '24.57%',
                                minHeight: '130px',
                                maxHeight: '315px',
                                backgroundColor: '#383838',
                                paddingLeft: 'clamp(1.5rem, 3.2vw, 4.5rem)',
                            }}
                        >
                            <h2
                                className="text-white text-[clamp(1.1rem,1.45vw,1.85rem)] font-medium tracking-tight"
                                style={{
                                    fontFamily: "'Montserrat', sans-serif",
                                    fontWeight: 500,
                                }}
                            >
                                {currentPerson.name}
                            </h2>
                        </div>

                        {/* 2. Middle Grey Card (Backdrop container)
                            Position in canvas: x=388px (16.84%), y=470px (36.66%), w=894px (38.80%), h=473px (36.89%)
                        */}
                        <div
                            className="absolute z-10"
                            style={{
                                left: '16.84%',
                                width: '38.80%',
                                minWidth: '320px',
                                height: '36.89%',
                                minHeight: '200px',
                                maxHeight: '473px',
                                backgroundColor: '#6A6A6A',
                            }}
                        />

                        {/* 3. Artwork 1: Portrait of bald figure
                            Position in canvas: x=1319px (57.25%), y=470px (36.66%), w=460px (19.96%), h=473px (36.89%)
                        */}
                        <div
                            className="absolute z-10 select-none group cursor-pointer"
                            style={{
                                left: '57.25%',
                                width: '19.96%',
                                minWidth: '170px',
                                height: '36.89%',
                                minHeight: '200px',
                                maxHeight: '473px',
                            }}
                            onMouseEnter={() => setArtwork1Hovered(true)}
                            onMouseLeave={() => setArtwork1Hovered(false)}
                        >
                            {/* Floating Description at the top of the image (outside) - only visible on hover */}
                            <div
                                className={`absolute bottom-full left-0 mb-3 z-30 flex flex-col gap-[3px] pointer-events-none select-none transition-all duration-300 ease-out ${
                                    artwork1Hovered
                                        ? 'opacity-100 translate-y-0'
                                        : 'opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0'
                                }`}
                                style={{
                                    fontFamily: "'Montserrat', sans-serif",
                                    color: '#FFFFFF',
                                    width: 'max-content',
                                    whiteSpace: 'nowrap',
                                }}
                            >
                                <p
                                    className="leading-snug whitespace-nowrap drop-shadow-[0_2px_6px_rgba(0,0,0,0.9)]"
                                    style={{
                                        fontSize: 'clamp(0.55rem, 0.72vw, 0.88rem)',
                                        fontStyle: 'italic',
                                        fontWeight: 600,
                                        color: '#FFFFFF',
                                    }}
                                >
                                    {currentPerson.artwork1?.title || '“The Prince” (The Tale of Patrick the Terrible Series)'}
                                </p>
                                <p
                                    className="whitespace-nowrap drop-shadow-[0_2px_6px_rgba(0,0,0,0.9)]"
                                    style={{ fontSize: 'clamp(0.48rem, 0.62vw, 0.75rem)', fontWeight: 400, color: 'rgba(255, 255, 255, 0.9)' }}
                                >
                                    Medium: {currentPerson.artwork1?.medium || 'Oil on Canvas'}
                                </p>
                                <p
                                    className="whitespace-nowrap drop-shadow-[0_2px_6px_rgba(0,0,0,0.9)]"
                                    style={{ fontSize: 'clamp(0.48rem, 0.62vw, 0.75rem)', fontWeight: 400, color: 'rgba(255, 255, 255, 0.9)' }}
                                >
                                    Dimension: {currentPerson.artwork1?.dimension || '24 × 24 in'}
                                </p>
                                <p
                                    className="whitespace-nowrap drop-shadow-[0_2px_6px_rgba(0,0,0,0.9)]"
                                    style={{ fontSize: 'clamp(0.48rem, 0.62vw, 0.75rem)', fontWeight: 400, color: 'rgba(255, 255, 255, 0.9)' }}
                                >
                                    Date: {currentPerson.artwork1?.date || '2025'}
                                </p>
                                {currentPerson.artwork1?.status ? (
                                    <p
                                        className="mt-[2px] whitespace-nowrap drop-shadow-[0_2px_6px_rgba(0,0,0,0.9)]"
                                        style={{
                                            fontSize: 'clamp(0.48rem, 0.62vw, 0.75rem)',
                                            fontWeight: 600,
                                            letterSpacing: '0.02em',
                                            color: '#FF2E4D',
                                        }}
                                    >
                                        {currentPerson.artwork1.status}
                                    </p>
                                ) : (
                                    <p
                                        className="mt-[2px] whitespace-nowrap drop-shadow-[0_2px_6px_rgba(0,0,0,0.9)]"
                                        style={{
                                            fontSize: 'clamp(0.48rem, 0.62vw, 0.75rem)',
                                            fontWeight: 600,
                                            letterSpacing: '0.02em',
                                            color: '#FFFFFF',
                                            opacity: 0.95,
                                        }}
                                    >
                                        Price: {currentPerson.artwork1?.price || '$9,000'}
                                    </p>
                                )}
                            </div>

                            {/* Image container */}
                            <div className="w-full h-full overflow-hidden shadow-lg">
                                <img
                                    src={currentPerson.artwork1?.image || currentPerson.artwork1}
                                    alt={`${currentPerson.name} artwork 1`}
                                    className="w-full h-full object-cover select-none pointer-events-none transition-transform duration-500 ease-out group-hover:scale-[1.02]"
                                    draggable={false}
                                />
                            </div>
                        </div>

                        {/* 4. Vivid Coral Pink Vertical Bar
                            Position in canvas: x=1780px (77.25%), y=557px (43.45%), w=10px (0.43%), h=306px (23.87%)
                        */}
                        <div
                            className="absolute z-20 pointer-events-none"
                            style={{
                                left: '77.25%',
                                width: '9px',
                                height: '23.87%',
                                minHeight: '120px',
                                maxHeight: '306px',
                                backgroundColor: '#FD5178',
                            }}
                        />

                        {/* 5. Artwork 2: Dark surrealist figures
                            Position in canvas: x=1789px (77.65%), y=470px (36.66%), w=436px (18.92%), h=473px (36.89%)
                        */}
                        <div
                            className="absolute z-10 select-none group cursor-pointer"
                            style={{
                                left: '77.65%',
                                width: '18.92%',
                                minWidth: '160px',
                                height: '36.89%',
                                minHeight: '200px',
                                maxHeight: '473px',
                            }}
                            onMouseEnter={() => setArtwork2Hovered(true)}
                            onMouseLeave={() => setArtwork2Hovered(false)}
                        >
                            {/* Floating Description at the top of the image (outside) - only visible on hover */}
                            <div
                                className={`absolute bottom-full left-0 mb-3 z-30 flex flex-col gap-[3px] pointer-events-none select-none transition-all duration-300 ease-out ${
                                    artwork2Hovered
                                        ? 'opacity-100 translate-y-0'
                                        : 'opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0'
                                }`}
                                style={{
                                    fontFamily: "'Montserrat', sans-serif",
                                    color: '#FFFFFF',
                                    width: 'max-content',
                                    whiteSpace: 'nowrap',
                                }}
                            >
                                <p
                                    className="leading-snug whitespace-nowrap drop-shadow-[0_2px_6px_rgba(0,0,0,0.9)]"
                                    style={{
                                        fontSize: 'clamp(0.55rem, 0.72vw, 0.88rem)',
                                        fontStyle: 'italic',
                                        fontWeight: 600,
                                        color: '#FFFFFF',
                                    }}
                                >
                                    {currentPerson.artwork2?.title || '“Rituals and Goats”'}
                                </p>
                                <p
                                    className="whitespace-nowrap drop-shadow-[0_2px_6px_rgba(0,0,0,0.9)]"
                                    style={{ fontSize: 'clamp(0.48rem, 0.62vw, 0.75rem)', fontWeight: 400, color: 'rgba(255, 255, 255, 0.9)' }}
                                >
                                    Medium: {currentPerson.artwork2?.medium || 'Oil on Canvas'}
                                </p>
                                <p
                                    className="whitespace-nowrap drop-shadow-[0_2px_6px_rgba(0,0,0,0.9)]"
                                    style={{ fontSize: 'clamp(0.48rem, 0.62vw, 0.75rem)', fontWeight: 400, color: 'rgba(255, 255, 255, 0.9)' }}
                                >
                                    Dimension: {currentPerson.artwork2?.dimension || '60 × 72 in'}
                                </p>
                                <p
                                    className="whitespace-nowrap drop-shadow-[0_2px_6px_rgba(0,0,0,0.9)]"
                                    style={{ fontSize: 'clamp(0.48rem, 0.62vw, 0.75rem)', fontWeight: 400, color: 'rgba(255, 255, 255, 0.9)' }}
                                >
                                    Date: {currentPerson.artwork2?.date || '2025'}
                                </p>
                                {currentPerson.artwork2?.status ? (
                                    <p
                                        className="mt-[2px] whitespace-nowrap drop-shadow-[0_2px_6px_rgba(0,0,0,0.9)]"
                                        style={{
                                            fontSize: 'clamp(0.48rem, 0.62vw, 0.75rem)',
                                            fontWeight: 600,
                                            letterSpacing: '0.02em',
                                            color: '#FF2E4D',
                                        }}
                                    >
                                        {currentPerson.artwork2.status}
                                    </p>
                                ) : (
                                    <p
                                        className="mt-[2px] whitespace-nowrap drop-shadow-[0_2px_6px_rgba(0,0,0,0.9)]"
                                        style={{
                                            fontSize: 'clamp(0.48rem, 0.62vw, 0.75rem)',
                                            fontWeight: 600,
                                            letterSpacing: '0.02em',
                                            color: '#FFFFFF',
                                            opacity: 0.95,
                                        }}
                                    >
                                        Price: {currentPerson.artwork2?.price || '$9,000'}
                                    </p>
                                )}
                            </div>

                            {/* Image container */}
                            <div className="w-full h-full overflow-hidden shadow-lg">
                                <img
                                    src={currentPerson.artwork2?.image || currentPerson.artwork2}
                                    alt={`${currentPerson.name} artwork 2`}
                                    className="w-full h-full object-cover select-none pointer-events-none transition-transform duration-500 ease-out group-hover:scale-[1.02]"
                                    draggable={false}
                                />
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            {/* =========================================================
                BOTTOM CONTROLS: < > Artist Navigation Chevrons
                Brought closer together at the boundary seam,
                navigating between artists (David, Next Artist, etc.)
            ========================================================= */}
            <footer className="relative w-full z-30 pb-[15.5vh] flex items-center">
                <div
                    className="flex items-center gap-1"
                    style={{
                        position: 'absolute',
                        left: '77.25%',
                        transform: 'translateX(-50%)',
                    }}
                >
                    {/* Previous Artist Button */}
                    <button
                        type="button"
                        id="person-prev"
                        aria-label="Previous artist"
                        onClick={goPrevArtist}
                        className="p-1.5 -m-1 text-white/80 hover:text-white transition-all duration-300 ease-out hover:scale-135 active:scale-90 cursor-pointer focus:outline-none origin-center"
                    >
                        <svg
                            width="9"
                            height="14"
                            viewBox="0 0 9 14"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2.2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <polyline points="7 2 2 7 7 12" />
                        </svg>
                    </button>

                    {/* Next Artist Button */}
                    <button
                        type="button"
                        id="person-next"
                        aria-label="Next artist"
                        onClick={goNextArtist}
                        className="p-1.5 -m-1 text-white/80 hover:text-white transition-all duration-300 ease-out hover:scale-135 active:scale-90 cursor-pointer focus:outline-none origin-center"
                    >
                        <svg
                            width="9"
                            height="14"
                            viewBox="0 0 9 14"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2.2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <polyline points="2 2 7 7 2 12" />
                        </svg>
                    </button>
                </div>
            </footer>
        </main>
    );
}
