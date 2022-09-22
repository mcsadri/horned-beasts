import React from 'react';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';

class Beast extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
    }

    handleClick = () => {
        this.setState({count: this.state.count + 1});
    }

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
                            onClick={this.handleClick}
                        />
                        <Card.Text>{this.props.description}</Card.Text>
                        <Card.Text>❤ = {this.state.count}</Card.Text>
                    </Card.Body>
                </Card>
            </Container>            
        )
    }
}

export default Beast;
