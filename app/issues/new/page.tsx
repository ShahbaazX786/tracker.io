"use client"

import React from 'react'
import { FaArrowRight } from "react-icons/fa";

import { Button, Heading, TextArea, TextField } from "@radix-ui/themes"

const createNewIssue = () => {
    return (
        <div className="max-w-2xl h-full border mx-auto mt-10 p-6 rounded-md shadow-md" title='create'>
            <Heading className='py-4'>Create a new issue</Heading>
            <div className='space-y-5'>
                <TextField.Root>
                    <TextField.Input placeholder="Title" />
                </TextField.Root>
                <TextArea placeholder="Description" rows={8} />
                <Button>
                    Submit
                    <FaArrowRight />
                </Button>
            </div>
        </div>
    )
}

export default createNewIssue