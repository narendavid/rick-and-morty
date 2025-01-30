interface PaginationProps {
    handlePreviousPage: () => void;
    handleNextPage: () => void;
    page: number;
    hasMore: boolean;
}

const Pagination = ({ page, handleNextPage, handlePreviousPage, hasMore }: PaginationProps) => {
    return (
        <div className="flex justify-between items-center mt-6">
            <button
                onClick={handlePreviousPage}
                disabled={page === 1}
                className="px-4 py-2 bg-blue-500 text-white rounded disabled:bg-gray-400"
            >
                Anterior
            </button>
            <span className="text-lg font-medium">{`Página ${page}`}</span>
            <button
                onClick={handleNextPage}
                disabled={!hasMore}
                className="px-4 py-2 bg-blue-500 text-white rounded disabled:bg-gray-400"
            >
                Siguiente
            </button>
        </div>
    );
}

export default Pagination