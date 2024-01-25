import React from 'react'
import { Badge } from '@radix-ui/themes';
import { IssueStatus } from '@prisma/client';

interface Props {
    status: IssueStatus
}

const statusMap: Record<IssueStatus, { label: string, color: 'red' | 'green' | 'violet' }> = {
    OPEN: { label: 'Open', color: 'red' },
    CLOSED: { label: 'Closed', color: 'green' },
    IN_PROGRESS: { label: 'In Progress', color: 'violet' },
}

const IssueStatusBadge = ({ status }: Props) => {
    return (
        <Badge color={statusMap[status].color}>{statusMap[status].label}</Badge>
    )
}

export default IssueStatusBadge;