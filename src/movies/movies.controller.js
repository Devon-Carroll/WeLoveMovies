const moviesService = require("./movies.service");

async function movieExists(req, res, next) {
  const movie = await moviesService.read(req.params.movieId);
  if(movie) {
    res.locals.movie = movie;
    return next();
  }
  next({ status: 404, message: "Movie cannot be found."})
}


async function list(req, res){
  const data = await moviesService.list();
  res.json({ data });
}

function read(req, res, next) {
  const { movie: data } = res.locals;
  res.json({ data })
}

async function listTheaterMovies(req, res) {
  const data = await service.listTheaterMovies();
  res.json({ data })
}






module.exports = {
  list,
  read: [movieExists, read],
  listTheaterMovies,
}