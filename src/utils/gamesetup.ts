type Board = number[][];
type Row = 0 | 1;
type Piece = number;
type Joker = 1;
type IntArray = number[]
type StrArray = string[]

const joker: Joker = 1;
const colorMap: StrArray = ['black', 'blue', 'yellow', 'red'];

let discardPile: IntArray = [];
let testBoard: Board = [[131, 110, 40, 42, 41], [1, 91, 90, 110, 73, 72, 71, 70]];

const decoder = (piece: Piece) => {

  const checkRange = (piece: Piece) => {
    if (piece === 1) {
      return `J`
    } else if (piece < 9 || piece > 133) {
      return 'false'
    }
    return true;
  };

  if (checkRange(piece) === 'J') {
    return 'Value: Joker';

  } else if (checkRange(piece) === true) {
    let pieceString: string = piece.toString();

    if (pieceString.length === 2) {
      let numstr: string = pieceString[0];
      let colorstr: string = pieceString[1];
      return `Value: ${parseInt(numstr)}, Color: ${colorMap[parseInt(colorstr)]}`

    } else if (pieceString.length === 3) {
      let num1str: string = pieceString[0]
      let num2str: string = pieceString[1]
      let colorstr: string = pieceString[2]
      return `Value: ${parseInt(num1str + num2str)}, Color: ${colorMap[parseInt(colorstr)]}`
    };
  };
  return new Error(`Piece value out of bounds. Value: ${piece}`)
};

// for debug purposes
const decryptBoard = (board: Board) => {
  const row1 = board[0];
  const row2 = board[0]
  return `Top row: ${row1} \ Bottom row: ${row2}`;
};

// discarded piece is removed from the player board and appended to the discard pile
const discardsPiece = (board: Board, row: Row, piece: Piece) => {
  discardPile = discardPile.concat(board[row].splice(board[row].indexOf(piece), 1));
};

// piece taken from the discard pile is added to player board and removed from discard pile
const takesPieceFromDiscard = (board: Board, row: Row, piece: Piece) => {
  discardPile.pop();
  return board[row].push(piece); 
};



















