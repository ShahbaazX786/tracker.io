"use client";

import { IssueStatus } from '@prisma/client';
import { Select } from '@radix-ui/themes';
import { useRouter } from 'next/navigation';

const status: { label: string, value?: IssueStatus }[] = [
    { label: 'All' },
    { label: 'Open', value: 'OPEN' },
    { label: 'Closed', value: 'CLOSED' },
    { label: 'In Progress', value: 'IN_PROGRESS' },
]

const IssueStatusFilter = () => {
    const router = useRouter();
    return (
        <Select.Root onValueChange={(status) => {
            const query = status ? `?status=${status}` : '';
            router.push('/issues/list' + query);
        }}>
            <Select.Trigger placeholder='Filter by status...' />
            <Select.Content>
                {status.map(s => <Select.Item key={s.label} value={s.value || "null"}>{s.label}</Select.Item>)}
            </Select.Content>
        </Select.Root>
    )
}

export default IssueStatusFilter;