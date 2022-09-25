import React from 'react';
import Beast from './Beast';
import Row from 'react-bootstrap/Row';

class Main extends React.Component {
    render () {
        return (
            <>
                <Row xs={1} sm={1} md={2} lg={3} xl={4} xxl={5}>
                    {this.props.beasts.map(beast => 
                        <Beast
                            title={beast.title}
                            imageUrl={beast.image_url}
                            description={beast.description}
                        />
                    )}
                </Row>
            </>
        );
    }
}

export default Main;
