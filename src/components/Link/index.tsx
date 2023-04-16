import LinkNext from 'next/link';
import { ReactNode } from 'react';

interface LinkProps {
    children?: ReactNode;
    href: string;



}

export const Link = ({ children, href }: LinkProps) => {
    return (<>

        <LinkNext href={href}>
            {children}
        </LinkNext>

    </>)
} 