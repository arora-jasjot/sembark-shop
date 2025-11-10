import { useContext } from 'react'
import Select from '../Common/Select'
import { DISPLAY_OPTIONS } from '@/constants/DISPLAY_OPTIONS'
import { SORT_OPTIONS } from '@/constants/SORT_OPTIONS'
// import filterIcon from '@/assets/icons/filter.svg'
import gridViewIcon from '@/assets/icons/grid-view.svg'
import listViewIcon from '@/assets/icons/list-view.svg'
import { ProductsContext } from '@/context/ProductsContext'
import { useWindowDimensions } from '@/utils/udeDimensions'

const FilterBox = ({ setDisplayType }: { setDisplayType: (new_type: 'list' | 'grid') => void }) => {
    const {displayLength, setDisplayLength, sortOption, setSortOption, filteredProducts, pageNumber} = useContext(ProductsContext);

    const {width} = useWindowDimensions()

    const handleChangeDisplayLength = (value: string) => setDisplayLength(Number(value));
    const handleChangeSortOption = (value: string) => setSortOption(value);
    return (
        <div className="sticky top-[100px] bg-accent xs:py-6 py-3 xs:px-16 px-8 flex lg:justify-between justify-center items-center sm:gap-6 gap-3 z-50 flex-wrap-reverse">
            <div className='xs:flex justify-center items-center gap-6 space-y-3 xs:space-y-0'>
                {/* <div className='flex justify-center items-center gap-3 cursor-pointer'>
                    <img src={filterIcon} className='w-6 h-6' alt="filter" />
                    <p className='font-poppins text-black text-lg'>Filter</p>
                </div> */}
                <div className='cursor-pointer w-7 h-7 sm:block hidden'>
                    <img src={gridViewIcon} className='w-7 h-7' alt="grid-view" onClick={() => setDisplayType('grid')} />
                </div>
                <div className='cursor-pointer w-6 h-6 sm:block hidden'>
                    <img src={listViewIcon} className='w-6 h-6' alt="list-view" onClick={() => setDisplayType('list')} />
                </div>
                <div className='h-8 w-0.5 bg-dark sm:block hidden'></div>
                <p className='text-base text-black font-normal'>Showing {(pageNumber-1)*displayLength + 1}-{pageNumber*displayLength > filteredProducts ? filteredProducts : pageNumber*displayLength} of {filteredProducts} products</p>
            </div>
            <div className='flex justify-center items-center xs:gap-6 gap-3'>
                <p className='text-base text-black font-normal'>Show</p>
                <Select options={DISPLAY_OPTIONS} value={displayLength.toString()} onSelect={handleChangeDisplayLength} height={width < 450 ? 45 : 55} width={width < 450 ? 45 : 55} />
                <p className='text-base text-black font-normal'>Sort By</p>
                <Select options={SORT_OPTIONS} value={sortOption} onSelect={handleChangeSortOption} width={width < 450 ? 130 : 185} height={width < 450 ? 45 : 55} />
                
            </div>
        </div>
    )
}

export default FilterBox