import Productimage from '@/assets/home/product.jpg'

const ImagesGrid = () => {
  return (
    <div className='w-full flex justify-center items-center gap-4'>
        <div className='flex flex-col justify-start items-center gap-4'>
            <div className='w-20 h-20 bg-accent p-1 rounded-md'>
                <img src={Productimage} alt='image' className='w-full h-full object-cover' />
            </div>
            <div className='w-20 h-20 bg-accent p-1 rounded-md'>
                <img src={Productimage} alt='image' className='w-full h-full object-cover' />
            </div>
            <div className='w-20 h-20 bg-accent p-1 rounded-md'>
                <img src={Productimage} alt='image' className='w-full h-full object-cover' />
            </div>
            <div className='w-20 h-20 bg-accent p-1 rounded-md'>
                <img src={Productimage} alt='image' className='w-full h-full object-cover' />
            </div>
        </div>
        <div className='w-[368px] aspect-square p-1 bg-accent rounded-lg'>
            <img src={Productimage} alt='image' className='w-full h-full object-cover' />
        </div>
    </div>
  )
}

export default ImagesGrid