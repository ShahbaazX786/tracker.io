'use client';

import Link from 'next/link';

import { Avatar, Box, Container, DropdownMenu, Flex, Text } from '@radix-ui/themes';
import classnames from 'classnames';
import { useSession } from 'next-auth/react';
import { usePathname } from 'next/navigation';
import { AiFillBug } from 'react-icons/ai';

const Navbar = () => {
    const currentActivePath = usePathname();
    const { status, data: session } = useSession();

    const menu = [
        { href: '/', label: 'Dashboard' },
        { href: '/issues/list', label: 'Issues' },
    ]
    return (
        <nav className='px-5 border-b shadow-sm py-4'>
            <Container>
                <Flex justify={'between'}>
                    <Flex align={'center'} gap={'4'}>
                        <Link className='flex items-center' href='/'>Tracker.io <AiFillBug className='mr-3' /></Link>
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

                        </ul>
                    </Flex>
                    <Box>
                        {status === 'authenticated' && (
                            <DropdownMenu.Root>
                                <DropdownMenu.Trigger>
                                    <Avatar src={session.user!.image!} fallback="?" size={'2'} radius='full' className='cursor-pointer' />
                                </DropdownMenu.Trigger>
                                <DropdownMenu.Content>
                                    <DropdownMenu.Label>
                                        <Text size={'2'}>
                                            {session.user!.email}
                                        </Text>
                                    </DropdownMenu.Label>
                                    <DropdownMenu.Item>
                                        <Link href={'/api/auth/signout'}>Log Out</Link>
                                    </DropdownMenu.Item>
                                </DropdownMenu.Content>
                            </DropdownMenu.Root>
                        )}
                        {status === 'unauthenticated' && <Link href={'/api/auth/signin'}>Log In</Link>}
                    </Box>
                </Flex>
            </Container>
        </nav>
    )
}

export default Navbar;