import prisma from '@/prisma/client';
import dynamic from 'next/dynamic';
import { notFound } from 'next/navigation';
import IssueFormSkeleton from './loading';

// dynamic import of component & disabling ssr for this component & loading a custom loading page by bypassing orignal one.
const IssueForm = dynamic(
    () => import('@/app/issues/_components/IssueForm'),
    { ssr: false, loading: () => <IssueFormSkeleton /> }
);

interface Props {
    params: { id: string }
}

const EditIssuePage = async ({ params }: Props) => {
    const issue = await prisma.issue.findUnique({
        where: { id: parseInt(params.id) }
    });

    if (!issue) notFound();

    return (
        <IssueForm issue={issue} />
    )
}

export default EditIssuePage;