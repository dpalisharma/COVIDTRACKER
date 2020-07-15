import React from 'react'

const About = () => {
    return (
        <div className="container margin center">
            <div className="card-panel">
                <h5 className=" aboutbold black-text ">COVID-19 Tracker Web Application</h5>
                <p className="">Made using ReactJS, Charts.js and styled by Materialize CSS</p>
                <h6 className=" aboutbold grey-text ">Links to the API used</h6>
                <a href="https://api.rootnet.in/covid19-in/stats/latest" className="black-text left-align">Data for India</a> <br/>
                <a href="https://covid19.mathdro.id/api" className="black-text left-align">Global Data</a>
                <h6 className=" aboutbold grey-text ">Created by</h6>
                <a href="https://www.linkedin.com/in/dpali/" className="black-text left-align">Deepali Sharma</a> <br/>
            </div>
        </div>
    )
}

export default About
