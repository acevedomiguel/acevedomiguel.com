import Link from 'next/link';
import { eventOnClick } from '../ga'

export const Button = ({ children, link, title }) => {
    return (
    <Link href={link} >
        <button onClick={eventOnClick("outbound_click", { url: link }) } title={title} className="w-12 h-12 mr-2 items-center justify-center text-gray-700 transition-colors duration-150 bg-white rounded-full focus:shadow-outline hover:bg-gray-200">  
            {children}
        </button>
    </Link>);
}

export default Button;
