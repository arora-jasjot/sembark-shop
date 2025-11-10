import Productimage from '@/assets/home/product.jpg'

const ImagesGrid = ({ image }: { image: string | null }) => {
    return (
        <div className='lg:max-w-[368px] md:max-w-[300px] sm:max-w-[200px] max-w-[300px] w-full aspect-square p-1 bg-accent rounded-lg'>
            <img src={image || Productimage} alt='image' className='w-full h-full object-cover' />
        </div>
    )
}

export default ImagesGrid