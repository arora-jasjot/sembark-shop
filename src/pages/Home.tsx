import Footer from "@/components/Common/Footer"
import Banner from "@/components/Home/Banner"
import FilterBox from "@/components/Home/FilterBox"
import PaginatedGrid from "@/components/Home/PaginatedGrid"
import { ProductsContext } from "@/context/ProductsContext"
import { useWindowDimensions } from "@/utils/udeDimensions"
import { useContext, useEffect, useState } from "react"
import { useSearchParams } from "react-router"
import { motion } from "framer-motion";

const pageVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
}


const Home = () => {
  const { width } = useWindowDimensions();
  const [displayType, setDisplayType] = useState<'grid' | 'list'>('grid')
  const {displayLength, setDisplayLength, sortOption, setSortOption} = useContext(ProductsContext);

  const [searchParams, setSearchParams] = useSearchParams();

   const sortby = searchParams.get("sortby") || sortOption || "default";
  const pageSize = Number(searchParams.get("pageSize")) || displayLength || 10;

  useEffect(() => {
    if (sortby !== sortOption) setSortOption(sortby);
    if (pageSize !== displayLength) setDisplayLength(pageSize);
  }, [sortby, pageSize]);

  useEffect(() => {
    const currentSort = searchParams.get("sortby");
    const currentPageSize = searchParams.get("pageSize");

    if (currentSort !== sortOption || Number(currentPageSize) !== displayLength) {
      setSearchParams({
        sortby: sortOption || "default",
        pageSize: String(displayLength || 10),
      });
    }
  }, [sortOption, displayLength]);

  useEffect(() => {
    if (width < 640 && displayType === 'list') setDisplayType('grid')
  }, [width, displayType])
  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 0.4, ease: "easeInOut" }}
      className="p-10"
    >
    <div className="relative w-full">
      <Banner />
      <FilterBox setDisplayType={setDisplayType} />
      <PaginatedGrid displayType={displayType} />
      <Footer />
    </div>
    </motion.div>
  )
}

export default Home