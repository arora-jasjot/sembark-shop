const PaginationMenu = () => {
    return (
        <div className="flex justify-center items-center gap-4">

            <div className="w-16 h-10 rounded-md flex justify-center items-center text-black bg-secondary font-normal cursor-pointer">Prev</div>
            <div className="w-10 h-10 rounded-md flex justify-center items-center text-white bg-primary font-semibold cursor-pointer">1</div>
            <div className="w-10 h-10 rounded-md flex justify-center items-center text-black bg-secondary font-normal cursor-pointer">2</div>
            <div className="w-10 h-10 rounded-md flex justify-center items-center text-black bg-secondary font-normal cursor-pointer">3</div>
            <div className="w-16 h-10 rounded-md flex justify-center items-center text-black bg-secondary font-normal cursor-pointer">Next</div>
        </div>
    )
}

export default PaginationMenu