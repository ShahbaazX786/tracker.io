'use client';

import Link from 'next/link';

import { Skeleton } from '@/components';
import {
  Avatar,
  Box,
  Container,
  DropdownMenu,
  Flex,
  Text,
} from '@radix-ui/themes';
import classnames from 'classnames';
import { useSession } from 'next-auth/react';
import { usePathname } from 'next/navigation';
import { AiFillBug } from 'react-icons/ai';
import DarkModeSwitch from './DarkModeSwitch';

const Navbar = () => {
  return (
    <nav className='px-5 border-b shadow-sm py-4'>
      <Container>
        <Flex justify={'between'}>
          <Flex align={'center'} gap={'4'}>
            <Link className='flex items-center' href='/'>
              Tracker.io <AiFillBug className='ml-3' />
            </Link>
            <NavLinks />
          </Flex>
          <AuthStatus />
          <DarkModeSwitch />
        </Flex>
      </Container>
    </nav>
  );
};

export default Navbar;

// self contained components.
const NavLinks = () => {
  const currentActivePath = usePathname();
  const menu = [
    { href: '/', label: 'Dashboard' },
    { href: '/issues/list', label: 'Issues' },
  ];
  return (
    <ul className='flex flex-row items-center'>
      {menu.map((m, index) => (
        <li key={index}>
          <Link
            href={m.href}
            className={classnames({
              'nav-login-link': true,
              'text-slate-950 p-4 bg-violet-100 rounded-md':
                currentActivePath === m.href,
            })}
          >
            {m.label}
          </Link>
        </li>
      ))}
    </ul>
  );
};

const AuthStatus = () => {
  const { status, data: session } = useSession();

  if (status === 'loading') return <Skeleton width={'3rem'} />;
  if (status === 'unauthenticated')
    return <Link href={'/api/auth/signin'}>Log In</Link>;
  return (
    <Box>
      <DropdownMenu.Root>
        <DropdownMenu.Trigger>
          <Avatar
            src={session!.user!.image!}
            fallback='?'
            size={'2'}
            radius='full'
            className='cursor-pointer'
          />
        </DropdownMenu.Trigger>
        <DropdownMenu.Content>
          <DropdownMenu.Label>
            <Text size={'2'}>{session!.user!.email}</Text>
          </DropdownMenu.Label>
          <DropdownMenu.Item>
            <Link href={'/api/auth/signout'}>Log Out</Link>
          </DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu.Root>
    </Box>
  );
};
