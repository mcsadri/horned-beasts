import React from 'react';
import data from './data.json'
import Beast from './Beast';

class Main extends React.Component {
    render () {
        return (
            <>
                {/* map() solution derived from http://www.hackingwithreact.com/read/1/13/rendering-an-array-of-data-with-map-and-jsx */}
                {data.map(beast => 
                    <Beast
                        title={beast.title}
                        imageUrl={beast.image_url}
                        description={beast.description}
                    />
                )}
            </>
        )
    }
}

export default Main;
