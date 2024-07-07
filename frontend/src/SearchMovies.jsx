import { useState } from "react"

function SearchMovies(){
    const [movieTitle, setMovieTitle] = useState('')

    const searchMovie = async (e) => {
        e.preventDefault()
        const url = `https://www.omdbapi.com/?apikey=a2af4a6&t=${movieTitle}`
        
        try {
            const response = await fetch(url)
            const data = await response.json()
            console.log(data)

        } catch(err){
            console.log(err)
        }
    }
    return (
        <div>
            <form onSubmit={searchMovie}>
                <label htmlFor='query'>Movie Title</label>
                <input
                type='text'
                name='query'
                value={movieTitle}
                onChange={(e) => setMovieTitle(e.target.value)}
                placeholder="Enter a movie title"
                role='search'
                />
                <button type='submit'>Search Movie</button>
            </form>
        </div>
    )
}

export default SearchMovies