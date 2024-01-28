"use client";

import { IssueStatus } from '@prisma/client';
import { Select } from '@radix-ui/themes';
import { useRouter, useSearchParams } from 'next/navigation';

const status: { label: string, value?: IssueStatus }[] = [
    { label: 'All' },
    { label: 'Open', value: 'OPEN' },
    { label: 'Closed', value: 'CLOSED' },
    { label: 'In Progress', value: 'IN_PROGRESS' },
]

const IssueStatusFilter = () => {
    const router = useRouter();
    const searchParams = useSearchParams();

    // const fetchExistingParamsAndSearch = () => 

    return (
        <Select.Root onValueChange={(status: string) => {
            const params = new URLSearchParams();
            if (status) params.append('status', status);
            if (searchParams.get('orderBy')) params.append('orderBy', searchParams.get('orderBy')!);
            const query = params.size ? '?' + params.toString() : "";
            router.push('/issues/list' + query);
        }} defaultValue={searchParams.get('status') || ''}>
            <Select.Trigger placeholder='Filter by status...' />
            <Select.Content>
                {status.map(s => <Select.Item key={s.label} value={s.value || "null"}>{s.label}</Select.Item>)}
            </Select.Content>
        </Select.Root>
    )
    }

    export default IssueStatusFilter;