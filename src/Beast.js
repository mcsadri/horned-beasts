import React from 'react';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';

class Beast extends React.Component {
    render () {
        return (
            <Container>
                <Card style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Title>{this.props.title}</Card.Title>
                        <Card.Img
                            src={this.props.imageUrl}
                            alt={this.props.title}
                            title={this.props.title}
                        />
                        <Card.Text>{this.props.description}</Card.Text>
                    </Card.Body>
                </Card>
            </Container>            
        )
    }
}

export default Beast;
