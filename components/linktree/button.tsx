import Link from 'next/link';
import { onThisClick } from '../ga'

export const Button = (props) => {
    const { children, href, title, target } = props
    return (
    <Link href={href} passHref>
        <a onClick={onThisClick} title={title} target={target}>
            <div className="w-12 h-12 mr-2 pt-3 items-center justify-center text-center text-gray-700 transition-colors duration-150 bg-white rounded-full focus:shadow-outline hover:bg-gray-200">{children}</div>
        </a>
    </Link>);
}

export default Button;
