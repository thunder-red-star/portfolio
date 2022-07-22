import React from 'react';

const NotFound: React.FC = () => {
    <div>
        <h1>404</h1><p>You have reached a page that doesn't exist (yet). Would you like to go back?</p>
        <button onClick={() => window.history.back()}>Go back</button>
    </div>
};

export default NotFound;
