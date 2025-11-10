import Footer from "@/components/Common/Footer"
import Banner from "@/components/Home/Banner"
import FilterBox from "@/components/Home/FilterBox"
import PaginatedGrid from "@/components/Home/PaginatedGrid"
import { ProductsContext } from "@/context/ProductsContext"
import { useWindowDimensions } from "@/utils/udeDimensions"
import { useContext, useEffect, useState } from "react"
import { useSearchParams } from "react-router"
import { motion } from "framer-motion";
import { IoIosClose } from "react-icons/io";


const pageVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
}


const Home = () => {
  const { width } = useWindowDimensions();
  const [displayType, setDisplayType] = useState<'grid' | 'list'>('grid')
  const { displayLength, setDisplayLength, sortOption, setSortOption, selectedCategories, toggleCategory, selectCategories } = useContext(ProductsContext);

  const [searchParams, setSearchParams] = useSearchParams();

  const sortby = searchParams.get("sortby") || sortOption || "";
  const pageSize = Number(searchParams.get("pageSize")) || displayLength || 10;
  const category = searchParams.get("category") || selectedCategories || null;

  useEffect(() => {
    if (sortby !== sortOption) setSortOption(sortby);
    if (category !== selectedCategories) selectCategories(category);
    if (pageSize !== displayLength) setDisplayLength(pageSize);
  }, [sortby, pageSize, category]);

  useEffect(() => {
    const currentSort = searchParams.get("sortby");
    const currentPageSize = searchParams.get("pageSize");
    const currentCategory = searchParams.get("category");

    if (currentSort !== sortOption || Number(currentPageSize) !== displayLength || currentCategory !== selectedCategories) {
      setSearchParams({
        ...(sortOption?.trim()?.length && { sortby: sortOption }),
        ...(selectedCategories?.trim()?.length && { category: selectedCategories }),
        pageSize: String(displayLength || 10),
      });
    }
  }, [sortOption, displayLength, selectedCategories]);

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
    >
      <div className="relative w-full">
        <Banner />
        <FilterBox setDisplayType={setDisplayType} />

        {
          selectedCategories && selectedCategories.split(',').length > 0 && <div className="flex justify-start items-center gap-3 flex-wrap my-6 mx-8 sm:mx-16">
            {selectedCategories.split(',').map(selectedCategory =>
              <button className="bg-primary text-white font-semibold capitalize py-2 px-10 rounded-full flex justify-center items-center gap-2 cursor-pointer" onClick={() => toggleCategory(selectedCategory)}>{selectedCategory} <IoIosClose size={25} />
              </button>
            )}
          </div>
        }
      <PaginatedGrid displayType={displayType} />
      <Footer />
    </div>
    </motion.div >
  )
}

export default Home