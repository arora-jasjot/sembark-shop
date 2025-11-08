interface PaginationMenuProps {
    page: number;
    onChangePage: (new_page: number) => void;
    totalPages: number;
}
const PaginationMenu = ({ page, onChangePage, totalPages }: PaginationMenuProps) => {
    return (
        <div className="flex justify-center items-center gap-4">
            <button disabled={!(page > 1)} onClick={() => onChangePage(page - 1)} className="w-16 h-10 rounded-md flex justify-center items-center text-black bg-secondary font-normal cursor-pointer disabled:bg-light disabled:cursor-default">Prev</button>
            {Array.from({ length: totalPages }).map((_, index) => <button disabled={page === index+1} onClick={() => onChangePage(index + 1)} key={index} className={`w-10 h-10 rounded-md flex justify-center items-center ${page === (index + 1) ? 'text-white bg-primary font-semibold' : 'text-black bg-secondary font-normal cursor-pointer'}`}>{index + 1}</button>)}
            <button disabled={!(page < totalPages)} onClick={() => onChangePage(page + 1)} className="w-16 h-10 rounded-md flex justify-center items-center text-black bg-secondary font-normal cursor-pointer disabled:bg-light disabled:cursor-default">Next</button>
        </div>
    )
}

export default PaginationMenu