interface ButtonProps{
    text: string,
    style: "dark" | "light"
    customClassName?: string
}

const Button = ({ text, style, customClassName="" }: ButtonProps) => {
  return (
    <button className={`w-full p-3 font-semibold text-base mt-2 cursor-pointer duration-200 ${style === 'dark' ? 'bg-primary text-white hover:text-primary hover:bg-white' : 'bg-white text-primary hover:text-white hover:bg-primary'} ${customClassName}`}>{text}</button>
  )
}

export default Button