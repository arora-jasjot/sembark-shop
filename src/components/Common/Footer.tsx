import { FOOTER_CONTENTS } from "@/constants/FOOTER_CONTENTS"


const Footer = () => {
    
  return (
    <div className='w-full px-6 py-16 flex justify-around items-center gap-4 mt-10 bg-accent'>
        {
            FOOTER_CONTENTS.map(content => <div key={content.id} className='flex justify-center items-center gap-2 font-poppins'>
            <img src={content.icon} className='w-10 h-auto' alt="quality" />
            <div>
                <h3 className='text-xl font-semibold text-black'>{content.title}</h3>
                <p className='text-base font-normal text-grey'>{content.description}</p>
            </div>
        </div>)
        }
    </div>
  )
}

export default Footer