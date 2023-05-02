import { useEffect } from "react"

export default function Home ( {shows, setShows} ) {

    useEffect(() =>{ // we call
        fetch('https://tv-shows-api-bv.web.app/shows')
        .then(resp => resp.json())
        .then(setShows)
        .catch(alert)
    },[],)

    return(
        <div class="main-container">
        <>
       {
        !shows
        ? "Loading..."
        : shows.map(
            (show) => (
                <div key={show.id}className="button-effect show-container"> 
                    <img src={show.poster} alt=""/>
                    <h2>{show.title}</h2>
                    <p>Seasons: {show.seasons}</p>
                </div>
                )
        )
       }

        </>
        </div>
    )
}