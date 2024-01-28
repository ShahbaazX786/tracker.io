"use client"

import { Skeleton } from '@/components';
import { User } from '@prisma/client';
import { Select } from '@radix-ui/themes';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const AssignIssue = () => {
    const { data: users, error, isLoading } = useQuery<User[]>({
        queryKey: ['users'],
        queryFn: () => axios.get('/api/users').then(res => res.data),
        staleTime: 60 * 1000, // 60 seconds
        retry: 3 // if failed then it will retry the same request for 3 times.
    });

    if (isLoading) return <Skeleton height={'1rem'} />;

    return (
        <Select.Root>
            <Select.Trigger placeholder='Assign...'>
            </Select.Trigger>
            <Select.Content>
                <Select.Group>
                    <Select.Label>Available Users..</Select.Label>
                    {error && (<Select.Item key={'error'} value='error' className='text-red-500 font-semibold bg-red-100 p-1 rounded-sm'>Error!, Unable to load users</Select.Item>)}
                    {users?.map(user => <Select.Item key={user.id} value={user.id}>{user.name}</Select.Item>)}
                </Select.Group>
            </Select.Content>
        </Select.Root>
    )
}

export default AssignIssue;