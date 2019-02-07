import React from "react";

import {SteamChart, SpotifyChart} from "./../../components/Charts";

import "./Home.css";
const Home = () => {
    return(
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <h1>About Me</h1>
                    <hr></hr>
                    <p>
                        My name is Chris Unsell and I am a web developer from Lawrence, KS. 
                        I studied Computer Science at the University of Kansas and attended their bootcamp on full stack web develpment. 
                        I completed the bootcamp in October of 2018 and I am continuing my BS with Western Governors Universities‘ software development course.
                    </p>
                    <p>
                        At KU I primarily worked with C++ and at KU‘s bootcamp I became an expert with JavaScript and several appropriate frameworks.
                        At WGU I am on their Java programming path. The course is preparing me to develop enterprise level apps.
                        I am also studying networking to help build my understanding of web hosting solutions. 
                    </p>
                    <p>
                        In December of 2018 I started working for HedgeApple Inc. 
                        I work with a small team that manages and improves several large scale ecommerce sites including 
                        <a href="https://hedgeapple.com/">HedgeApple</a>
                        and
                        <a href="https://plushrugs.com/">PlushRugs</a>
                        .
                        HedgeApple‘s sites are build with Django in a python 3 environment. 
                        In additon to managing the Django sites I write python scripts that load inventory and specifation spreadsheets into our databases for products from dozens of different manufacturers.
                    </p>
                    <p>
                        My ideal work environment is a small to medium sized office with a casual feel. 
                        I get along well with all kinds of people and I am not picky about my coworkers. I try to break the stereotype of the lonewolf developer and enjoy having friends at work.
                        All I really need to thrive is a friendly office culture and a steady stream of interesting and challenging tasks to overcome.
                    </p>
                    <p>
                        In my free time I enjoy riding my bike around Lawrence and cooking. 
                        I also have a small but growing collection of board games and a large collection of Warhammer 40K units.
                        When I have the time I am an avid PC gamer. I linked my steam stats below with the steam API if you are curious.
                        I also couldn‘t live without my spotify account and I love being able to listen to music while I work. I also linked my spotify user data with the spotify API below.
                        I do have a presence on most social media platforms but I rarely use them so please contact me through the contact me page linked above.
                    </p>
                </div>
            </div>
            <div className="row">
                <div className="col-12 col-md-6">
                    <SteamChart/>
                </div>
                <div className="col-12 col-md-6">
                    <SpotifyChart/>
                </div>
            </div>
        </div>
    );
};
export default Home;