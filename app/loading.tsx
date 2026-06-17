import Image from "next/image";

export default function Loading() {
    return (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black">
            <div className="relative flex items-center justify-center">

                {/* Glow Ring */}
                <div className="absolute h-44 w-44 rounded-full bg-white/5 blur-xl animate-glow"></div>

                {/* Logo */}
                <div className="relative z-10 animate-fadePulse">
                    <Image
                        src="/logo.png"
                        alt="Logo"
                        width={120}
                        height={120}
                        priority
                    />
                </div>

            </div>
        </div>
    );
}