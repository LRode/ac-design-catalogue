import Head from 'next/head';
// import useSWR from 'swr'

const Design = ({ id }) => {
    // const { data, error } = useSWR('/api/user', fetch);
    return (
        <div>
            <Head>
                <title>{`Animal Crossing Custom Design Catalogue`}</title>
            </Head>

            <main>
                <h1>Design Page</h1>
                <p>{`Id: ${id}`}</p>
            </main>

        </div>
    );
};

Design.getInitialProps = async ({ query }) => {
    return { id: query.id };
}

export default Design;
