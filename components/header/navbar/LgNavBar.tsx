export default function SmNavBar() {
  return (
    <div className="hidden sm:ml-6 sm:flex sm:items-center">
      <div className="flex space-x-4">
        {/* // Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" --> */}
        <a
          href="#"
          className="text-white-300 hover:bg-dodger-blue hover:text-white rounded-md px-3 py-2 text-sm font-medium"
          aria-current="page"
        >
          Ristoranti
        </a>
        <a
          href="#"
          className="text-white-300 hover:bg-dodger-blue hover:text-white rounded-md px-3 py-2 text-sm font-medium"
        >
          Città
        </a>
      </div>
    </div>
  );
}
