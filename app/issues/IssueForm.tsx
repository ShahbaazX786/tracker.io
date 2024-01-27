"use client"

import { IssueSchema } from '@/app/validationSchemas';
import { ErrorMessage, Spinner } from '@/components';
import { zodResolver } from '@hookform/resolvers/zod';
import { Issue } from '@prisma/client';
import { Button, Callout, Heading, TextField } from "@radix-ui/themes";
import axios from "axios";
import "easymde/dist/easymde.min.css";
import dynamic from 'next/dynamic';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { FaArrowRight } from "react-icons/fa";
import { GoAlertFill } from "react-icons/go";
import { z } from 'zod';

const SimpleMDE = dynamic(
    () => import('react-simplemde-editor'),
    { ssr: false }
);

type IssueFormData = z.infer<typeof IssueSchema>;

const IssueForm = ({ issue }: { issue?: Issue }) => {
    const router = useRouter();
    const [error, setError] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const { register, control, handleSubmit, formState: { errors } } = useForm<IssueFormData>({
        resolver: zodResolver(IssueSchema)
    });
    const submitIssue = handleSubmit(async (data) => {
        try {
            setIsSubmitting(true);
            if (issue) {
                await axios.patch('/api/issues/' + issue.id, data);
            } else {
                await axios.post('/api/issues', data);
            }
            setIsSubmitting(false);
            router.push('/issues');
            router.refresh();
        } catch (error) {
            setIsSubmitting(false)
            setError('An Unexpected error occurred, Kindly Try Again.');
        }
    })

    return (
        <div className='max-w-2xl h-full border mt-5 p-6 rounded-md shadow-md'>
            {error &&
                (<Callout.Root color='red'>
                    <Callout.Icon>
                        <GoAlertFill />
                    </Callout.Icon>
                    <Callout.Text>{error}</Callout.Text>
                </Callout.Root>)}
            <form
                onSubmit={submitIssue}>
                <Heading className='py-4'>Create a new issue</Heading>
                <div className='space-y-5'>
                    <TextField.Root>
                        <TextField.Input defaultValue={issue?.title} placeholder="Title" {...register('title')} />
                    </TextField.Root>
                    <ErrorMessage >{errors.title?.message}</ErrorMessage>
                    <Controller name='description' control={control} defaultValue={issue?.description} render={({ field }) =>
                        <SimpleMDE placeholder='Description' {...field} />} />
                    <ErrorMessage >{errors.description?.message}</ErrorMessage>
                    <Button disabled={isSubmitting}>
                        {issue ? 'Update Issue' : 'Submit Issue'}
                        {isSubmitting ? <Spinner /> : <FaArrowRight />}
                    </Button>
                </div>
            </form>
        </div>
    )
}

export default IssueForm;