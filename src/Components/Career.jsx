import Info from "../assets/data.json"
import Educations from "./Educations"

export default function Career() {

    return(
        <main>
        <section>
            <article className="info">
            <h1>Education </h1>
            {   
                Info.education.map(edu => {
                return(
                <article key={edu.name}>
                    <h2>{edu.title}</h2>                    
                    <h3>{edu.school} </h3>
                    <h4>{edu.period}</h4>
                    <p>{edu.description}</p>
                </article>
            )})
            }
            </article>
            
            <article>
                <img src="https://images.pexels.com/photos/207732/pexels-photo-207732.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Stack of books"/>
            </article>
            
            <article className="info">
            <h1>Experience </h1>
            {
                Info.experience.map(exp => {
                return(
                <article key={exp.title}>
                    <h2>{exp.title}</h2>                    
                    <h3>{exp.wor} </h3>
                    <h4>{exp.period}</h4>
                    <p>{exp.description}</p>
                </article>
                )})
            }
            </article>
            
            
        </section>


        </main>
    )
}