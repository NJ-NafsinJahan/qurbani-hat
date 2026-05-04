import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center">
      <h1 className="text-7xl font-bold text-green-600">404</h1>

      <h2 className="text-2xl font-semibold mt-4">Page Not Found</h2>

      <p className="text-gray-500 mt-2">
        The page you are looking for does not exist.
      </p>

      <Link
        href="/"
        className="mt-6 px-6 py-3 bg-green-600 text-white rounded-full hover:bg-green-700 transition"
      >
        Go Home
      </Link>
    </div>
  );
}
