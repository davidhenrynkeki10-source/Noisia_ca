'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import AssetPage from '../components/AssetPage';

export default function AssetsRoute() {
    const router = useRouter();

    const handleReturn = () => {
        router.push('/');
    };

    return <AssetPage onBack={handleReturn} />;
}
