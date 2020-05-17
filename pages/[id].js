import Head from 'next/head';
// import useSWR from 'swr'

const Design = ({ id }) => {
    // const { data, error } = useSWR('/api/user', fetch);
    return (
        <div>
            <Head>
                <title>{`${id} | Animal Crossing Custom Design Catalogue`}</title>
                <link rel="icon" href="/favicon.ico" />
                <meta name="description" content="Browse and save custom designs from both Animal Crossing: New Horizons and Animal Crossing: New Leaf, and submit your own to share with the world!" />
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <link href="https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600&display=swap" rel="stylesheet" />
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
