// // Your code here
// const dodger = document.getElementById('dodger');
// dodger.style.backgroundColor = '#FF69B4';

// function moveDodgerLeft() {
//   const leftNumbers = dodger.style.left.replace("px", '');
//   const left = parseInt(leftNumbers, 10);

//   if (left > 0) {
//     dodger.style.left = `${left - 4}px`;
//   }
// }

// function moveDodgerRight() {
//     const leftNumbers = dodger.style.left.replace('px', '');
//     const left = parseInt(leftNumbers, 10);
  
//     if (left > 360) {
//       dodger.style.left = `${left + 4}px`;
//     }
//   }
  
//   document.addEventListener('keydown', function(e) {
//     if (e.key === 37) {
//       moveDodgerLeft();
//     }
//     if (e.key === 39){
//       moveDodgerRight();
//     }
//   });


const dodger = document.getElementById('dodger');
dodger.style.backgroundColor = '#FF69B4';

function moveDodgerLeft() {
  const leftNumbers = dodger.style.left.replace("px", "");
  const left = parseInt(leftNumbers, 10);

  if (left > 0) {
    dodger.style.left = `${left - 4}px`;
  }
}

function moveDodgerRight(){
  const leftNumbers = dodger.style.left.replace('px','');
  const left = parseInt(leftNumbers,10);
  
  if (left > 39) {
    dodger.style.left = `${left + 4}px`;
  }
}
document.addEventListener("keydown", function (e) {
  if (e.key === "ArrowLeft") {
    moveDodgerLeft();
  }
  else (e.key === "ArrowRight");
    // moveDodgerRight();
  // }
});
