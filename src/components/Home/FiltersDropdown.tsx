import { useEffect, useRef } from "react"

interface FiltersDropdownProps {
    categories: string[]
    selectedCategory: string | null
    handleSelectCategory: (new_category: string) => void
    setShowCategores: (value: boolean) => void
    showCategories: boolean
}
const FiltersDropdown = ({ categories, selectedCategory, handleSelectCategory, showCategories, setShowCategores }: FiltersDropdownProps) => {
    const categoriesBox = useRef<HTMLDivElement | null>(null);


    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (categoriesBox.current && !categoriesBox.current.contains(event.target as Node)) {
                setShowCategores(false)
            }
        }

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);
    return (
        <div className="bg-white shadow absolute top-full left-0 overflow-y-hidden duration-150" style={{ width: `${150}px`, maxHeight: showCategories ? '200px' : 0 }} ref={categoriesBox}>
            {
                categories.map((category: string) => <div key={category} className={`w-full px-2 py-2 hover:bg-accent cursor-pointer capitalize ${category === selectedCategory ? 'bg-secondary' : 'bg-white'}`} onClick={() => handleSelectCategory(category)}>{category}</div>)
            }
        </div>
    )
}

export default FiltersDropdown