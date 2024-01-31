'use client';

import { Container } from '@radix-ui/themes';

const Footer = () => {
  return (
    <>
      <Container className='pt-8 pb-4'>
        <footer className=' rounded-lg shadow-md '>
          <div className='w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between'>
            <span className='text-sm text-gray-700 sm:text-center'>
              © 2024{' '}
              <a href='https://tracker.io.com/' className='hover:underline'>
                Tracker.io™
              </a>{' '}
              | All Rights Reserved.
            </span>
            <ul className='flex flex-wrap items-center mt-3 text-sm font-medium text-gray-700 sm:mt-0'>
              <li>
                <a href='#' className='hover:underline me-4 md:me-6'>
                  About
                </a>
              </li>
              <li>
                <a href='#' className='hover:underline me-4 md:me-6'>
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href='#' className='hover:underline me-4 md:me-6'>
                  Licensing
                </a>
              </li>
              <li>
                <a href='#' className='hover:underline'>
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </footer>
      </Container>
    </>
  );
};

export default Footer;
