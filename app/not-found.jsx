import Link from 'next/link';

export default function NotFound() {
    return (
        <div className="w-full min-h-screen bg-black text-white flex flex-col items-center justify-center p-4">
            <h2 className="text-2xl font-semibold mb-4">404 - Not Found</h2>
            <Link href="/" className="text-sm underline hover:text-gray-300">
                Return Home
            </Link>
        </div>
    );
}
