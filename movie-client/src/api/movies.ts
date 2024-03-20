import axios from "axios";


export const fetchAllMovies = async () => {
    
    try {
    const response = await axios.get("/api/v1/movies");
    return response.data
    } catch (error) {
        console.log(error)
    }
}

export const getMovieData = async (movieId :string) => {
    try 
    {
        const response = await axios.get(`/api/v1/movies/${movieId}`);

        const singleMovie = response.data;

        return singleMovie

    } 
    catch (error) 
    {
      console.error(error);
    }

  }


  export const addReview = async ({reviewBody, imdbId}: {reviewBody: string, imdbId: string}) =>{
    try{
        await axios.post("api/v1/review/create",{reviewBody, imdbId});

      } catch(err) {
          console.error(err);
      }

}
