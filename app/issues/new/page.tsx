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

type IssueForm = z.infer<typeof createIssueSchema>;

const CreateNewIssue = () => {
    const router = useRouter();
    const [error, setError] = useState('');
    const { register, control, handleSubmit, formState: { errors } } = useForm<IssueForm>({
        resolver: zodResolver(createIssueSchema)
    });

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
                onSubmit={
                    handleSubmit(
                        async (data) => {
                            try {
                                await axios.post('/api/issues', data);
                                router.push('/issues');
                            } catch (error) {
                                setError('An Unexpected error occurred, Kindly Try Again.');
                            }
                        }
                    )}>
                <Heading className='py-4'>Create a new issue</Heading>
                <div className='space-y-5'>
                    <TextField.Root>
                        <TextField.Input placeholder="Title" {...register('title')} />
                    </TextField.Root>
                    {errors.title && <Text color='red' as='p'>Title: {errors.title.message}</Text>}
                    <Controller name='description' control={control} render={({ field }) =>
                        <SimpleMDE placeholder='Description' {...field} />} />
                    {errors.description && <Text color='red' as='p'>Description :{errors.description.message}</Text>}
                    <Button>
                        Submit
                        <FaArrowRight />
                    </Button>
                </div>
            </form>
        </div>

    )
}

export default CreateNewIssue;