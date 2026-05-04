export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center gap-8">
      <div className="w-10 h-10 border-4 border-green-600 border-t-transparent rounded-full animate-spin">
        <p></p>
      </div>
      <p className="text-2xl text-green-600"> Loading....Please Wait! </p>
    </div>
  );
}
