'use client';

import Link from 'next/link';

import classnames from 'classnames';
import { useSession } from 'next-auth/react';
import { usePathname } from 'next/navigation';
import { AiFillBug } from 'react-icons/ai';
import { Box } from '@radix-ui/themes';

const Navbar = () => {
    const currentActivePath = usePathname();
    const { status, data: session } = useSession();

    const menu = [
        { href: '/', label: 'Dashboard' },
        { href: '/issues/list', label: 'Issues' },
    ]
    return (
        <nav className='flex px-5 h-14 items-center border-b justify-between shadow-sm'>
            <Link className='flex items-center' href='/'>Tracker.io <AiFillBug className='ml-2' /></Link>
            <ul className='flex flex-row items-center'>
                {menu.map((m, index) =>
                    <li key={index}>
                        <Link
                            href={m.href}
                            className={classnames({
                                'text-slate-500 font-normal p-4': currentActivePath !== m.href,
                                'text-slate-900 font-normal p-4 bg-zinc-200': currentActivePath === m.href,
                                'hover:text-slate-800 transition-colors': true
                            }
                            )}>{m.label}</Link>
                    </li>)}
            <Box>
                {status === 'authenticated' && <Link href={'/api/auth/signout'}>Log Out</Link>}
                {status === 'unauthenticated' && <Link href={'/api/auth/signin'}>Log In</Link>}
            </Box>
            </ul>
        </nav>
    )
}

export default Navbar;