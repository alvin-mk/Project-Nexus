import { ButtonProps } from "@/interfaces";

const Button: React.FC<ButtonProps> = ({ title, action }) => {
  return (
    <button onClick={action} className="px-8 py-2 border-2 border-[#37ec3a] rounded-full hover:bg-[#37d0de] hover:text-black transition-colors duration-300">
      {title}
    </button>
  )
}

export default Button;