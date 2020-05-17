import Head from 'next/head';

const Home = () => (
  <div>
    <Head>
      <title>Animal Crossing Custom Design Catalogue</title>
      <link rel="icon" href="/favicon.ico" />
      <meta name="description" content="Browse and save custom designs from both Animal Crossing: New Horizons and Animal Crossing: New Leaf, and submit your own to share with the world!" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link href="https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600&display=swap" rel="stylesheet" />
    </Head>

    <main>
      <header className="home__header">
        <div className="container">
          <h1 className="home__h1">Animal Crossing<br/>Custom Design Catalogue</h1>
          <h2 className="home__h2">
            Browse and save custom designs from both AC: New Horizons and AC: New Leaf, or submit your own!
          </h2>
        </div>
      </header>

    </main> 

  </div>
);

export default Home;
