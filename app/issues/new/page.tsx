"use client"

import React, { useState } from 'react'
import { FaArrowRight } from "react-icons/fa";
import { GoAlertFill } from "react-icons/go";

import { Button, Callout, Heading, Text, TextField } from "@radix-ui/themes";
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import { useForm, Controller } from 'react-hook-form';
import axios from "axios";
import { useRouter } from 'next/navigation';
import { zodResolver } from '@hookform/resolvers/zod';
import { createIssueSchema } from '@/app/validationSchemas';
import { z } from 'zod';
import ErrorMessage from '@/components/ErrorMessage';
import Spinner from '@/components/Spinner';

type IssueForm = z.infer<typeof createIssueSchema>;

const CreateNewIssue = () => {
    const router = useRouter();
    const [error, setError] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const { register, control, handleSubmit, formState: { errors } } = useForm<IssueForm>({
        resolver: zodResolver(createIssueSchema)
    });
    const submitIssue = handleSubmit(async (data) => {
            try {
                setIsSubmitting(true);
                await axios.post('/api/issues', data);
                setIsSubmitting(false);
                router.push('/issues');
            } catch (error) {
                setIsSubmitting(false)
                setError('An Unexpected error occurred, Kindly Try Again.');
            }
        }
    )

    return (
        <div className='max-w-2xl h-full border mx-auto my-auto mt-5 p-6 rounded-md shadow-md'>
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
                        <TextField.Input placeholder="Title" {...register('title')} />
                    </TextField.Root>
                    <ErrorMessage >{errors.title?.message}</ErrorMessage>
                    <Controller name='description' control={control} render={({ field }) =>
                        <SimpleMDE placeholder='Description' {...field} />} />
                    <ErrorMessage >{errors.description?.message}</ErrorMessage>
                    <Button>
                        Submit
                        {isSubmitting ? <Spinner /> : <FaArrowRight />}
                    </Button>
                </div>
            </form>
        </div>

    )
}

export default CreateNewIssue;