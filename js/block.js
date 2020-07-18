// Sample Block of Granite.js
class Block {
  
  constructor(blockJSON, themeJSON) {
    this.blockJSON = JSON.parse(blockJSON);
    this.themeJSON = JSON.parse(themeJSON);
  }
  
  render() {
    return this.blockJSON;    
  }
  
  target() {
    return this.blockJSON["id"];
  }
  
  theme() {
    return this.themeJSON;
  }
  
}

module.exports = Block;
