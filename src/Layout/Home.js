import React from "react";
import { Link } from "react-router-dom";
import ListDecks from "./ListDecks";



function Home() {
    return (
        <div>
            <Link to = "/decks/new" type="button" className="btn btn-secondary btn-lg">
                + Create Deck
            </Link>
            <ListDecks /> 
        </div>
    );
}
export default Home;