'use client';

import React from 'react';
import Link from 'next/link';

import classnames from 'classnames';
import { AiFillBug } from 'react-icons/ai';
import { usePathname } from 'next/navigation';

const Navbar = () => {
    const currentActivePath = usePathname();
    const menu = [
        { href: '/', label: 'Dashboard' },
        { href: '/issues', label: 'Issues' },
    ]
    return (
        <nav className='flex px-5 h-14 items-center border-b justify-between shadow-sm'>
            <Link className='flex items-center' href='/'>Tracker.io <AiFillBug className='ml-2' /></Link>
            <ul className='flex flex-row items-center'>
                {menu.map((m, index) => <Link
                    key={index}
                    href={m.href}
                    className={classnames({
                        'text-slate-500 font-normal p-4': currentActivePath !== m.href,
                        'text-slate-900 font-normal p-4 bg-zinc-200': currentActivePath === m.href,
                        'hover:text-slate-800 transition-colors': true
                    }
                    )}>{m.label}</Link>)}
            </ul>
        </nav>
    )
}

export default Navbar;