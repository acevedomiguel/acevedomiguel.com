import Link from 'next/link';

export const Button = ({ children, label, link, iconClassName }) => {
    return (<div className="px-4 mx-auto mb-4 sm:max-w-xl">
        <div className="grid max-w-2xl sm:mx-auto">
            <Link href={link}>
                <a rel="noreferrer" target="_blank" className={iconClassName+" overflow-hidden rounded-2xl shadow-sm"}>
                    <div className="text-white flex items-center justify-between p-5 rounded-sm">
                        <div className="pr-4">
                        {children}{' '}
                        <span className="mb-2 font-semibold leading-5">{label}</span>
                        </div>
                    </div>
                </a>
            </Link>
        </div>
    </div>);
}

export default Button;