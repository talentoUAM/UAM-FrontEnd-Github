// export default Pagination;
import { IoTriangle } from "react-icons/io5";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const visiblePages = 5; // Máximo de páginas visibles a la vez
  const pages = [];

  // Cálculo de las páginas visibles
  const startPage = Math.max(currentPage - Math.floor(visiblePages / 2), 1);
  const endPage = Math.min(startPage + visiblePages - 1, totalPages);

  for (let i = startPage; i <= endPage; i++) {
    pages.push(i);
  }

  return (
    <div className="flex items-center justify-center gap-2 mt-4">
      {/* Botón de página anterior */}
      <button
        className={`p-2 rounded ${
          currentPage === 1 ? "text-gray-400" : "text-gray-700"
        }`}
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        <IoTriangle
          className={`-rotate-90 ${
            currentPage === 1 ? "text-gray-300" : "text-primary"
          }`}
          size={16}
        />
      </button>

      {/* Botón de primera página */}
      {startPage > 1 && (
        <>
          <button
            className="p-2 px-4 rounded text-gray-700"
            onClick={() => onPageChange(1)}
          >
            1
          </button>
          {startPage > 2 && <span className="text-gray-500">...</span>}
        </>
      )}

      {/* Páginas visibles */}
      {pages.map((page) => (
        <button
          key={page}
          className={`p-2 px-4 rounded ${
            page === currentPage
              ? "bg-accent text-white text-[16px] font-roboto font-bold"
              : "text-gray-700 hover:bg-gray-200"
          }`}
          onClick={() => onPageChange(page)}
        >
          {page}
        </button>
      ))}

      {/* Botón de última página */}
      {endPage < totalPages && (
        <>
          {endPage < totalPages - 1 && <span className="text-gray-500">...</span>}
          <button
            className="p-2 rounded text-gray-700"
            onClick={() => onPageChange(totalPages)}
          >
            {totalPages}
          </button>
        </>
      )}

      {/* Botón de página siguiente */}
      <button
        className={`p-2 rounded ${
          currentPage === totalPages ? "text-gray-400" : "text-gray-700"
        }`}
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        <IoTriangle
          className={`rotate-90 ${
            currentPage === totalPages ? "text-gray-300" : "text-black"
          }`}
          size={16}
        />
      </button>
    </div>
  );
};

export default Pagination;
