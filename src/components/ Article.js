import React, { useState } from 'react'

var a, b, c, d, e, f, g, h, i, j, k, l;


async function Get_data()
{
    fetch("https://newsapi.org/v2/everything?q=Apple&from=2021-07-06&sortBy=popularity&apiKey=75ce1772e15f472da87339ca6d3f2bb4")
    .then(data => data.json())
    .then(data =>
    {
        console.log(data);
        a = data.articles[0].title;
        b = data.articles[1].title;
        c = data.articles[2].title;
        d = data.articles[3].title;
        e = data.articles[4].title;
        f = data.articles[5].title;
        g = data.articles[6].title;
        h = data.articles[7].title;
        i = data.articles[8].title;
        j = data.articles[9].title;
        k = data.articles[10].title;
        l = data.articles[11].title;
    })   
};

Get_data()

function Article ()
{    
    return (
        <div className="Big_Wrapper">
            <header className="top_header">Welcome to the page</header>
            <nav className="top_menu">
                <ul className="navigation">
                    <button>Back</button>
                    <button>Home</button>
                    <button>Create Article</button>
                    {/* <button onClick={Logout}>Logout</button> */}
                </ul>
            </nav>
            <div className="list">
                Articles :-
                <ol>
                    <button className="first" dangerouslySetInnerHTML={{__html: a}}></button><br></br>
                    <button className="second" dangerouslySetInnerHTML={{__html: b}}></button><br></br>
                    <button className="third" dangerouslySetInnerHTML={{__html: c}}></button><br></br>
                    <button className="fourth" dangerouslySetInnerHTML={{__html: d}}></button><br></br>
                    <button className="six" dangerouslySetInnerHTML={{__html: e}}></button><br></br>
                    <button className="seven" dangerouslySetInnerHTML={{__html: f}}></button><br></br>
                    <button className="eight" dangerouslySetInnerHTML={{__html: g}}></button><br></br>
                    <button className="nine" dangerouslySetInnerHTML={{__html: h}}></button><br></br>
                    <button className="ten" dangerouslySetInnerHTML={{__html: i}}></button><br></br>
                    <button className="elven" dangerouslySetInnerHTML={{__html: j}}></button><br></br>
                    <button className="twele" dangerouslySetInnerHTML={{__html: k}}></button><br></br>
                    <button className="thr" dangerouslySetInnerHTML={{__html: l}}></button><br></br>
                </ol>
                    
            </div>
        </div>
    
    )
}


export default  Article
