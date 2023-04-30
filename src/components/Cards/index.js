import { Link } from "react-router-dom";
import axios from "axios";
import InputContext from "../../context/InputContext";
import { useContext, useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Navbar from "../Navbar";

function Cards() {
  const { searchValue } = useContext(InputContext); //searchValue is the value of the input
  const [page, setPage] = useState(1); //page is the page number
  const [starships, setStarships] = useState([]); //starships is the array of starships
  const { //useQuery is a react-query hook that fetches data from an API
    isLoading, //isLoading is a boolean that is true when the query is loading
    isError, //isError is a boolean that is true when the query failed
    data = { results: [], next: null }, //data is the data returned from the API
    error, //error is the error returned from the API
  } = useQuery(["starships", searchValue, page], () => { 
    const searchQuery = searchValue ? `&search=${searchValue}` : ""; 
    return axios( 
      `https://swapi.dev/api/starships/?page=${page}${searchQuery}` //axios is a library that makes HTTP requests
    ).then((res) => res.data); //res is the response from the API
  }); 

  useEffect(() => { //useEffect is a react hook that runs a function when the component mounts
    setPage(1); 
    setStarships([]);  
  }, [searchValue]); 

  useEffect(() => {  
    if (data.results && data.results.length > 0) {   
      setStarships((prevStarships) => [...prevStarships, ...data.results]); 
    }
  }, [data.results]);

  const loadMore = (event) => { 
    event.preventDefault(); 
    if (!isEndOfStarships) {
      setPage((prevPage) => prevPage + 1);
      window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
    }
  };

  const isEndOfStarships = !data.next;
  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>{error.message}</div>;
  
  return (
    <div>
      <Navbar />
      <Container>
        <Row style={{ display: "flex", flexWrap: "wrap" }}>
          {starships.map((starship) => (
            <Col md={3} key={starship.name} style={{ marginBottom: "20px" }}>
              <Link
                to={`/CardDetails/${starship.name}`}
                state={starship}
                className="link"
              >
                <div className="card">
                  <img
                    className="card-image"
                    src="./spaceship.png "
                    alt="spaceship"
                  />
                  <div className="card-body">
                    <h2 className="card-title">{starship.name}</h2>
                    <p className="card-description">Model: {starship.model}</p>
                    <p className="card-description">
                      Hyperdrive Rating: {starship.hyperdrive_rating}
                    </p>
                  </div>
                </div>
              </Link>
            </Col>
          ))}
        </Row>
      </Container>

      <button
        className="loadmore"
        disabled={isEndOfStarships}
        onClick={loadMore}
      >
        {isEndOfStarships ? "End of Starships" : "Load More"}
      </button>
    </div>
  );
}

export default Cards;
