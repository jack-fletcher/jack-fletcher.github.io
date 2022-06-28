import React, {useState, useEffect } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faGithub,faLinkedin } from '@fortawesome/free-brands-svg-icons';
export default function GithubData() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);
    const [colours, setColours] = useState([]);
    // Note: the empty deps array [] means
    // this useEffect will run once
    // similar to componentDidMount()
    useEffect(() => {
      fetch("https://api.github.com/users/jack-fletcher/repos?page=1")
        .then(res => res.json())
        .then(
          (result) => {
            setIsLoaded(true);
            setItems(result);
          },
          // Note: it's important to handle errors here
          // instead of a catch() block so that we don't swallow
          // exceptions from actual bugs in components.
          (error) => {
            setIsLoaded(true);
            setError(error);
          }
        )

        fetch("https://raw.githubusercontent.com/ozh/github-colors/master/colors.json")
        .then(res => res.json())
        .then(
          (result) => {
          setColours(result);
        });
    }, [])
  
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <Carousel className="Project-Carousel" showThumbs={false} infiniteLoop={true}>
          {items.map(item => (
            <div key={item.id} className="Project-Card">
              <h1 className="Project-Title">{item.name}</h1>
              <p className="Project-Description">{item.description}</p>
              <div className="Project-FlexRow">
              {item.language && <div className="Project-Bubble">
                 {colours[item.language] && <div className="Project-dot" style={{backgroundColor: colours[item.language].color}}>
                   </div>}<p>{item.language}</p></div> }
              {item.homepage && <a className="Project-Bubble" href={item.homepage} rel="noreferrer" target="_blank"> Home Page </a> }
              {item.licence && <p className="Project-Bubble">{item.licence}</p> }
              {item.html_url && <a className='Project-Bubble Project-GitHub' rel="noreferrer" target="_blank" href={item.html_url}><FontAwesomeIcon className="Project-GitHub-Img" icon={faGithub} size="3x" /></a> }
              </div>
            </div>
          ))}
        </Carousel>
      );
    }
  }