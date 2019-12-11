import React from 'react';
import { Link } from 'react-router-dom';
import './frontPage.css';

function frontPage() {
    return (
        <div class='background'>
            <div class='middle-text'>
                <h1>Welcome to Cocktail Hour</h1>
                <Link to='/landingPage'>
                    <button class='button'>
                        <span>Come Have A Drink</span>
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default frontPage;