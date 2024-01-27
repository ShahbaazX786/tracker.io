"use client";

import { Spinner } from '@/components';
import { TrashIcon } from '@radix-ui/react-icons';
import { AlertDialog, Button, Flex } from '@radix-ui/themes';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

const DeleteIssueBtn = ({ issueId }: { issueId: number }) => {
    const router = useRouter();
    const [error, setError] = useState(false);
    const [IsDeleting, setDeleting] = useState(false);

    const DeleteIssue = async () => {
        try {
            setDeleting(true);
            await axios.delete('/api/issues/' + issueId);
            router.push('/issues');
            router.refresh();
        } catch (error) {
            setDeleting(false);
            setError(true);
        }
    }

    return (
        <>
            <AlertDialog.Root>
                <AlertDialog.Trigger>
                    <Button color='red' disabled={IsDeleting}>
                        <TrashIcon />
                        Delete Issue
                        {IsDeleting && <Spinner />}
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
                            <Button color='red' onClick={DeleteIssue}>Yes, I&apos;m Sure</Button>
                        </AlertDialog.Action>
                        <AlertDialog.Cancel>
                            <Button variant='soft' color='gray'>Cancel</Button>
                        </AlertDialog.Cancel>
                    </Flex>
                </AlertDialog.Content>
            </AlertDialog.Root>

            <AlertDialog.Root open={error}>
                <AlertDialog.Content>
                    <AlertDialog.Title>Uh, Oh!</AlertDialog.Title>
                    <AlertDialog.Description>This Issue could not be deleted!.</AlertDialog.Description>
                    <Flex direction={'row'} gap={'4'}>
                        <Button color='orange' variant='solid' mt={'4'} onClick={() => { setError(false); router.push('/issues') }}>Go Back</Button>
                        <Button color='gray' variant='soft' mt={'4'} onClick={() => setError(false)}>Okay</Button>
                    </Flex>
                </AlertDialog.Content>
            </AlertDialog.Root>
        </>
    )
}

export default DeleteIssueBtn;