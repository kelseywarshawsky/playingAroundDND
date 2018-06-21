import React from 'react';
import { Container, Row, td } from 'reactstrap';
import API from "../../Utils/API";


class CharacterPage extends React.Component{
  state = {
    characters: [],
    character_name: "",
    race: "",
    gender: "",
    class: ""
  };

  componentDidMount() {
    this.loadCharacters();
  }

  loadCharacters = () => {
    API.getCharacters()
      .then(res =>
        this.setState({ characters: res.data, character_name: "", race: "", gender: "", class: "" })
      )
      .catch(err => console.log(err));
  };
    render() {
      return (
        <Container>
          <Row>
          {this.state.characters.map(character => (
            <tr key={character._id}>
            <td>Character Name: {character.name}</td>
            <td>Gender: {character.gender}</td>
            <td>Race: {character.race}</td>
            <td>Dex: {character.dex}</td>
            <td>Intellience: {character.intel}</td>
            <td>Charisma: {character.cha}</td>
            <td>Strength: {character.stre}</td>
            <td>Constitution: {character.con}</td>
            <td>Wisdom: {character.wis}</td>
            <td>Acrobatics: {character.acrobatics}</td>
            <td>Animal Handling: {character.animal}</td>
            <td>Arcana: {character.arcana}</td>
            <td>Athletics: {character.athletics}</td>
            <td>Deception: {character.deception}</td>
            <td>History: {character.history}</td>
            <td>Insight: {character.insight}</td>
            <td>Intimidation: {character.intimidation}</td>
            <td>Investigation: {character.investigation}</td>
            <td>Medicine: {character.medicine}</td>
            <td>Nature: {character.nature}</td>
            <td>Perception: {character.perception}</td>
            <td>Performance: {character.performance}</td>
            <td>Persuasion: {character.persuasion}</td>
            <td>Religion: {character.religion}</td>
            <td>Sleight of Hand: {character.sleight}</td>
            <td>Stealth: {character.stealth}</td>
          <td>Survival: {character.survival}</td>
          </tr> 
          ))};
          </Row>
          </Container>
           );
        }
    }

export default CharacterPage;
