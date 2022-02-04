const yargs = require("yargs");
const { client, connection } = require("./db/connection");
const { addMovie, deleteMovie, deleteMany, updateMovie, getAllMovies } = require("./utils");

const app = async (yargsObj) => {
  try {
    const collection = await connection();
    if (yargsObj.add) {
      await addMovie(collection, yargsObj);
    } else if (yargsObj.delete) {
      await deleteMovie(collection, yargsObj);
    } else if (yargsObj.deleteMany) {
      await deleteMany(collection, yargsObj);
    } else if (yargsObj.update) {
      await addMovie(collection, yargsObj);
      await updateMovie(collection, yargsObj.key, yargsObj.filter);
    } else if (yargsObj.getAll) {
      await getAllMovies(collection);
    }
    
    else {
      console.log("Incorrect command");
    }
  } 
    finally {
      await client.close();
  }
};

app(yargs.argv);