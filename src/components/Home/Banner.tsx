import bannerBg from '@/assets/home/banner-bg.jpg'

const Banner = () => {
  return (
    <div className='w-full h-screen relative'>
        <img src={bannerBg} className='w-full h-full object-cover' alt="banner" />
        <div className='absolute bg-secondary w-[80%] max-w-[600px] h-[400px] top-[50%] translate-y-[-35%] right-[10%] rounded-xl flex justify-center items-start flex-col gap-5 px-10 font-poppins'>
            <p className='text-text font-semibold text-base tracking-[3px]'>New Arrival</p>
            <h1 className='text-primary font-bold sm:text-5xl text-3xl leading-14'>Discover&nbsp;Our New&nbsp;Collection</h1>
            <p className='text-text font-normal sm:text-lg text-base'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.</p>
            <button className='bg-primary py-4 px-10 uppercase text-base font-bold text-white cursor-pointer'>Buy Now</button>
        </div>
    </div>
  )
}

export default Banner