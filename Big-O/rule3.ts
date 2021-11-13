// Rule 3: Different inputs should have different variables.

function compressBoxes(fullBoxes: Array<string>, emptyBoxes: Array<string>) {
  
    fullBoxes.forEach((box) => {
      console.log(box);
    });
  
    emptyBoxes.forEach((box) => {
      console.log(box);
    });
  }

  //Time complexity: O(a + b)