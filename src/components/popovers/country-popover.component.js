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
          Country:
        </Button>
        <Popover placement="bottom" isOpen={this.state.popoverOpen} target="Popover1" toggle={this.toggle}>
          <PopoverHeader>Enter:</PopoverHeader>
          <PopoverBody>
            <div>Afghanistan</div>
            <div>Albania</div>
            <div>Algeria</div>
            <div>Andorra</div>
            <div>Angola</div>
            <div>Antigua and Barbuda</div>
            <div>Argentina</div>
            <div>Armenia</div>
            <div>Australia</div>
            <div>Austria</div>
            <div>Azerbaijan</div>
            <div>Bahamas</div>
            <div>Bahrain</div>
            <div>Bangladesh</div>
            <div>Barbados</div>
            <div>Belarus</div>
            <div>Belgium</div>
            <div>Belize</div>
            <div>Benin</div>
            <div>Bhutan</div>
            <div>Bolivia</div>
            <div>Bosnia and Herzegovina</div>
            <div>Botswana</div>
            <div>Brazil</div>
            <div>Brunei</div>
            <div>Bulgaria</div>
            <div>Burkina Faso</div>
            <div>Burundi</div>
            <div>Cote d'Ivoire</div>
            <div>Cabo</div>
            <div>Cambodia</div>
            <div>Cameroon</div>
            <div>Canada</div>
            <div>Central African Republic</div>
            <div>Chad</div>
            <div>Chile</div>
            <div>China</div>
            <div>Colombia</div>
            <div>Comoros</div>
            <div>Congo</div>
            <div>Costa Rica</div>
            <div>Croatia</div>
            <div>Cuba</div>
            <div>Cyprus</div>
            <div>Czechia</div>
            <div>Democratic Republic of the Congo</div>
            <div>Denmark</div>
            <div>Djibouti</div>
            <div>Dominica</div>
            <div>Dominican Republic</div>
            <div>Ecuador</div>
            <div>Egypt</div>
            <div>El Salvador</div>
            <div>Equatorial Guinea</div>
            <div>Eritrea</div>
            <div>Estonia</div>
            <div>Ethiopia</div>
            <div>Fiji</div>
            <div>Finland</div>
            <div>France</div>
            <div>Gabon</div>
            <div>Gambia</div>
            <div>Georgia</div>
            <div>Germany</div>
            <div>Ghana</div>
            <div>Greece</div>
            <div>Grenada</div>
            <div>Guatemala</div>
            <div>Guinea</div>
            <div>Guinea-Bissau</div>
            <div>Guayana</div>
            <div>Haiti</div>
            <div>Holy See</div>
            <div>Honduras</div>
            <div>Hungary</div>
            <div>Iceland</div>
            <div>India</div>
            <div>Indonesia</div>
            <div>Iran</div>
            <div>Iraq</div>
            <div>Ireland</div>
            <div>Israel</div>
            <div>Italy</div>
            <div>Jamaica</div>
            <div>Japan</div>
            <div>Jordan</div>
            <div>Kazakhstan</div>
            <div>Kenya</div>
            <div>Kiribati</div>
            <div>Kuwait</div>
            <div>Kyrgyzstan</div>
            <div>Laos</div>
            <div>Latvia</div>
            <div>Lebanon</div>
            <div>Lesotho</div>
            <div>Liberia</div>
            <div>Libya</div>
            <div>Liechtenstein</div>
            <div>Lithuania</div>
            <div>Luxembourg</div>
            <div>Madagascar</div>
            <div>Malawi</div>
            <div>Malaysia</div>
            <div>Maldives</div>
            <div>Mali</div>
            <div>Malta</div>
            <div>Marshall Islands</div>
            <div>Mauritania</div>
            <div>Mauritus</div>
            <div>Mexico</div>
            <div>Micronesia</div>
            <div>Moldova</div>
            <div>Monaco</div>
            <div>Mongolia</div>
            <div>Montenegro</div>
            <div>Morocco</div>
            <div>Mozambique</div>
            <div>Myanmar</div>
            <div>Namibia</div>
            <div>Nauru</div>
            <div>Nepal</div>
            <div>Netherlands</div>
            <div>New Zealand</div>
            <div>Nicaragua</div>
            <div>Niger</div>
            <div>Nigeria</div>
            <div>North Korea</div>
            <div>North Madeconia</div>
            <div>Norway</div>
            <div>Oman</div>
            <div>Pakistan</div>
            <div>Palau</div>
            <div>Palestine</div>
            <div>Panama</div>
            <div>Papua New Guinea</div>
            <div>Paraguay</div>
            <div>Peru</div>
            <div>Philippines</div>
            <div>Poland</div>
            <div>Portugal</div>
            <div>Qatar</div>
            <div>Romania</div>
            <div>Russia</div>
            <div>Rwanda</div>
            <div>Saint Kitts and Nevis</div>
            <div>Saint Lucia</div>
            <div>Saint Vincent and the Grenadines</div>
            <div>Samoa</div>
            <div>San Marino</div>
            <div>Sao Tome and Principe</div>
            <div>Saudi Arabia</div>
            <div>Senegal</div>
            <div>Serbia</div>
            <div>Seychelles</div>
            <div>Sierra Leone</div>
            <div>Singapore</div>
            <div>Slovakia</div>
            <div>Slovenia</div>
            <div>Solomon Islands</div>
            <div>Somalia</div>
            <div>South Africa</div>
            <div>South Korea</div>
            <div>South Sudan</div>
            <div>Spain</div>
            <div>Sri Lanka</div>
            <div>Sudan</div>
            <div>Suriname</div>
            <div>Swaziland</div>
            <div>Sweden</div>
            <div>Switzerland</div>
            <div>Syria</div>
            <div>Tajikistan</div>
            <div>Tanzania</div>
            <div>Thailand</div>
            <div>Timor-Leste</div>
            <div>Togo</div>
            <div>Tonga</div>
            <div>Trinidad and Tobago</div>
            <div>Tunisia</div>
            <div>Turkey</div>
            <div>Turkmenistan</div>
            <div>Tuvalu</div>
            <div>Uganda</div>
            <div>Ukraine</div>
            <div>United Arab Emirates</div>
            <div>United Kingdom</div>
            <div>United States</div>
            <div>Uruguay</div>
            <div>Uzbekistan</div>
            <div>Vanuatu</div>
            <div>Venezuela</div>
            <div>Vietnam</div>
            <div>Yemen</div>
            <div>Zambia</div>
            <div>Zimbabwe</div>
          </PopoverBody>
        </Popover>
      </div>
    );
  }
}