import { useState } from "react"


export default function AddShow ({setShows}) {
    const [title, setTitle] = useState ('');
    const [poster, setPoster] = useState('');
    const [seasons, setSeasons] = useState('');

    const handleAddShows = (e) => {
        e.preventDefault();

        const token = localStorage.getItem("token") // Get our jwt from localStorage

        fetch("https://tv-shows-api-bv.web.app/shows",{
        method: "POST",
        headers: {"Content-Type": 'application/json',
        "Authorization": token,
        },
        body: JSON.stringify({title, poster, seasons})
        })
        .then(resp => resp.json())
        .then(data => {
            if(data.message){
                alert(data.message)
            return
        }
        setShows(data)
        })
        .catch(alert)


    }

return(
<>
<h2>Add shows</h2>
<form onSubmit={handleAddShows}> 
  <label htmlForm="title">Tittle
<input
type="text"
value={title}
onChange={(e) => {setTitle(e.target.value)}} />
</label>
<br />
<label htmlForm="poster">Poster
    <input
    type="text"
    value={poster}
    onChange={ (e) => {setPoster(e.target.value)}} />
    </label>
    <br />
<label htmlForm="Seasons"> Seasons
    <input
    type="text"
    value={seasons}
    onChange={ (e) => {setSeasons(e.target.value)}} />

</label>

<br />

<input type="submit" value="Add Show" />
</form>
</>
 )
}