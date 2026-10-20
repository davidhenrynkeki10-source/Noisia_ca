import { NextResponse } from 'next/server';

export async function GET() {
    return NextResponse.json({
        status: 'ok',
        message: 'Node.js backend active',
        timestamp: new Date().toISOString(),
    });
}
