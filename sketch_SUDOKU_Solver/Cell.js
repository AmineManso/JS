function Cell(i, j, num, c){
    this.i = i;
    this.j = j;
    this.num = num;
    this.pos = i*9 + j;
    this.col = c;
    
      this.show = function(){
        let x= this.j * w;
        let y= this.i * w;
        stroke(0);
        noFill();
        rect(x, y, w, w );
          //*****
          fill(this.col); //colorOfNum
         textSize(35);
         textAlign(CENTER);
          if(this.num != 0){
           text(this.num, x + 25, y + 40 );
           }else{
            text(".", x + 25, y + 30);  
           }
    };  
   
 
    
    
    
}


// //************************
//    this.highLight = function(){
//        let x = this.i * w;
//        let y = this.j * w; 
//        noStroke();
//        fill(0, 0, 255, 100);
//        rect(x, y, w, w);
//    };
//    //************************
//    this.show = function(){
//        let x = this.i * w;
//        let y = this.j * w;
//        stroke(255)
//        if(this.wall[0]){
//            line(x    ,   y  ,  x + w  ,   y  ); // Top    
//        }
//        if(this.wall[1]){
//            line(x+w  ,   y  ,  x + w  ,   y+w);  // right  
//        }
//        if(this.wall[2]){
//            line(x+w  ,  y+w ,  x      ,   y+w); //buttom
//        }
//        if(this.wall[3]){
//            line(x    ,  y+w ,  x      ,   y  );    //left
//        }
//        
//        if(this.visited){
//            noStroke();
//            fill(255, 0, 255, 100);
//            rect(x, y, w, w);
//        }
//    };
//    //******************
//    this.show2 = function(){
//        let x= this.i * w;
//        let y= this.j * w;
//        noStroke();
//        fill(0, 255, 0, 100);
//        ellipse(x+20, y+20, w/4 )
//    }
//    //*********************
//    this.checkNeighbors = function(){
//      let neighbors = [];
//        
//      let top    = grid[index(i    , j-1)]; 
//      let right  = grid[index(i + 1, j  )]; 
//      let bottom = grid[index(i    , j+1)]; 
//      let left   = grid[index(i - 1, j)];
//        if(top && !top.visited){
//            neighbors.push(top);
//        }
//         if(right && !right.visited){
//            neighbors.push(right);
//        }
//         if(bottom && !bottom.visited){
//            neighbors.push(bottom);
//        }   
//         if(left && !left.visited){
//            neighbors.push(left);
//        }
//     
//        if(neighbors.length > 0){
//            let r = floor(random(0, neighbors.length));
//            return neighbors[r];
//        }else return undefined;
//    };










///////////////////////////////////////////////////////////////////////////
//function Cell(x_, y_, empty_){
//  this.x = x_;
//  this.y = y_;
//  this.state = empty_;
//  
//  this.show = function(){
//    stroke(0);
//    fill(255);
//    rect(this.x, this.y, 100, 100); 
//    if(this.state == false){
//     stroke(255);
//    fill(0);
//    rect(this.x, this.y, 100, 100); 
//    }
//  }
//  this.show2 = function(){
//    stroke(0);
//    fill(255, 255, 100);
//    rect(this.x, this.y, 100, 100); 
//    if(this.state == false){
//     stroke(255);
//    fill(0, 255, 0, 50);
//    rect(this.x, this.y, 100, 100); 
//    }
//  } 
//    this.show3 = function(){
//    stroke(0);
//    fill(100, 0, 100);
//    rect(this.x, this.y, 100, 100); 
//    if(this.state == false){
//     stroke(255);
//    fill(0, 255, 100, 50);
//    rect(this.x, this.y, 100, 100); 
//    }
//  }
//}
//***********************************************************
////***********Shiffman code******************
//function Cell(i, j) {
//  this.i = i;
//  this.j = j;
//  this.walls = [true, true, true, true];
//  this.visited = false;
//
//  this.checkNeighbors = function() {
//    let neighbors = [];
//
//    let top = grid[index(i, j - 1)];
//    let right = grid[index(i + 1, j)];
//    let bottom = grid[index(i, j + 1)];
//    let left = grid[index(i - 1, j)];
//
//    if (top && !top.visited) {
//      neighbors.push(top);
//    }
//    if (right && !right.visited) {
//      neighbors.push(right);
//    }
//    if (bottom && !bottom.visited) {
//      neighbors.push(bottom);
//    }
//    if (left && !left.visited) {
//      neighbors.push(left);
//    }
//
//    if (neighbors.length > 0) {
//      let r = floor(random(0, neighbors.length));
//      return neighbors[r];
//    } else {
//      return undefined;
//    }
//  };
//  this.highlight = function() {
//    let x = this.i * w;
//    let y = this.j * w;
//    noStroke();
//    fill(0, 0, 255, 100);
//    rect(x, y, w, w);
//  };
//
//  this.show = function() {
//    let x = this.i * w;
//    let y = this.j * w;
//    stroke(255);
//    if (this.walls[0]) {
//      line(x, y, x + w, y);
//    }
//    if (this.walls[1]) {
//      line(x + w, y, x + w, y + w);
//    }
//    if (this.walls[2]) {
//      line(x + w, y + w, x, y + w);
//    }
//    if (this.walls[3]) {
//      line(x, y + w, x, y);
//    }
//
//    if (this.visited) {
//      noStroke();
//      fill(255, 0, 255, 100);
//      rect(x, y, w, w);
//    }
//  };
//}