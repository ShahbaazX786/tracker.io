import Link from 'next/link';
import { Button } from '@radix-ui/themes';
import { Pencil2Icon } from '@radix-ui/react-icons';

const EditIssueBtn = ({ issueId }: { issueId: number }) => {
    return (
        <Button>
            <Pencil2Icon />
            <Link href={`/issues/${issueId}/edit`}> Edit Issue</Link>
        </Button>
    )
}

export default EditIssueBtn;