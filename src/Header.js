import React from 'react';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';

class Header extends React.Component {

    render () {
        return (
            <>
                <h1>Beasts of the Horned Variety</h1>

                <Container>
                    <Form>
                        <Form.Group controlId="hornForm">
                            <Form.Label>Which beasts do you want to see?</Form.Label>
                            <Form.Select
                                onChange={this.props.selectHorns}>
                                <option value="-1">Show all beasts</option>
                                <option value="0">Show beasts with 0 horns</option>
                                <option value="1">Show beasts with 1 horn</option>
                                <option value="2">Show beasts with 2 horns</option>
                                <option value="3">Show beasts with 3 horns</option>
                                <option value="100">Show beasts with {'>'} 3 horns</option>
                            </Form.Select>
                        </Form.Group>
                    </Form>
                </Container>
            </>
        )
    }
}

export default Header;
