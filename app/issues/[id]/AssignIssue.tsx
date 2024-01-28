"use client"

import { Skeleton } from '@/components';
import { Issue, User } from '@prisma/client';
import { Select } from '@radix-ui/themes';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { Toaster, toast } from 'react-hot-toast';

const AssignIssue = ({ issue }: { issue: Issue }) => {
    const { data: users, error, isLoading } = useUsers();

    if (isLoading) return <Skeleton height={'1rem'} />;

    const assignIssue = async (userId: string) => {
        axios
            .patch('/api/issues/' + issue.id, { assignedToUserId: userId !== "unassigned" ? userId : null })
            .then(() => { toast.success('Changes saved Sucessfully!.') })
            .catch(() => { toast.error('Changes could not be saved.') })
    }

    return (
        <>
            <Select.Root onValueChange={assignIssue} defaultValue={issue.assignedToUserId || 'unassigned'}>
                <Select.Trigger placeholder='Assign...'>
                </Select.Trigger>
                <Select.Content>
                    <Select.Group>
                        <Select.Label>Available Users..</Select.Label>
                        {error && (<Select.Item key={'error'} value='error' className='text-red-500 font-semibold bg-red-100 p-1 rounded-sm'>Error!, Unable to load users</Select.Item>)}
                        <Select.Item value={'unassigned'}>Unassigned</Select.Item>
                        {users?.map(user => <Select.Item key={user.id} value={user.id}>{user.name}</Select.Item>)}
                    </Select.Group>
                </Select.Content>
            </Select.Root>
            <Toaster />
        </>
    )
}

const useUsers = () => useQuery<User[]>({
    queryKey: ['users'],
    queryFn: () => axios.get('/api/users').then(res => res.data),
    staleTime: 60 * 1000, // 60 seconds
    retry: 3 // if failed then it will retry the same request for 3 times.
});


export default AssignIssue;