import Footer from "@/components/Common/Footer"
import Banner from "@/components/Home/Banner"
import FilterBox from "@/components/Home/FilterBox"
import PaginatedGrid from "@/components/Home/PaginatedGrid"



const Home = () => {
  return (
      <div className="relative w-full">
        <Banner />
        <FilterBox />
        <PaginatedGrid />
        <Footer />
      </div>
  )
}

export default Home