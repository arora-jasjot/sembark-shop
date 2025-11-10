import Footer from "@/components/Common/Footer"
import Banner from "@/components/Home/Banner"
import FilterBox from "@/components/Home/FilterBox"
import PaginatedGrid from "@/components/Home/PaginatedGrid"
import { useWindowDimensions } from "@/utils/udeDimensions"
import { useEffect, useState } from "react"



const Home = () => {
  const {width} = useWindowDimensions();
  const [displayType, setDisplayType] = useState<'grid' | 'list'>('grid')

  useEffect(() => {
    if(width < 640 && displayType === 'list') setDisplayType('grid')
  }, [width, displayType])
  return (
      <div className="relative w-full">
        <Banner />
        <FilterBox setDisplayType={setDisplayType} />
        <PaginatedGrid displayType={displayType} />
        <Footer />
      </div>
  )
}

export default Home