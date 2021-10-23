import React from "react";

const Footer = () => {

    const repo = "https://github.com/davidvdev/portfolio-site"

    return(
        <footer>
            <p>(C) David Vogel | Site made by David Vogel | <a href={repo} target="_blank" rel="noreferrer">See the repo!</a></p>
        </footer>
    )
}

export default Footer