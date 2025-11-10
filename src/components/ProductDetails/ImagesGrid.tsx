import Productimage from '@/assets/home/product.jpg'

const ImagesGrid = ({ image }: { image: string | null }) => {
    return (
        <div className='w-full flex justify-center items-center gap-4'>
            <div className='lg:w-[368px] md:w-[300px] sm:w-[200px] w-full max-w-[300px] aspect-square p-1 bg-accent rounded-lg'>
                <img src={image || Productimage} alt='image' className='w-full h-full object-cover' />
            </div>
        </div>
    )
}

export default ImagesGrid