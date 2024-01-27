"use client";

import { TrashIcon } from '@radix-ui/react-icons';
import { AlertDialog, Button, Flex } from '@radix-ui/themes';

const DeleteIssueBtn = ({ issueId }: { issueId: number }) => {
    return (
        <AlertDialog.Root>
            <AlertDialog.Trigger>
                <Button color='red'>
                    <TrashIcon />
                    Delete Issue
                    {/* <Link href={`/issues/${issueId}/edit`}></Link> */}
                </Button>
            </AlertDialog.Trigger>
            <AlertDialog.Content>
                <AlertDialog.Title>
                    Confirm Deletion
                </AlertDialog.Title>
                <AlertDialog.Description>
                    <Flex align={'start'} direction={'column'} >
                        <span>
                            Are you sure you want to delete this issue?
                            This action cannot be undone!.
                        </span>
                    </Flex>
                </AlertDialog.Description>
                <Flex gap={'4'} direction={'row'} mt={'5'}>
                    <AlertDialog.Action>
                        <Button color='red'>Yes, I&apos;m Sure</Button>
                    </AlertDialog.Action>
                    <AlertDialog.Cancel>
                        <Button variant='soft' color='gray'>Cancel</Button>
                    </AlertDialog.Cancel>
                </Flex>
            </AlertDialog.Content>
        </AlertDialog.Root>
    )
}

export default DeleteIssueBtn;