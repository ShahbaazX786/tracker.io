import prisma from '@/prisma/client';
import { IssueStatus } from '@prisma/client';
import { Card, Flex, Text } from '@radix-ui/themes';
import Link from 'next/link';

const AllIssuesStatus = async () => {
    const open = await prisma.issue.count({ where: { status: 'OPEN' } });
    const inProgress = await prisma.issue.count({ where: { status: 'IN_PROGRESS' } });
    const closed = await prisma.issue.count({ where: { status: 'CLOSED' } });

    const Allstatus: {
        label: string;
        value: number;
        status: IssueStatus
    }[] = [
            { label: 'Open Issues', value: open, status: 'OPEN' },
            { label: 'In-Progress Issues', value: inProgress, status: 'IN_PROGRESS' },
            { label: 'Closed Issues', value: closed, status: 'CLOSED' },
        ];

    return (
        <Flex gap={'4'}>
            {Allstatus.map((s) => (
                <Card key={s.label}>
                    <Flex direction={'column'}>
                        <Link href={`/issues/list?status=${s.status}`} className='text-sm'>{s.label}</Link>
                        <Text size={'5'} className='font-bold'>{s.value}</Text>
                    </Flex>
                </Card>
            ))}
        </Flex>
    )
}

export default AllIssuesStatus;