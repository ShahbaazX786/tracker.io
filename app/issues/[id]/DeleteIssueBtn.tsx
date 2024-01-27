import Link from 'next/link';
import { Button } from '@radix-ui/themes';
import { TrashIcon } from '@radix-ui/react-icons';

const DeleteIssueBtn = ({ issueId }: { issueId: number }) => {
    return (
        <Button color='red'>
            <TrashIcon />
            <Link href={`/issues/${issueId}/edit`}> Delete Issue</Link>
        </Button>
    )
}

export default DeleteIssueBtn;