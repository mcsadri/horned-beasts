import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

class Beast extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            count: 0
        };
    };

    handleFavorite = () => {
        this.setState({count: this.state.count + 1});
    };  

    render () {
        return (
            <Col>
                <Card className="h-100">
                    <Card.Body>
                        <Card.Title>{this.props.title}</Card.Title>
                        <Card.Img
                            id={this.props.id}
                            src={this.props.imageUrl}
                            alt={this.props.title}
                            title={this.props.title}
                        />
                        <Card.Text>{this.props.description}</Card.Text>
                        <Card.Text>⭐ = {this.state.count}</Card.Text>
                        <div className="d-grid gap-2">
                            <Button
                                onClick={this.handleFavorite}
                                variant="outline-primary"
                                size="sm">
                                ⭐ this beast!
                            </Button>
                            <Button
                                onClick={() => this.props.handleOpen(this.props.id)}
                                variant="outline-primary"
                                size="sm">
                                Embiggen!
                            </Button>
                        </div>
                    </Card.Body>
                </Card>
            </Col>            
        );
    }
}

export default Beast;
