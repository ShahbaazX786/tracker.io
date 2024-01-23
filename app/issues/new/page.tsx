"use client"

import React from 'react'
import { FaArrowRight } from "react-icons/fa";

import { Button, Heading, TextField } from "@radix-ui/themes";
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";


const createNewIssue = () => {
    return (
        <div className="max-w-2xl h-full border mx-auto my-auto mt-5 p-6 rounded-md shadow-md">
            <Heading className='py-4'>Create a new issue</Heading>
            <div className='space-y-5'>
                <TextField.Root>
                    <TextField.Input placeholder="Title" />
                </TextField.Root>
                <SimpleMDE placeholder='Description' />
                <Button>
                    Submit
                    <FaArrowRight />
                </Button>
            </div>
        </div>
    )
}

export default createNewIssue