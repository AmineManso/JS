let cols, rows;
let w = 50;
let grid = [];
let current;
let stack = [];
let idx = 0;
let len =9;
let BT = false; // in case of state machine
let colorOfNum; 
let colorOfStatic; 
let startSolving = false;



function setup() {
  createCanvas(450, 450);
//    frameRate(5);
    cols = floor(width/w);
    rows = floor(height/w);
     colorOfNum = color(0, 0, 255 );
     colorOfStatic = color(255, 0, 0 );
    
   
    // Create the Cells:
    for(let i =0; i<rows; i++){
         for(let j =0; j < cols; j++){
             var cell = new Cell(i, j, 0, colorOfNum);
             grid.push(cell);
         }
    }
    //generate random fix set of starting numbers:
    for(let i =0; i<5; i++){
        let index = floor(random(0, 80));
        let randomNumber = floor(random(1, 9));
        grid[index].num = randomNumber;
        grid[index].col = colorOfStatic;
       // console.log(grid[index]); // to verify their positions
    }
  // stack.push(grid[0]);
//    emptyCell = new Cell(0,0,0);
    ///// set static numbers manually:
//    grid[2].num  = 9; 
//    grid[2].col  = colorOfStatic; 
//    grid[9].num = 9; 
//    grid[9].col  = colorOfStatic; 
//    grid[11].num = 9; 
//    grid[11].col  = colorOfStatic; 
//    grid[10].num = 9; 
//    grid[10].col  = colorOfStatic; 
//    grid[30].num = 5; 
//    grid[40].num = 7; 
//    grid[50].num  = 9;
//    grid[15].num = 3; 
//    grid[55].num = 6; 
//    grid[40].num = 2; 
//    grid[69].num  = 5; 

//    stack.push(grid[0]);
     //  check that the Sudoku Grid is valid and accept solution.
    checkGrid();
    createP("SUDOKU_Solver^v^");
};

///////////////////////////////////////////////////
function checkGrid(){
  for(let i =0; i< grid.length-2; i++){
      if(grid[i].num != 0){
          if( !(valid(grid[i].num, grid[i].i, grid[i].j))){
             console.log("Not A Valid Grid !!!!!\n");
              noLoop();
           return false;  
          }
      }
  }
    return true;
};

///////////////////////////////////////////////////////////
function draw() {
 /////if a valid grid  =>  solving.....  :
if(checkGrid()){
    
    background(255); 
    for(let i =0; i< grid.length; i++){
      grid[i].show();
  } 
    ////// End Condition to stop the Loop
    if(grid[80].num != 0 && valid(grid[80].num , 8, 8)){
        print("Sudoku Solved_______finish !!");
        noLoop();        
    }
    //**********
    /////// Find the Zeros:
    if( grid[idx] && grid[idx].num === 0 && idx < 81){
        // get the position of zero
        let x = grid[idx].j;        
        let y = grid[idx].i;
        ////// Solving
        if(!solve(y, x)){    
            backTrack();
        }
    }
        idx++;            
 }else{
     //// show the false Grid:
         background(255); 
    for(let i =0; i< grid.length; i++){
      grid[i].show();
  } 
 }
};
/////////////////////////////////////////
///*******************************
function solve(y, x){
    for(let i =1; i<10 ;i++){   // Try to fin the valid num
        if(valid(i, y, x)){
            grid[idx].num = i; 
            stack.push(grid[idx]);
            idx=y *len +x;
            return  true;
        } 
//    console.log("out  of loop");
    }
    return false;
};
///*******************************
 function backTrack(){
//     console.log(idx);
//    grid[idx].num =0;
    current = stack.pop();
     let x2 = current.j;
     let y2 = current.i;
     for(let val = (current.num+1) ; val<11 ;val++){   
        if(valid(val, y2, x2) && val<10 ){
           current.num = val;
            grid[y2 * len + x2].num = val; 
//                stack.push(grid[y2 * len + x2]);
            stack.push(current);
            idx = current.pos;

            break;
        }
         if(val >= 10 && stack.length > 0){
            grid[y2 * len + x2].num = 0; 
             // additional Lines those without huge impact:
//            idx = current.pos;
//            let back = stack[stack.length - 1 ];
//             idx = back.pos;
             
             backTrack();
            }
    } 
 };
///*******************************

////////////////////////////////////////

function valid(val, posY, posX) {
  let len = 9;
    // check row:
  for (let j = 0; j < len; j++) {
//      print(grid[posY * len + j] );
//      print(cel );
    if (( grid[posY * len + j].num === val) && (posX != j)  ) {
      return false;
    }
  }
  // check column:
  for (let i = 0; i < len; i++) {
//         print(grid[i * len + posX] );
    if ( grid[i * len + posX].num === val && posY != i  ) {
      //printf(" detected in row\n" );
      return false;
    }
  }
  //  check Box;
  let box_x = floor(posX / 3);
  let box_y = floor(posY / 3);

  for (let i = box_y * 3; i < box_y*3+3; i ++) {
    for (let j = box_x * 3; j < box_x * 3 +3; j++) {
      if (grid[i*len + j].num === val && i != posY && j != posX) {
        //printf(" detected in Box \n");
        return false;
      }
    }
  }

  return true;
};

/////////////////////////////////////////////////////
