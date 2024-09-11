export default function NotFoundPage() {
  return (
    <div className="items-center h-full justify-center flex text-white flex-grow m-20">
      <div className="flex items-center gap-6">
        <span className="text-3xl">404</span>
        <span className="h-12 w-px bg-gray-300 block" />
        <span>This page could not be found.</span>
      </div>
    </div>
  );
}
