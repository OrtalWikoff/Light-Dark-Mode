import React from "react"
import "../App.css"

export default function Main(props) {
    return (
        <main className={props.darkMode ? "dark" : ""}>
            <h1 className="main--title">Fun facts about Me:</h1>
            <ul className="main--facts">
                <li>I was born in Israel in 1978</li>
                <li>I have two girls</li>
                <li>I have a dog and a bird</li>
                <li>I love coding</li>
                <li>I love playing basketball</li>
            </ul>
        </main>
    )
}