import React, { Component } from 'react';
import { Segment, Form, TextArea } from 'semantic-ui-react';

/* Extended react.Component class as ExplorerQuery */
export default class ExplorerQuery extends Component {

    constructor(props) {
        super(props);

        this.state = {
            key: false,
            error: false,
            errorMessage: '',
            quer: {}
        };
        this.handleInput = this.handleInput.bind(this);
    }

    handleInput(e, {value}){
        this.setState({quer: JSON.parse(value)});
        this.props.queryUpdate(this.state.quer);
    }

    render() {

        return (
            <Segment style={styles.body}>

                <Form>
                    <TextArea autoHeight style={styles.textArea} onChange={this.handleInput} value={JSON.stringify(this.props.query)} />
                </Form>

            </Segment>
        );

    }
}

const styles = {
    body: {
        backgroundColor: '#F6F7F9',
        minHeight: "100%"
    },
    textArea: {
        minHeight: 500,
        backgroundColor: '#F6F7F9',
        fontSize: '16px',
        color: "#626364",
        border: 'none'
    }
};

default values which can be changed

const query = {
    "appliances": {
        "appliance":"Water heater",
        "type":"instantaneous",
        "region":"India",
        "quantity":1,
        "runnning_time":3
    },
    "emissions": {
        "item": "electricity",
        "region": "india",
        "unit": "kWh",
        "quantity": 1.564
    },
    "poultry": {
        "type":"Broiler chicken",
        "region":"British columbia",
        "quantity":3
    },
    "quantity": {
        "item": "lamp",
        "region": "ohio",
        "emission": 91
    },
    "flight": {
        "origin": "DEL",
        "destination": "JFK",
        "type": "international",
        "model": "A380",
        "passengers": 840
    },
    "vehicle": {
        "type": "Petrol",
        "origin": "Bhubaneswar",
        "destination": "Cuttack",
        "mileage": 50,
        "mileage_unit": "km/l"
    },
    "trains": {
        "type":"railcars",
        "origin":"Bhubaneswar",
        "destination":"Delhi",
        "passengers":10
    }
}