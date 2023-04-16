import LinkNext from 'next/link';
import { ReactNode } from 'react';

type LinkType = "link1" | "link2"

interface LinkProps {
    children?: ReactNode;
    href: string;
    type?:LinkType;



}

export const Link = ({ children, href,type='link1'}: LinkProps) => {
    return (<>
       
        <LinkNext className={`link ${type}`} href={href}>
            {children}
        </LinkNext>

    </>)
} 