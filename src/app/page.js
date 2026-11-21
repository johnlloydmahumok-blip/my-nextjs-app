import Link from "next/link";


export default function Home() {
  return (
    <div className="min-h-max flex-1 flex justify-center items-center bg-blue-700 flex-col gap-2">
      <Link
        className="bg-white p-2 rounded-lg shadow-md hover:scale-105 transition-transform"
        href="/contact"
      >
        Go to Contact
      </Link>
      <Link
        className="bg-white p-2 rounded-lg shadow-md hover:scale-105 transition-transform"
        href="/profile"
      >
        Go to Profile
      </Link>
    </div>
  );
}