
var array = [[4, 5, 1, 3],
[13, 27, 18, 26],
[32, 35, 37, 39], 
[1000, 1001, 857, 1] 
]
function largestnumber(){
    
    let largest=0;
     let result=0;

     for(var i=0; i < array.length; i++){
         for(var j=0; j  < array.length; j++){
            
             if(array[i][j ] > largest){
                 largest= array[i][j];
                 result = largest;
                //  console.log(largest)
             }
         }
     }
      document.getElementById('x').innerText=result
    }

    

