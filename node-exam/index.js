// var rect=
// {
//   perimeter:(x,y)=>(2*(x+y)),
//   area:(x,y)=>(x*y)
// };

// function solveRect(l,b){
//   console.log("solving for rectangle with l = "+l+" and b = "+b);
//   if(l<=0 || b<=0){
//     console.log("wrong dimension");
//   }
//   else {
//     {
//       console.log("area of rectangle is: "+rect.area(l,b));
//       console.log("area of prei is: "+rect.perimeter(l,b));
//     }
//   }
// }
  // ########## NODE MODULE ###################
  var rect=require('./rectangle');
  function solveRect(l,b){
    console.log("solving for rectangle with l = "+l+" and b = "+b);
    rect(l,b, (err,rectangle)=>{
      if(err){
        console.log("Error:",err.message);
      }
      else {
        console.log("THe area of rectangle: "+ rectangle.area());
        console.log("THe perimeter of rectangle: "+ rectangle.perimeter());
      }
    });
    console.log("this statement is after the call to rect");
  }
solveRect(2,4);
solveRect(3,5);
solveRect(0,5);
solveRect(-2,4);
