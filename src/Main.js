import React from 'react';
import Beast from './Beast';
import Row from 'react-bootstrap/Row';

class Main extends React.Component {
    render () {
        return (
            <Row xs={1} sm={1} md={2} lg={3} xl={4} xxl={5}>
                {this.props.beasts.map((beast, index) => 
                    <Beast
                        key={beast._id}
                        id={beast._id}
                        title={beast.title}
                        imageUrl={beast.image_url}
                        description={beast.description}
                        handleOpen={this.props.handleOpen}
                        handleClose={this.props.handleClose}
                    />
                )}
            </Row>
        );
    }
}

export default Main;
