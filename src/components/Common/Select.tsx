import { useEffect, useRef, useState } from "react"
import type { Option } from "@/types/option"

interface SelectProps {
    width?: number,
    height?: number,
    options: Option[],
    value: string,
    onSelect: (value: string) => void
}
const Select = ({ width = 55, height = 55, options, value, onSelect }: SelectProps) => {
    const optionsBoxRef = useRef<HTMLDivElement | null>(null);

    const [showOptions, setShowOptions] = useState<boolean>(false)

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (optionsBoxRef.current && !optionsBoxRef.current.contains(event.target as Node)) {
                setShowOptions(false)
            }
        }

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    const handleSelectOption = (_value: string) => {
        onSelect(_value);
    }
    const getSelectedLabel = () => options.find(option => option.value === value)?.label || '';
    return (
        <div className="bg-white relative flex justify-center items-center text-center cursor-pointer" style={{ width: `${width}px`, height: `${height}px` }} onClick={() => setShowOptions(_so => !_so)} ref={optionsBoxRef}>
            <p className="text-lg font-medium text-dark">{getSelectedLabel()}</p>
            <div className="bg-white shadow absolute top-full left-0 overflow-y-hidden duration-150" style={{ width: `${width}px`, maxHeight: showOptions ? '200px' : 0 }}>
                {
                    options.map((option: Option) => <div key={option.id} className={`w-full py-2 hover:bg-accent cursor-pointer ${option.value === value ? 'bg-secondary' : 'bg-white'}`} onClick={() => handleSelectOption(option.value)}>{option.label}</div>)
                }
            </div>
        </div>
    )
}

export default Select