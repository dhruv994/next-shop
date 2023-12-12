import Head from 'next/head';
import Title from './title';
import NavBar from './NavBar';

export default function Page({ title, children }) {
    return (
        <>
            <Head>
                <title>
                    {title}- Next Shop
                </title>
            </Head>
            <header>
                <NavBar></NavBar>
            </header>
            <main className='p-2'>
                <Title > {title}</Title>
                {children}
            </main>
        </>
    )
}