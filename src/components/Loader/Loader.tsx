export default function Loading() {
    return (
        <div className="fixed inset-0 bg-white z-[10000] flex items-center justify-center">
            <div className="flex flex-col items-center gap-6">
                {/* Spinner */}
                <div className="relative w-16 h-16">
                    <div className="absolute inset-0 rounded-full border-4 border-gray-200"></div>
                    <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-cyan-600 border-r-teal-600 animate-spin"></div>
                </div>

                {/* Loading Text */}
                <p className="text-gray-500 text-sm font-medium">Loading...</p>
            </div>
        </div>
    );
}
