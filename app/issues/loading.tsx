import { Skeleton } from '@/components';
import { Table } from '@radix-ui/themes';
import CreateActionBtn from "./createActionBtn";

const IssueLoadingSkeleton = () => {
    const issues = [1, 2, 3, 4, 5];
    return (
        <div className='w-full h-full px-6 my-6 space-y-5'>
            <CreateActionBtn />
            <Table.Root variant='surface'>
                <Table.Header>
                    <Table.Row>
                        <Table.ColumnHeaderCell>Issue</Table.ColumnHeaderCell>
                        <Table.ColumnHeaderCell>Status</Table.ColumnHeaderCell>
                        <Table.ColumnHeaderCell className='hidden sm:table-cell'>Description</Table.ColumnHeaderCell>
                        <Table.ColumnHeaderCell className='hidden md:table-cell'>Date</Table.ColumnHeaderCell>
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    {issues.map((issue) => (
                        <Table.Row key={issue}>
                            <Table.Cell className='break-words'><Skeleton /></Table.Cell>
                            <Table.Cell><Skeleton /></Table.Cell>
                            <Table.Cell className='hidden sm:table-cell break-words'><Skeleton /></Table.Cell>
                            <Table.Cell className='hidden md:table-cell overflow-ellipsis'><Skeleton /></Table.Cell>
                        </Table.Row>
                    ))}
                </Table.Body>
            </Table.Root>
        </div>
    )
}

export default IssueLoadingSkeleton;