interface QuantityButtonProps{
    value: number,
    onChange: (new_value: number) => void
}

const QuantityButton = ({ value, onChange }: QuantityButtonProps) => {
  return (
    <div className="flex justify-between w-[100px] rounded-md border border-black py-1 px-4 font-montserrat select-none">
        <p className="cursor-pointer text-grey" onClick={() => onChange(value-1)}>-</p>
        <p className="font-medium text-lg cursor-default">{value}</p>
        <p className="cursor-pointer text-grey" onClick={() => onChange(value+1)}>+</p>
    </div>
  )
}

export default QuantityButton