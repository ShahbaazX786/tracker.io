"use client"

import React from 'react'
import { FaArrowRight } from "react-icons/fa";

import { Button, Heading, TextField } from "@radix-ui/themes";
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import { useForm, Controller } from 'react-hook-form';
import axios from "axios";
import { useRouter } from 'next/navigation';
interface IssueForm {
    title: string;
    description: string;
}

const CreateNewIssue = () => {
    const router = useRouter();
    const { register, control, handleSubmit } = useForm<IssueForm>();

    return (
        <form
            className="max-w-2xl h-full border mx-auto my-auto mt-5 p-6 rounded-md shadow-md"
            onSubmit={
                handleSubmit(
                    async (data) => {
                        await axios.post('/api/issues', data);
                        router.push('/issues');
                    }
                )}>
            <Heading className='py-4'>Create a new issue</Heading>
            <div className='space-y-5'>
                <TextField.Root>
                    <TextField.Input placeholder="Title" {...register('title')} />
                </TextField.Root>
                <Controller name='description' control={control} render={({ field }) =>
                    <SimpleMDE placeholder='Description' {...field} />} />
                <Button>
                    Submit
                    <FaArrowRight />
                </Button>
            </div>
        </form>
    )
}

export default CreateNewIssue;