'use client';

import Link from "next/link";
import { usePathname } from 'next/navigation';

interface TopBarOptionProps {
    text: string,
    path: string
}

const TopBar: React.FC<TopBarOptionProps> = ({
    text,
    path
}) => {
    const pathname = usePathname();
    
	return (
        <Link href={path}>
            <li className={`
            flex
            gap-6
            text-sm
            hover:text-primary
            ${pathname === path?
                'text-primary underline':
                'text-black'
            }
            `}>
                {text}
            </li>
        </Link>
    );
};

export default TopBar;