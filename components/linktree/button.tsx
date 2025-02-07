import Link from 'next/link';

export const Button = (props) => {
    const { children, href, title, target, rel } = props
    return (
    <Link href={href} passHref title={title} target={target} rel={rel}>
          <div className="w-12 h-12 mr-2 pt-3 items-center justify-center text-center text-gray-700 transition-colors duration-150 bg-white rounded-full focus:shadow-outline hover:bg-gray-200">{children}</div>
    </Link>);
}

export default Button;
