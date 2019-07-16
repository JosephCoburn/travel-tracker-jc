import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import { Redirect } from 'react-router-dom';

import Navbar from "./components/navbar.component"
import VoyagesList from "./components/voyages-list.component";
import ViewVoyage from "./components/view-voyage.component";
import EditVoyage from "./components/edit-voyage.component";
import CreateVoyage from "./components/create-voyage.component";

import SortVoyage from "./components/sort/sort-voyage.component";
import SortVoyageDate from "./components/sort/sort-date.component";
import SortVoyageRegion from "./components/sort/sort-region.component";
import SortVoyageCountry from "./components/sort/sort-country.component";
import SortVoyageState from "./components/sort/sort-state.component";
import SortVoyageRating from "./components/sort/sort-rating.component";

import SortDateFuture from "./components/sort/date/date-future.component";
import SortDateNewest from "./components/sort/date/date-newest.component";
import SortDateOldest from "./components/sort/date/date-oldest.component";
import SortDatePast from "./components/sort/date/date-past.component";

import SortRegionAfrica from "./components/sort/region/africa.component";
import SortRegionAsia from "./components/sort/region/asia.component";
import SortRegionTheCaribbean from "./components/sort/region/the-caribbean.component";
import SortRegionCentralAmerica from "./components/sort/region/central-america.component";
import SortRegionEasternEurope from "./components/sort/region/eastern-europe.component";
import SortRegionEuropeanUnion from "./components/sort/region/european-union.component";
import SortRegionMiddleEast from "./components/sort/region/middle-east.component";
import SortRegionNorthAmerica from "./components/sort/region/north-america.component";
import SortRegionOceania from "./components/sort/region/oceania.component";
import SortRegionSouthAmerica from "./components/sort/region/south-america.component";

import SortRatingHighest from "./components/sort/rating/rating-highest.component";
import SortRatingLowest from "./components/sort/rating/rating-lowest.component";

import SortStateUSA from "./components/sort/state/sort-state-usa.component";
import SortStateCanada from "./components/sort/state/sort-state-canada.component";


import LoginPage from "./pages/LoginPage/LoginPage";
import SignupPage from "./pages/SignupPage/SignupPage";
import userService from './utils/userService';

import SortStateAlabama from './components/sort/state/usa/sort-alabama.component';
import SortStateAlaska from './components/sort/state/usa/sort-alaska.component';
import SortStateArizona from './components/sort/state/usa/sort-arizona.component';
import SortStateArkansas from './components/sort/state/usa/sort-arkansas.component';
import SortStateCalifornia from './components/sort/state/usa/sort-california.component';
import SortStateColorado from './components/sort/state/usa/sort-colorado.component';
import SortStateConnecticut from './components/sort/state/usa/sort-connecticut.component';
import SortStateDelaware from './components/sort/state/usa/sort-delaware.component';
import SortStateFlorida from './components/sort/state/usa/sort-florida.component';
import SortStateGeorgia from './components/sort/state/usa/sort-georgia.component';
import SortStateHawaii from './components/sort/state/usa/sort-hawaii.component';
import SortStateIdaho from './components/sort/state/usa/sort-idaho.component';
import SortStateIllinois from './components/sort/state/usa/sort-illinois.component';
import SortStateIndiana from './components/sort/state/usa/sort-indiana.component';
import SortStateIowa from './components/sort/state/usa/sort-iowa.component';
import SortStateKansas from './components/sort/state/usa/sort-kansas.component';
import SortStateKentucky from './components/sort/state/usa/sort-kentucky.component';
import SortStateLouisiana from './components/sort/state/usa/sort-louisana.component';
import SortStateMaine from './components/sort/state/usa/sort-maine.component';
import SortStateMaryland from './components/sort/state/usa/sort-maryland.component';
import SortStateMassachusetts from './components/sort/state/usa/sort-massachusetts.component';
import SortStateMichigan from './components/sort/state/usa/sort-michigan.component';
import SortStateMinnesota from './components/sort/state/usa/sort-minnesota.component';
import SortStateMississippi from './components/sort/state/usa/sort-mississippi.component';
import SortStateMissouri from './components/sort/state/usa/sort-missouri.component';
import SortStateMontana from './components/sort/state/usa/sort-montana.component';
import SortStateNebraska from './components/sort/state/usa/sort-nebraska.component';
import SortStateNevada from './components/sort/state/usa/sort-nevada.component';
import SortStateNewHampshire from './components/sort/state/usa/sort-new-hampshire.component';
import SortStateNewJersey from './components/sort/state/usa/sort-new-jersey.component';
import SortStateNewMexico from './components/sort/state/usa/sort-new-mexico.component';
import SortStateNewYork from './components/sort/state/usa/sort-new-york.component';
import SortStateNorthCarolina from './components/sort/state/usa/sort-north-carolina.component';
import SortStateNorthDakota from './components/sort/state/usa/sort-north-dakota.component';
import SortStateOhio from './components/sort/state/usa/sort-ohio.component';
import SortStateOklahoma from './components/sort/state/usa/sort-oklahoma.component';
import SortStateOregon from './components/sort/state/usa/sort-oregon.component';
import SortStatePennsylvania from './components/sort/state/usa/sort-pennsylvania.component';
import SortStateRhodeIsland from './components/sort/state/usa/sort-rhode-island.component';
import SortStateSouthCarolina from './components/sort/state/usa/sort-south-carolina.component';
import SortStateSouthDakota from './components/sort/state/usa/sort-south-dakota.component';
import SortStateTennessee from './components/sort/state/usa/sort-tennessee.component';
import SortStateTexas from './components/sort/state/usa/sort-texas.component';
import SortStateUtah from './components/sort/state/usa/sort-utah.component';
import SortStateVermont from './components/sort/state/usa/sort-vermont.component';
import SortStateVirginia from './components/sort/state/usa/sort-virginia.component';
import SortStateWashington from './components/sort/state/usa/sort-washington.component';
import SortStateWestVirginia from './components/sort/state/usa/sort-west-virginia.component';
import SortStateWisconsin from './components/sort/state/usa/sort-wisconsin.component';
import SortStateWyoming from './components/sort/state/usa/sort-wyoming.component';
import SortStateAlberta from './components/sort/state/canada/sort-alberta.component';
import SortStateBritishColumbia from './components/sort/state/canada/sort-british-columbia.component';
import SortStateManitoba from './components/sort/state/canada/sort-manitoba.component';
import SortStateNewBrunswick from './components/sort/state/canada/sort-new-brunswick.component';
import SortStateNewfoundland from './components/sort/state/canada/sort-newfoundland.component';
import SortStateNorthwestTerritories from './components/sort/state/canada/sort-northwest-territories.component';
import SortStateNovaScotia from './components/sort/state/canada/sort-nova-scotia.component';
import SortStateNunavut from './components/sort/state/canada/sort-nunavut.component';
import SortStateOntario from './components/sort/state/canada/sort-ontario.component';
import SortStatePrinceEdwardIsland from './components/sort/state/canada/sort-price-edward-island.component';
import SortStateQuebec from './components/sort/state/canada/sort-quebec.component';
import SortStateSaskatchewan from './components/sort/state/canada/sort-saskatchewan.component';
import SortStateYukon from './components/sort/state/canada/sort-yukon.component';
import SortCountryAfghanistan from './components/sort/country/sort-Afghanistan.component';
import SortCountryAlbania from './components/sort/country/sort-Albania.component';
import SortCountryAndorra from './components/sort/country/sort-Andorra.component';
import SortCountryAngola from './components/sort/country/sort-Angola.component';
import SortCountryAntigua from './components/sort/country/sort-Antigua-and-Barbuda.component';
import SortCountryArgentina from './components/sort/country/sort-Argentina.component';
import SortCountryAustralia from './components/sort/country/sort-Australia.component';
import SortCountryAzerbaijan from './components/sort/country/sort-Azerbaijan.component';
import SortCountryBahrain from './components/sort/country/sort-Bahrain.component';
import SortCountryBangladesh from './components/sort/country/sort-Bangladesh.component';
import SortCountryBarbados from './components/sort/country/sort-Barbados.component';
import SortCountryBelarus from './components/sort/country/sort-Belarus.component';
import SortCountryBelgium from './components/sort/country/sort-Belgium.component';
import SortCountryBelize from './components/sort/country/sort-Belize.component';
import SortCountryBenin from './components/sort/country/sort-Benin.component';
import SortCountryBhutan from './components/sort/country/sort-Bhutan.component';
import SortCountryBolivia from './components/sort/country/sort-Bolivia.component';
import SortCountryBosnia from './components/sort/country/sort-Bosnia-and-Herzegovina.component';
import SortCountryBotswana from './components/sort/country/sort-Botswana.component';
import SortCountryBrunei from './components/sort/country/sort-Brunei.component';
import SortCountryBulgaria from './components/sort/country/sort-Bulgaria.component';
import SortCountryBurkina from './components/sort/country/sort-Burkina-Faso.component';
import SortCountryBurundi from './components/sort/country/sort-Burundi.component';
import SortCountryCabo from './components/sort/country/sort-Cabo-Verde.component';
import SortCountryCambodia from './components/sort/country/sort-Cambodia.component';
import SortCountryCanada from './components/sort/country/sort-Canada.component';
import SortCountryCameroon from './components/sort/country/sort-Cameroon.component';
import SortCountryCentralAfricanRepublic from './components/sort/country/sort-Central-African-Republic.component';
import SortCountryChad from './components/sort/country/sort-Chad.component';
import SortCountryChile from './components/sort/country/sort-Chile.component';
import SortCountryChina from './components/sort/country/sort-China.component';
import SortCountryColombia from './components/sort/country/sort-Colombia.component';
import SortCountryComoros from './components/sort/country/sort-Comoros.component';
import SortCountryCongo from './components/sort/country/sort-Congo.component';
import SortCountryCostaRica from './components/sort/country/sort-Costa-Rica.component';
import SortCountryCote from './components/sort/country/sort-Cote-Ivoire.component';
import SortCountryCroatia from './components/sort/country/sort-Croatia.component';
import SortCountryCuba from './components/sort/country/sort-Cuba.component';
import SortCountryCyprus from './components/sort/country/sort-Cyprus.component';
import SortCountryCzechia from './components/sort/country/sort-Czechia.component';
import SortCountryDRCongo from './components/sort/country/sort-Democratic-Republic-Congo.component';
import SortCountryDenmark from './components/sort/country/sort-Denmark.component';
import SortCountryDjibouti from './components/sort/country/sort-Djibouti.component';
import SortCountryDominica from './components/sort/country/sort-Dominica.component';
import SortCountryDR from './components/sort/country/sort-Dominican-Republic.component';
import SortCountryEcuador from './components/sort/country/sort-Ecuador.component';
import SortCountryEgypt from './components/sort/country/sort-Egypt.component';
import SortCountryElSalvador from './components/sort/country/sort-El-Salvador.component';
import SortCountryEqGuinea from './components/sort/country/sort-Equatorial-Guinea.component';
import SortCountryEritrea from './components/sort/country/sort-Eritrea.component';
import SortCountryEstonia from './components/sort/country/sort-Estonia.component';
import SortCountryEthiopia from './components/sort/country/sort-Ethiopia.component';
import SortCountryFiji from './components/sort/country/sort-Fiji.component';
import SortCountryFrance from './components/sort/country/sort-France.component';
import SortCountryGabon from './components/sort/country/sort-Gabon.component';
import SortCountryGambia from './components/sort/country/sort-Gambia.component';
import SortCountryGeorgia from './components/sort/country/sort-Georgia.component';
import SortCountryGermany from './components/sort/country/sort-Germany.component';
import SortCountryGhana from './components/sort/country/sort-Ghana.component';
import SortCountryGreece from './components/sort/country/sort-Greece.component';
import SortCountryGrenada from './components/sort/country/sort-Grenada.component';
import SortCountryGuatemala from './components/sort/country/sort-Guatemala.component';
import SortCountryGuayana from './components/sort/country/sort-Guayana.component';
import SortCountryGuinea from './components/sort/country/sort-Guinea.component';
import SortCountryHaiti from './components/sort/country/sort-Haiti.component';
import SortCountryHoly from './components/sort/country/sort-Holy-See.component';
import SortCountryHonduras from './components/sort/country/sort-Honduras.component';
import SortCountryHungary from './components/sort/country/sort-Hungary.component';
import SortCountryIceland from './components/sort/country/sort-Iceland.component';
import SortCountryIndia from './components/sort/country/sort-India.component';
import SortCountryIndonesia from './components/sort/country/sort-Indonesia.component';
import SortCountryIran from './components/sort/country/sort-Iran.component';
import SortCountryIraq from './components/sort/country/sort-Iraq.component';
import SortCountryIreland from './components/sort/country/sort-Ireland.component';
import SortCountryIsrael from './components/sort/country/sort-Israel.component';
import SortCountryItaly from './components/sort/country/sort-Italy.component';
import SortCountryJamaica from './components/sort/country/sort-Jamaica.component';
import SortCountryJapan from './components/sort/country/sort-Japan.component';
import SortCountryJordan from './components/sort/country/sort-Jordan.component';
import SortCountryKazakhstan from './components/sort/country/sort-Kaskhstan.component';
import SortCountryKenya from './components/sort/country/sort-Kenya.component';
import SortCountryKiribiti from './components/sort/country/sort-Kiribati.component';
import SortCountryKuwait from './components/sort/country/sort-Kuwait.component';
import SortCountryKyrgystan from './components/sort/country/sort-Kyrgyzstan.component';
import SortCountryLaos from './components/sort/country/sort-Laos.component';
import SortCountryLatvia from './components/sort/country/sort-Latvia.component';
import SortCountryLebanon from './components/sort/country/sort-Lebanon.component';
import SortCountryLesotho from './components/sort/country/sort-Lesotho.component';
import SortCountryLiberia from './components/sort/country/sort-Liberia.component';
import SortCountryLibya from './components/sort/country/sort-Libya.component';
import SortCountryLiechtenstein from './components/sort/country/sort-Liechtenstein.component';
import SortCountryLithuania from './components/sort/country/sort-Lithuania.component';
import SortCountryLuxembourg from './components/sort/country/sort-Luxembourg.component';
import SortCountryMadagascar from './components/sort/country/sort-Madagascar.component';
import SortCountryMalawi from './components/sort/country/sort-Malawi.component';
import SortCountryMalaysia from './components/sort/country/sort-Malaysia.component';
import SortCountryMaldives from './components/sort/country/sort-Maldives.component';
import SortCountryMali from './components/sort/country/sort-Mali.component';
import SortCountryMalta from './components/sort/country/sort-Malta.component';
import SortCountryMarshall from './components/sort/country/sort-Marshall-Islands.component';
import SortCountryMauritania from './components/sort/country/sort-Mauritania.component';
import SortCountryMexico from './components/sort/country/sort-Mexico.component';
import SortCountryMicronesia from './components/sort/country/sort-Micronesia.component';
import SortCountryMoldova from './components/sort/country/sort-Moldova.component';
import SortCountryMonaco from './components/sort/country/sort-Monaco.component';
import SortCountryMontenegro from './components/sort/country/sort-Montenegro.component';
import SortCountryMozambique from './components/sort/country/sort-Mozambique.component';
import SortCountryMyanmar from './components/sort/country/sort-Myanmar.component';
import SortCountryNamibia from './components/sort/country/sort-Namibia.component';
import SortCountryNauru from './components/sort/country/sort-Nauru.component';
import SortCountryNepal from './components/sort/country/sort-Nepal.component';
import SortCountryNetherlands from './components/sort/country/sort-Netherlands.component';
import SortCountryNewZealand from './components/sort/country/sort-New-Zealand.component';
import SortCountryNicaragua from './components/sort/country/sort-Nicaragua.component';
import SortCountryNigeria from './components/sort/country/sort-Nigeria.component';
import SortCountryNorthKorea from './components/sort/country/sort-North-Korea.component';
import SortCountryNorthMacedonia from './components/sort/country/sort-North-Macedonia.component';
import SortCountryNorway from './components/sort/country/sort-Norway.component';
import SortCountryOman from './components/sort/country/sort-Oman.component';
import SortCountryPakistan from './components/sort/country/sort-Pakistan.component';
import SortCountryPalau from './components/sort/country/sort-Palau.component';
import SortCountryPanama from './components/sort/country/sort-Panama.component';
import SortCountryPapua from './components/sort/country/sort-Papua-New-Guinea.component';
import SortCountryParaguay from './components/sort/country/sort-Paraguay.component';
import SortCountryPeru from './components/sort/country/sort-Peru.component';
import SortCountryPhilippines from './components/sort/country/sort-Phillipines.component';
import SortCountryPoland from './components/sort/country/sort-Poland.component';
import SortCountryQatar from './components/sort/country/sort-Qatar.component';
import SortCountryRomania from './components/sort/country/sort-Romania.component';
import SortCountryRussia from './components/sort/country/sort-Russia.component';
import SortCountryRwanda from './components/sort/country/sort-Rwanda.component';
import SortCountryKitts from './components/sort/country/sort-Saint-Kitts-and-Nevis.component';
import SortCountryLucia from './components/sort/country/sort-Saint-Lucia.component';
import SortCountryVincent from './components/sort/country/sort-Saint-Vincent-and-the-Grenadines.component';
import SortCountrySamoa from './components/sort/country/sort-Samoa.component';
import SortCountryMarino from './components/sort/country/sort-San-Marino.component';
import SortCountrySaoTome from './components/sort/country/sort-Sao-Tome-and-Principe.component';
import SortCountrySaudi from './components/sort/country/sort-Saudi-Arabia.component';
import SortCountrySenegal from './components/sort/country/sort-Senegal.component';
import SortCountrySerbia from './components/sort/country/sort-Serbia.component';
import SortCountrySeychelles from './components/sort/country/sort-Seychelles.component';
import SortCountrySierra from './components/sort/country/sort-Sierra-Leone.component';
import SortCountrySingapore from './components/sort/country/sort-Singapore.component';
import SortCountrySlovakia from './components/sort/country/sort-Slovakia.component';
import SortCountrySlovenia from './components/sort/country/sort-Slovenia.component';
import SortCountrySolomon from './components/sort/country/sort-Solomon-Islands.component';
import SortCountrySomalia from './components/sort/country/sort-Somalia.component';
import SortCountrySouthAfrica from './components/sort/country/sort-South-Africa.component';
import SortCountrySouthKorea from './components/sort/country/sort-South-Korea.component';
import SortCountrySouthSudan from './components/sort/country/sort-South-Sudan.component';
import SortCountrySpain from './components/sort/country/sort-Spain.component';
import SortCountrySri from './components/sort/country/sort-Sri-Lanka.component';
import SortCountryPalestine from './components/sort/country/sort-State-of-Palestine.component';
import SortCountrySudan from './components/sort/country/sort-Sudan.component';
import SortCountrySuriname from './components/sort/country/sort-Suriname.component';
import SortCountrySwaziland from './components/sort/country/sort-Swaziland.component';
import SortCountrySweden from './components/sort/country/sort-Sweden.component';
import SortCountrySwitzerland from './components/sort/country/sort-Switzerland.component';
import SortCountrySyria from './components/sort/country/sort-Syria.component';
import SortCountryTajikistan from './components/sort/country/sort-Tajikistan.component';
import SortCountryTanzania from './components/sort/country/sort-Tanzania.component';
import SortCountryThailand from './components/sort/country/sort-Thailand.component';
import SortCountryTrinidad from './components/sort/country/sort-Trinidad-and-Tobago.component';
import SortCountryTimor from './components/sort/country/sort-Timor-Leste.component';
import SortCountryTogo from './components/sort/country/sort-Togo.component';
import SortCountryTonga from './components/sort/country/sort-Tonga.component';
import SortCountryTunisia from './components/sort/country/sort-Tunisia.component';
import SortCountryTurkey from './components/sort/country/sort-Turkey.component';
import SortCountryTurkmenistan from './components/sort/country/sort-Turkmenistan.component';
import SortCountryTuvalu from './components/sort/country/sort-Tuvalu.component';
import SortCountryUganda from './components/sort/country/sort-Uganda.component';
import SortCountryUkraine from './components/sort/country/sort-Ukraine.component';
import SortCountryUAE from './components/sort/country/sort-United-Arab-Emirates.component';
import SortCountryUSA from './components/sort/country/sort-Unites-States.component';
import SortCountryUruguay from './components/sort/country/sort-Uruguay.component';
import SortCountryUzbekistan from './components/sort/country/sort-Uzbekistan.component';
import SortCountryVanuatu from './components/sort/country/sort-Vanuatu.component';
import SortCountryVenezuela from './components/sort/country/sort-Venezuela.component';
import SortCountryVietnam from './components/sort/country/sort-Vietnam.component';
import SortCountryYemen from './components/sort/country/sort-Yemen.component';
import SortCountryZambia from './components/sort/country/sort-Zambia.component';
import SortCountryZimbabwe from './components/sort/country/sort-Zimbabwe.component';
import SortCountryAlgeria from './components/sort/country/sort-Algeria.component';
import SortCountryArmenia from './components/sort/country/sort-Armenia.component';
import SortCountryAustria from './components/sort/country/sort-Austria.component';
import SortCountryBrazil from './components/sort/country/sort-Brazil.component';
import SortCountryFinland from './components/sort/country/sort-Finland.component';
import SortCountryGuineaBissau from './components/sort/country/sort-Guinea-Bissau.component';
import SortCountryMauritus from './components/sort/country/sort-Mauritus.component';
import SortCountryMongolia from './components/sort/country/sort-Mongolia.component';
import SortCountryMorocco from './components/sort/country/sort-Morocco.component';
import SortCountryNiger from './components/sort/country/sort-Niger.component';
import SortCountryUK from './components/sort/country/sort-United-Kingdom.component';

class App extends Component {
  constructor() {
    super();
    this.state = {
      user: userService.getUser()
    };
  }

  handleLogout = () => {
    userService.logout();
    this.setState({ user: null });
  }

  handleSignupOrLogin = () => {
    this.setState({user: userService.getUser()});
  }

  render() {
    return (
        <div className="container">
          <Navbar user={this.state.user} handleLogout={this.handleLogout}/>
          <br/>
          <Route exact path="/"  render={() => 
            userService.getUser() ?
            <VoyagesList/> :
            <Redirect to="/login" />
          } /> 
          <Route path="/view/:id" component={ViewVoyage} />
          <Route path="/edit/:id" component={EditVoyage} />
          <Route path="/create" component={CreateVoyage} />

          <Route path="/sort" component={SortVoyage} />

          <Route path="/sort-date" component={SortVoyageDate} />
          <Route path="/sort-date-future" component={SortDateFuture}/>
          <Route path="/sort-date-newest" component={SortDateNewest}/>
          <Route path="/sort-date-oldest" component={SortDateOldest}/>
          <Route path="/sort-date-past" component={SortDatePast}/>

          <Route path="/sort-region" component={SortVoyageRegion} />
          <Route path="/sort-region-africa" component={SortRegionAfrica} />
          <Route path="/sort-region-asia" component={SortRegionAsia} />
          <Route path="/sort-region-the-caribbean" component={SortRegionTheCaribbean} />
          <Route path="/sort-region-central-america" component={SortRegionCentralAmerica} />
          <Route path="/sort-region-eastern-europe" component={SortRegionEasternEurope} />
          <Route path="/sort-region-european-union" component={SortRegionEuropeanUnion} />
          <Route path="/sort-region-middle-east" component={SortRegionMiddleEast} />
          <Route path="/sort-region-north-america" component={SortRegionNorthAmerica} />
          <Route path="/sort-region-oceania" component={SortRegionOceania} />
          <Route path="/sort-region-south-america" component={SortRegionSouthAmerica} />

          <Route path="/sort-country" component={SortVoyageCountry} />
          <Route path="/sort-country-afghanistan" component={SortCountryAfghanistan} />
          <Route path="/sort-country-albania" component={SortCountryAlbania} />
          <Route path="/sort-country-algeria" component={SortCountryAlgeria} />
          <Route path="/sort-country-andorra" component={SortCountryAndorra} />
          <Route path="/sort-country-angola" component={SortCountryAngola} />
          <Route path="/sort-country-antigua" component={SortCountryAntigua} />
          <Route path="/sort-country-argentina" component={SortCountryArgentina} />
          <Route path="/sort-country-armenia" component={SortCountryArmenia} />
          <Route path="/sort-country-australia" component={SortCountryAustralia} />
          <Route path="/sort-country-austria" component={SortCountryAustria} />
          <Route path="/sort-country-azerbaijan" component={SortCountryAzerbaijan} />
          <Route path="/sort-country-bahrain" component={SortCountryBahrain} />
          <Route path="/sort-country-bangladesh" component={SortCountryBangladesh} />
          <Route path="/sort-country-barbados" component={SortCountryBarbados} />
          <Route path="/sort-country-belarus" component={SortCountryBelarus} />
          <Route path="/sort-country-belgium" component={SortCountryBelgium} />
          <Route path="/sort-country-belize" component={SortCountryBelize} />
          <Route path="/sort-country-benin" component={SortCountryBenin} />
          <Route path="/sort-country-bhutan" component={SortCountryBhutan} />
          <Route path="/sort-country-bolivia" component={SortCountryBolivia} />
          <Route path="/sort-country-bosnia" component={SortCountryBosnia} />
          <Route path="/sort-country-botswana" component={SortCountryBotswana} />
          <Route path="/sort-country-brazil" component={SortCountryBrazil} />
          <Route path="/sort-country-brunei" component={SortCountryBrunei} />
          <Route path="/sort-country-bulgaria" component={SortCountryBulgaria} />
          <Route path="/sort-country-burkina" component={SortCountryBurkina} />
          <Route path="/sort-country-burundi" component={SortCountryBurundi} />
          <Route path="/sort-country-cabo" component={SortCountryCabo} />
          <Route path="/sort-country-cambodia" component={SortCountryCambodia} />
          <Route path="/sort-country-cameroon" component={SortCountryCameroon} />
          <Route path="/sort-country-canada" component={SortCountryCanada} />
          <Route path="/sort-country-central-african-republic" component={SortCountryCentralAfricanRepublic} />
          <Route path="/sort-country-chad" component={SortCountryChad} />
          <Route path="/sort-country-chile" component={SortCountryChile} />
          <Route path="/sort-country-china" component={SortCountryChina} />
          <Route path="/sort-country-colombia" component={SortCountryColombia} />
          <Route path="/sort-country-comoros" component={SortCountryComoros} />
          <Route path="/sort-country-congo" component={SortCountryCongo} />
          <Route path="/sort-country-costa" component={SortCountryCostaRica} />
          <Route path="/sort-country-cote" component={SortCountryCote} />
          <Route path="/sort-country-croatia" component={SortCountryCroatia} />
          <Route path="/sort-country-cuba" component={SortCountryCuba} />
          <Route path="/sort-country-cyprus" component={SortCountryCyprus} />
          <Route path="/sort-country-czechia" component={SortCountryCzechia} />
          <Route path="/sort-country-dr-congo" component={SortCountryDRCongo} />
          <Route path="/sort-country-denmark" component={SortCountryDenmark} />
          <Route path="/sort-country-djibouti" component={SortCountryDjibouti} />
          <Route path="/sort-country-dominica" component={SortCountryDominica} />
          <Route path="/sort-country-dr" component={SortCountryDR} />
          <Route path="/sort-country-ecuador" component={SortCountryEcuador} />
          <Route path="/sort-country-egypt" component={SortCountryEgypt} />
          <Route path="/sort-country-el-salvador" component={SortCountryElSalvador} />
          <Route path="/sort-country-equatorial-guinea" component={SortCountryEqGuinea} />
          <Route path="/sort-country-eritrea" component={SortCountryEritrea} />
          <Route path="/sort-country-estonia" component={SortCountryEstonia} />
          <Route path="/sort-country-ethiopia" component={SortCountryEthiopia} />
          <Route path="/sort-country-fiji" component={SortCountryFiji} />
          <Route path="/sort-country-finland" component={SortCountryFinland} />
          <Route path="/sort-country-france" component={SortCountryFrance} />
          <Route path="/sort-country-gabon" component={SortCountryGabon} />
          <Route path="/sort-country-gambia" component={SortCountryGambia} />
          <Route path="/sort-country-georgia" component={SortCountryGeorgia} />
          <Route path="/sort-country-germany" component={SortCountryGermany} />
          <Route path="/sort-country-ghana" component={SortCountryGhana} />
          <Route path="/sort-country-greece" component={SortCountryGreece} />
          <Route path="/sort-country-grenada" component={SortCountryGrenada} />
          <Route path="/sort-country-guatemala" component={SortCountryGuatemala} />
          <Route path="/sort-country-guayana" component={SortCountryGuayana} />
          <Route path="/sort-country-guinea-bissau" component={SortCountryGuineaBissau} />
          <Route path="/sort-country-guinea" component={SortCountryGuinea} />
          <Route path="/sort-country-haiti" component={SortCountryHaiti} />
          <Route path="/sort-country-holy" component={SortCountryHoly} />
          <Route path="/sort-country-honduras" component={SortCountryHonduras} />
          <Route path="/sort-country-hungary" component={SortCountryHungary} />
          <Route path="/sort-country-iceland" component={SortCountryIceland} />
          <Route path="/sort-country-india" component={SortCountryIndia} />
          <Route path="/sort-country-indonesia" component={SortCountryIndonesia} />
          <Route path="/sort-country-iran" component={SortCountryIran} />
          <Route path="/sort-country-iraq" component={SortCountryIraq} />
          <Route path="/sort-country-ireland" component={SortCountryIreland} />
          <Route path="/sort-country-israel" component={SortCountryIsrael} />
          <Route path="/sort-country-italy" component={SortCountryItaly} />
          <Route path="/sort-country-jamaica" component={SortCountryJamaica} />
          <Route path="/sort-country-japan" component={SortCountryJapan} />
          <Route path="/sort-country-jordan" component={SortCountryJordan} />
          <Route path="/sort-country-kazakhstan" component={SortCountryKazakhstan} />
          <Route path="/sort-country-kenya" component={SortCountryKenya} />
          <Route path="/sort-country-kiribati" component={SortCountryKiribiti} />
          <Route path="/sort-country-kuwait" component={SortCountryKuwait} />
          <Route path="/sort-country-kyrgystan" component={SortCountryKyrgystan} />
          <Route path="/sort-country-laos" component={SortCountryLaos} />
          <Route path="/sort-country-latvia" component={SortCountryLatvia} />
          <Route path="/sort-country-lebanon" component={SortCountryLebanon} />
          <Route path="/sort-country-lesotho" component={SortCountryLesotho} />
          <Route path="/sort-country-liberia" component={SortCountryLiberia} />
          <Route path="/sort-country-libya" component={SortCountryLibya} />
          <Route path="/sort-country-liechtenstein" component={SortCountryLiechtenstein} />
          <Route path="/sort-country-lithuania" component={SortCountryLithuania} />
          <Route path="/sort-country-luxembourg" component={SortCountryLuxembourg} />
          <Route path="/sort-country-madagascar" component={SortCountryMadagascar} />
          <Route path="/sort-country-malawi" component={SortCountryMalawi} />
          <Route path="/sort-country-malaysia" component={SortCountryMalaysia} />
          <Route path="/sort-country-maldives" component={SortCountryMaldives} />
          <Route path="/sort-country-mali" component={SortCountryMali} />
          <Route path="/sort-country-malta" component={SortCountryMalta} />
          <Route path="/sort-country-marshall" component={SortCountryMarshall} />
          <Route path="/sort-country-mauritania" component={SortCountryMauritania} />
          <Route path="/sort-country-mauritus" component={SortCountryMauritus} />
          <Route path="/sort-country-mexico" component={SortCountryMexico} />
          <Route path="/sort-country-micronesia" component={SortCountryMicronesia} />
          <Route path="/sort-country-moldova" component={SortCountryMoldova} />
          <Route path="/sort-country-monaco" component={SortCountryMonaco} />
          <Route path="/sort-country-mongolia" component={SortCountryMongolia} />
          <Route path="/sort-country-montenegro" component={SortCountryMontenegro} />
          <Route path="/sort-country-morocco" component={SortCountryMorocco} />
          <Route path="/sort-country-mozambique" component={SortCountryMozambique} />
          <Route path="/sort-country-myanmar" component={SortCountryMyanmar} />
          <Route path="/sort-country-namibia" component={SortCountryNamibia} />
          <Route path="/sort-country-nauru" component={SortCountryNauru} />
          <Route path="/sort-country-nepal" component={SortCountryNepal} />
          <Route path="/sort-country-netherlands" component={SortCountryNetherlands} />
          <Route path="/sort-country-new-zealand" component={SortCountryNewZealand} />
          <Route path="/sort-country-nicaragua" component={SortCountryNicaragua} />
          <Route path="/sort-country-niger" component={SortCountryNiger} />
          <Route path="/sort-country-nigeria" component={SortCountryNigeria} />
          <Route path="/sort-country-north-korea" component={SortCountryNorthKorea} />
          <Route path="/sort-country-north-macedonia" component={SortCountryNorthMacedonia} />
          <Route path="/sort-country-norway" component={SortCountryNorway} />
          <Route path="/sort-country-oman" component={SortCountryOman} />
          <Route path="/sort-country-pakistan" component={SortCountryPakistan} />
          <Route path="/sort-country-palau" component={SortCountryPalau} />
          <Route path="/sort-country-panama" component={SortCountryPanama} />
          <Route path="/sort-country-papua" component={SortCountryPapua} />
          <Route path="/sort-country-paraguay" component={SortCountryParaguay} />
          <Route path="/sort-country-peru" component={SortCountryPeru} />
          <Route path="/sort-country-philippines" component={SortCountryPhilippines} />
          <Route path="/sort-country-poland" component={SortCountryPoland} />
          <Route path="/sort-country-qatar" component={SortCountryQatar} />
          <Route path="/sort-country-romania" component={SortCountryRomania} />
          <Route path="/sort-country-russia" component={SortCountryRussia} />
          <Route path="/sort-country-rwanda" component={SortCountryRwanda} />
          <Route path="/sort-country-kitts" component={SortCountryKitts} />
          <Route path="/sort-country-lucia" component={SortCountryLucia} />
          <Route path="/sort-country-vincent" component={SortCountryVincent} />
          <Route path="/sort-country-samoa" component={SortCountrySamoa} />
          <Route path="/sort-country-marino" component={SortCountryMarino} />
          <Route path="/sort-country-sao-tome" component={SortCountrySaoTome} />
          <Route path="/sort-country-saudi" component={SortCountrySaudi} />
          <Route path="/sort-country-senegal" component={SortCountrySenegal} />
          <Route path="/sort-country-serbia" component={SortCountrySerbia} />
          <Route path="/sort-country-seychelles" component={SortCountrySeychelles} />
          <Route path="/sort-country-sierra" component={SortCountrySierra} />
          <Route path="/sort-country-singapore" component={SortCountrySingapore} />
          <Route path="/sort-country-slovakia" component={SortCountrySlovakia} />
          <Route path="/sort-country-slovenia" component={SortCountrySlovenia} />
          <Route path="/sort-country-solomon" component={SortCountrySolomon} />
          <Route path="/sort-country-somalia" component={SortCountrySomalia} />
          <Route path="/sort-country-south-africa" component={SortCountrySouthAfrica} />
          <Route path="/sort-country-south-korea" component={SortCountrySouthKorea} />
          <Route path="/sort-country-south-sudan" component={SortCountrySouthSudan} />
          <Route path="/sort-country-spain" component={SortCountrySpain} />
          <Route path="/sort-country-sri" component={SortCountrySri} />
          <Route path="/sort-country-palestine" component={SortCountryPalestine} />
          <Route path="/sort-country-sudan" component={SortCountrySudan} />
          <Route path="/sort-country-suriname" component={SortCountrySuriname} />
          <Route path="/sort-country-swaziland" component={SortCountrySwaziland} />
          <Route path="/sort-country-sweden" component={SortCountrySweden} />
          <Route path="/sort-country-switzerland" component={SortCountrySwitzerland} />
          <Route path="/sort-country-syria" component={SortCountrySyria} />
          <Route path="/sort-country-tajikistan" component={SortCountryTajikistan} />
          <Route path="/sort-country-tanzania" component={SortCountryTanzania} />
          <Route path="/sort-country-thailand" component={SortCountryThailand} />
          <Route path="/sort-country-timor" component={SortCountryTimor} />
          <Route path="/sort-country-togo" component={SortCountryTogo} />
          <Route path="/sort-country-tonga" component={SortCountryTonga} />
          <Route path="/sort-country-trinidad" component={SortCountryTrinidad} />
          <Route path="/sort-country-tunisia" component={SortCountryTunisia} />
          <Route path="/sort-country-turkey" component={SortCountryTurkey} />
          <Route path="/sort-country-turkmenistan" component={SortCountryTurkmenistan} />
          <Route path="/sort-country-tuvalu" component={SortCountryTuvalu} />
          <Route path="/sort-country-uganda" component={SortCountryUganda} />
          <Route path="/sort-country-ukraine" component={SortCountryUkraine} />
          <Route path="/sort-country-uae" component={SortCountryUAE} />
          <Route path="/sort-country-uk" component={SortCountryUK} />
          <Route path="/sort-country-usa" component={SortCountryUSA} />
          <Route path="/sort-country-uruguay" component={SortCountryUruguay} />
          <Route path="/sort-country-uzbekistan" component={SortCountryUzbekistan} />
          <Route path="/sort-country-vanuatu" component={SortCountryVanuatu} />
          <Route path="/sort-country-venezuela" component={SortCountryVenezuela} />
          <Route path="/sort-country-vietnam" component={SortCountryVietnam} />
          <Route path="/sort-country-yemen" component={SortCountryYemen} />
          <Route path="/sort-country-zambia" component={SortCountryZambia} />
          <Route path="/sort-country-zimbabwe" component={SortCountryZimbabwe} />
          
          <Route path="/sort-state" component={SortVoyageState} />
          <Route path="/sort-state-usa" component={SortStateUSA} />
          <Route path="/sort-state-canada" component={SortStateCanada} />
          <Route path="/sort-alabama" component={SortStateAlabama} />
          <Route path="/sort-alaska" component={SortStateAlaska} />
          <Route path="/sort-arizona" component={SortStateArizona} />
          <Route path="/sort-arkansas" component={SortStateArkansas} />
          <Route path="/sort-california" component={SortStateCalifornia} />
          <Route path="/sort-colorado" component={SortStateColorado} />
          <Route path="/sort-connecticut" component={SortStateConnecticut} />
          <Route path="/sort-delaware" component={SortStateDelaware} />
          <Route path="/sort-florida" component={SortStateFlorida} />
          <Route path="/sort-georgia" component={SortStateGeorgia} />
          <Route path="/sort-hawaii" component={SortStateHawaii} />
          <Route path="/sort-idaho" component={SortStateIdaho} />
          <Route path="/sort-illinois" component={SortStateIllinois} />
          <Route path="/sort-indiana" component={SortStateIndiana} />
          <Route path="/sort-iowa" component={SortStateIowa} />
          <Route path="/sort-kansas" component={SortStateKansas} />
          <Route path="/sort-kentucky" component={SortStateKentucky} />
          <Route path="/sort-louisiana" component={SortStateLouisiana} />
          <Route path="/sort-maine" component={SortStateMaine} />
          <Route path="/sort-maryland" component={SortStateMaryland} />
          <Route path="/sort-massachusetts" component={SortStateMassachusetts} />
          <Route path="/sort-michigan" component={SortStateMichigan} />
          <Route path="/sort-minnesota" component={SortStateMinnesota} />
          <Route path="/sort-mississippi" component={SortStateMississippi} />
          <Route path="/sort-missouri" component={SortStateMissouri} />
          <Route path="/sort-montana" component={SortStateMontana} />
          <Route path="/sort-nebraska" component={SortStateNebraska} />
          <Route path="/sort-nevada" component={SortStateNevada} />
          <Route path="/sort-new-hampshire" component={SortStateNewHampshire} />
          <Route path="/sort-new-jersey" component={SortStateNewJersey} />
          <Route path="/sort-new-mexico" component={SortStateNewMexico} />
          <Route path="/sort-new-york" component={SortStateNewYork} />
          <Route path="/sort-north-carolina" component={SortStateNorthCarolina} />
          <Route path="/sort-north-dakota" component={SortStateNorthDakota} />
          <Route path="/sort-ohio" component={SortStateOhio} />
          <Route path="/sort-oklahoma" component={SortStateOklahoma} />
          <Route path="/sort-oregon" component={SortStateOregon} />
          <Route path="/sort-pennsylvania" component={SortStatePennsylvania} />
          <Route path="/sort-rhode-island" component={SortStateRhodeIsland} />
          <Route path="/sort-south-carolina" component={SortStateSouthCarolina} />
          <Route path="/sort-south-dakota" component={SortStateSouthDakota} />
          <Route path="/sort-tennessee" component={SortStateTennessee} />
          <Route path="/sort-texas" component={SortStateTexas} />
          <Route path="/sort-utah" component={SortStateUtah} />
          <Route path="/sort-vermont" component={SortStateVermont} />
          <Route path="/sort-virginia" component={SortStateVirginia} />
          <Route path="/sort-washington" component={SortStateWashington} />
          <Route path="/sort-west-virginia" component={SortStateWestVirginia} />
          <Route path="/sort-wisconsin" component={SortStateWisconsin} />
          <Route path="/sort-wyoming" component={SortStateWyoming} />
          <Route path="/sort-alberta" component={SortStateAlberta} />
          <Route path="/sort-british-columbia" component={SortStateBritishColumbia} />
          <Route path="/sort-manitoba" component={SortStateManitoba} />
          <Route path="/sort-new-brunswick" component={SortStateNewBrunswick} />
          <Route path="/sort-newfoundland" component={SortStateNewfoundland} />
          <Route path="/sort-northwest-territories" component={SortStateNorthwestTerritories} />
          <Route path="/sort-nova-scotia" component={SortStateNovaScotia} />
          <Route path="/sort-nunavut" component={SortStateNunavut} />
          <Route path="/sort-ontario" component={SortStateOntario} />
          <Route path="/sort-prince-edward-island" component={SortStatePrinceEdwardIsland} />
          <Route path="/sort-quebec" component={SortStateQuebec} />
          <Route path="/sort-saskatchewan" component={SortStateSaskatchewan} />
          <Route path="/sort-yukon" component={SortStateYukon} />

          <Route path="/sort-rating" component={SortVoyageRating} />
          <Route path="/sort-rating-highest" component={SortRatingHighest} />
          <Route path="/sort-rating-lowest" component={SortRatingLowest} />
          

          <Route exact path='/signup' render={({ history }) => 
          <SignupPage
            history={history}
            handleSignupOrLogin={this.handleSignupOrLogin}
          />
        }/>
          <Route exact path='/login' render={({ history }) => 
            <LoginPage
              history={history}
              handleSignupOrLogin={this.handleSignupOrLogin}
            />
          }/>
        </div>
    );
  }
}
 
export default App;