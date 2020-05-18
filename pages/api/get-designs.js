import connectToDatabase from '../../utils/connectToDb';
import * as Categories from '../../constants/categories';

const getSubCategoriesFromCategory = (category) => {
  switch (category) {
    case Categories.All:
      return [
        Categories.Pattern,
        Categories.BrimmedHat,
        Categories.KnitCap,
        Categories.BrimmedCap,
        Categories.TankTop,
        Categories.ShortSleeveTee,
        Categories.LongSleeveTee,
        Categories.Sweater,
        Categories.Hoodie,
        Categories.Coat,
        Categories.RoundDress,
        Categories.BalloonHemDress,
        Categories.Robe,
        Categories.SleevelessDress,
        Categories.ShortSleeveDress,
        Categories.LongSleeveDress,
      ];
    case Categories.Patterns:
      return [
        Categories.Pattern,
      ];
    case Categories.Shirts:
      return [
        Categories.TankTop,
        Categories.ShortSleeveTee,
        Categories.LongSleeveTee,
        Categories.Sweater,
        Categories.Hoodie,
        Categories.Coat,
      ];
    case Categories.Dresses:
      return [
        Categories.RoundDress,
        Categories.BalloonHemDress,
        Categories.Robe,
        Categories.SleevelessDress,
        Categories.ShortSleeveDress,
        Categories.LongSleeveDress,
      ];
    case Categories.Hats:
      return [
        Categories.BrimmedHat,
        Categories.KnitCap,
        Categories.BrimmedCap,
      ];
    default:
      return [];
  };
};

// The main, exported, function of the endpoint,
// dealing with the request and subsequent response
module.exports = async (req, res) => {
  const { category = Categories.All, search = '' } = req.query;

  // Get a database connection, cached or otherwise,
  // using the connection string environment variable as the argument
  const db = await connectToDatabase(process.env.MONGODB_URI)

  // Select the "designs" collection from the database
  const collection = await db.collection('designs');

  const listOfTypes = getSubCategoriesFromCategory(category);

  // Select the users collection from the database
  const designs = await collection.find({
    name : new RegExp(search, 'i'),
    type: { $in: listOfTypes }
  }).toArray();

  // Respond with a JSON string of all users in the collection
  res.status(200).json({ designs })
}