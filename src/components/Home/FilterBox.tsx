import { useState } from 'react'
import Select from '../Common/Select'
import { DISPLAY_OPTIONS } from '@/constants/DISPLAY_OPTIONS'
import { SORT_OPTIONS } from '@/constants/SORT_OPTIONS'
import filterIcon from '@/assets/icons/filter.svg'
import gridViewIcon from '@/assets/icons/grid-view.svg'
import listViewIcon from '@/assets/icons/list-view.svg'

const FilterBox = () => {
    const [displayLength, setDisplayLength] = useState<number>(10);
    const [sortOption, setSortOption] = useState<string>('default');

    const handleChangeDisplayLength = (value: string) => setDisplayLength(Number(value));
    const handleChangeSortOption = (value: string) => setSortOption(value);
    return (
        <div className="sticky top-[100px] bg-accent py-6 px-16 flex justify-between items-center gap-6 z-50">
            <div className='flex justify-center items-center gap-6'>
                <div className='flex justify-center items-center gap-3 cursor-pointer'>
                    <img src={filterIcon} className='w-6 h-6' alt="filter" />
                    <p className='font-poppins text-black text-lg'>Filter</p>
                </div>
                <div className='cursor-pointer w-7 h-7'>
                    <img src={gridViewIcon} className='w-7 h-7' alt="grid-view" />
                </div>
                <div className='cursor-pointer w-6 h-6'>
                    <img src={listViewIcon} className='w-6 h-6' alt="list-view" />
                </div>
                <div className='h-8 w-0.5 bg-dark'></div>
                <p className='text-base text-black font-normal'>Showing 1-10 of 32 products</p>
            </div>
            <div className='flex justify-center items-center gap-6'>
                <p className='text-base text-black font-normal'>Show</p>
                <Select options={DISPLAY_OPTIONS} value={displayLength.toString()} onSelect={handleChangeDisplayLength} />
                <p className='text-base text-black font-normal'>Sort By</p>
                <Select options={SORT_OPTIONS} value={sortOption} onSelect={handleChangeSortOption} width={185} />
                
            </div>
        </div>
    )
}

export default FilterBox