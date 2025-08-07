export default function ImageViewer({ setViewingSquad, viewImage }) {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 bg-opacity-90 z-50">
      <div className="relative bg-gray-300 rounded-2xl shadow-3xl p-8 flex flex-col items-center max-w-4xl w-full">
        <img
          src={viewImage}
          alt="Preview"
          className="rounded-xl shadow-xl max-w-full max-h-[85vh] object-contain mb-8 border-4 border-gray-200"
        />
        <button
          className="absolute top-4 right-4 px-3 py-3 bg-gray-800 text-white font-bold rounded-full hover:bg-gray-600 transition duration-200 ease-in-out shadow-md"
          aria-label="Close image viewer"
          onClick={() => setViewingSquad(false)}
        >
          ✕
        </button>
      </div>
    </div>
  );
}
