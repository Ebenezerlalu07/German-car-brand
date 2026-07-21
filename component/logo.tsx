import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" className="flex items-center gap-4">
      {/* Logo */}
      <div className="relative flex h-11 w-11 items-center justify-center rounded-full bg-black">
        <span className="absolute top-2 h-1.5 w-5 -translate-y-1 rotate-0 bg-orange-500"></span>

        <span className="text-2xl font-extrabold italic text-white">
          E
        </span>
      </div>

      {/* Divider */}
      <div className="h-8 w-px bg-gray-500/40"></div>

      {/* Name */}
      <span className="text-lg font-semibold tracking-wide text-white">
        Ebenezer C Lalu
      </span>
    </Link>
  );
}