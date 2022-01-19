class Board {
    constructor() {
        this.rows = 6;
        this.columns = 7;
        this.spaces = createSpaces();
    }
    createSpaces() {
    /** 
     * Generates 2D array of spaces. 
     * @return  {Array}     An array of space objects
     */  
     const spaces = [];
        
     for (let i = 0; i < num; i++) {
         let token = new Token(i, this);
         tokens.push(token);
     }
     
     return tokens;
 }
    }
}