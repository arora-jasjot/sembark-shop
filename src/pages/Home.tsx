import Navbar from "@/components/Common/Navbar"
import Banner from "@/components/Home/Banner"
import FilterBox from "@/components/Home/FilterBox"
import PaginatedGrid from "@/components/Home/PaginatedGrid"



const Home = () => {
  return (
    <div className="w-full relative">
      <Navbar page="home" />
      <div className="relative w-full">
        <Banner />
        <FilterBox />
        <PaginatedGrid />
      </div>
    </div>
  )
}

export default Home