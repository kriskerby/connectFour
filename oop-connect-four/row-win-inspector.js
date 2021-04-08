export class RowWinInspector {
    constructor(column){
    this.column = column;

    }
    inspect(){
        let count = 1;
        let currentToken = this.column.getTokenAt(5)
        for (let i = 4; i >= 0; i--){

            if (currentToken === this.column.getTokenAt(i)){
                count += 1;
                if (count === 4){
                   return currentToken;
                }

            } else {
                count = 1;
                currentToken = this.column.getTokenAt(i);
            }
        }
        return 0;
    }
}
