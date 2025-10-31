export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center">
      <h1 className="text-4xl font-bold mb-4">404 - Snippet Not Found</h1>
      <p className="text-gray-600 mb-6">
        Sorry, we couldn’t find the snippet you’re looking for.
      </p>
      <a
        href="/"
        className="text-blue-500 underline hover:text-blue-700 transition"
      >
        Go back home
      </a>
    </div>
  );
}
