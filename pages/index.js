import Head from 'next/head';
import { useState } from 'react';
import { DebounceInput } from 'react-debounce-input';
import SearchIcon from '../images/svg/search-icon.svg';

import useRequest from '../utils/useRequest';
import DesignList from '../components/DesignList';

const Home = () => {
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('All');

  const { data, isValidating } = useRequest({
    url: '/api/get-designs',
    params: {
      category,
      search,
    }
  });

  const handleFavouriteDesign = (id) => {
    console.log('Favourite design id: ', id);
  };

  const designs = data ? data.designs : [];

  console.log('Active categ', category);

  return (
    <React.Fragment>
      <Head>
        <title>Animal Crossing Custom Design Catalogue</title>
        <meta name="description" content="Browse and save custom designs from both Animal Crossing: New Horizons and Animal Crossing: New Leaf, and submit your own to share with the world!" />
      </Head>

      <main>
        <header className="home__header">
          <div className="container">
            <h1 className="home__h1">Animal Crossing<br />Custom Design Catalogue</h1>
            <h2 className="home__h2">
              Browse and save custom designs from <br/>both AC: New Horizons and AC: New Leaf, or submit your own!
            </h2>
          </div>
        </header>

        <div className="container">
          <div className="search__container">
            <SearchIcon className="search__icon" />
            <DebounceInput
              className="search"
              minLength={2}
              debounceTimeout={300}
              placeholder="Search for designs"
              onChange={event => setSearch(event.target.value)} />
          </div>
        </div>
  
        <DesignList
          designs={designs}
          activeCategory={category}
          selectCategory={setCategory}
          favouriteDesign={handleFavouriteDesign}
          isLoading={isValidating} />
      </main>

    </React.Fragment>
  );
};

export default Home;
