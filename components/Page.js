import Head from 'next/head';
import Title from './title';

export default function Page({ title, children }) {
    return (
        <>
            <Head>
                <title>
                    {title}- Next Shop
                </title>
            </Head>
            <main className='p-2'>
                <Title > {title}</Title>
                {children}
            </main>
        </>
    )
}