import axios from "axios";

export default {
  // Gets all characters
  getcharacters: function() {
    return axios.get("/api/characters");
  },
  // Gets the character with the given id
  getcharacter: function(id) {
    return axios.get("/api/characters/" + id);
  },
  // Deletes the character with the given id
  deletecharacter: function(id) {
    return axios.delete("/api/characters/" + id);
  },
  // Saves a character to the database
  savecharacter: function(characterData) {
    return axios.post("/api/characters", characterData);
  }
};
