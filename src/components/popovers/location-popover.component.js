import React from 'react';
import { Button, Popover, PopoverHeader, PopoverBody } from 'reactstrap';

export default class Example extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      popoverOpen: false
    };
  }

  toggle() {
    this.setState({
      popoverOpen: !this.state.popoverOpen
    });
  }

  render() {
    return (
      <div>
        <Button id="Popover1" type="button">
          Location:
        </Button>
        <Popover placement="bottom" isOpen={this.state.popoverOpen} target="Popover1" toggle={this.toggle}>
          <PopoverHeader>Enter:</PopoverHeader>
          <PopoverBody>
            <div>Africa</div>
            <div>Asia</div>
            <div>Central America</div>
            <div>Eastern Europe</div>
            <div>European Union</div>
            <div>Middle East</div>
            <div>North America</div>
            <div>Oceania</div>
            <div>South America</div>
            <div>The Caribbean</div>
          </PopoverBody>
        </Popover>
      </div>
    );
  }
}