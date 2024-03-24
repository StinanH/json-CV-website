import { useEffect, useState } from "react";
import Spinner from 'react-bootstrap/Spinner';

export default function Projects(){

    const [user, setUser] = useState([])
    const [isPending, setIsPending] = useState(true)

    const fetchRepos = () => {
        fetch(`https://api.github.com/users/StinanH/repos`)
        .then((response) => (response.json()))
        .then((data) => {
            console.log(data);
            setUser(data);
            setIsPending(false);
        })
    }

    useEffect(() => {
        fetchRepos()
    }, [])



    const userElements = user.map((userElement) => {
        return(
            <article className="info" key={userElement.id}>
                <h1 className="repo-name">{userElement.name}</h1>
                <p>Language : {userElement.language === null ? "none" : userElement.language}</p>
                <p>Visibility : {userElement.visibility}</p>
                <h3><a href={userElement.html_url}><i className="fa-brands fa-github"></i> View project</a></h3>
            </article>
        )
    })

    return(
        <main>
            <section>
                {
                    isPending &&
                    <article>
                        <h1>Loading..</h1>
                        <Spinner animation="border" role="status">
                        <span className="visually-hidden">Loading...</span>
                        </Spinner>
                    </article>
                }
                {userElements}    
            </section>
        </main>
    )
}