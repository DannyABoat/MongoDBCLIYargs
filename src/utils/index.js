exports.addMovie = async (collection, movieObj) => {
    await collection.insertOne({
      title: movieObj.title,
      actor: movieObj.actor,
    });
    console.log("Movie was added successfully")
  };
  
  exports.deleteMovie = async (collection, movieObj) => {
    await collection.deleteOne({
      id: movieObj._id
    });
    console.log("Movie was deleted successfully")
  };
  
  exports.deleteMany = async (collection, movieObj) => {
    if (movieObj.title) {
      await collection.deleteMany({title: movieObj.title});
    } else if (movieObj.actor) {
      await collection.deleteMany({actor: movieObj.actor});
    }
    console.log("Movies matching your criteria were deleted successfully")
  };

  exports.updateMovie = async (collection, key, filter, movieObj) => {
    await collection.updateOne({ [key]: filter }, { $set: {
      title: movieObj.title,
      actor: movieObj.actor
    }});
    console.log("Movie was updated successfully")
  };
  
  exports.getAllMovies = async (collection) => {
    const allMovies = await collection.find({}).toArray();
    console.log(allMovies)
  }
  