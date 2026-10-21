'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import Page2 from '../components/Page2';

export default function Page2Route() {
    const router = useRouter();

    const handleReturn = () => {
        router.push('/');
    };

    return <Page2 onHamburgerClick={handleReturn} />;
}
