const christmasTree = () => {
  
    // Edit "blocksInTree" to change how many blocks are in the christmas tree
    
    // vvvvvvvv
    
    const blocksInTree = 6;
    
    // ^^^^^^^^
    
    // Parts of Tree
    const heightOfTree = (blocksInTree * 3) + 1;
    const spacesInsideOfTree = [];
    const spacesForBaseOfTree = [];
    const treeBuildingBlocks = [];
    const bottomOfTree = [];
    
    // Calculation for width of base of tree
    let baseCalculation;
    switch(blocksInTree) {
      case 1:
        baseCalculation = 2.4;
        break;
      case 2:
        baseCalculation = 3.8;
        break;
      default:
        baseCalculation = 4.1;
    }
    const widthOfBaseOfTree = blocksInTree / ((heightOfTree - 3) / baseCalculation);
    
    /* 
    For loop to create the building blocks for the tree with spacing inside of the tree 
    */
    for (let i = 0; i < heightOfTree; i++) {
      spacesInsideOfTree.push("  ");
      spacesToString = spacesInsideOfTree.join("");
      if(i === 0) {
        treeBuildingBlocks.push("  |   ");
      } else if (i % 3 === 0 && (i + 1) !== heightOfTree) {
        spacesInsideOfTree.pop("   ");
        spacesToString = spacesInsideOfTree.join("");
        treeBuildingBlocks.push(`/_${spacesToString}_\\`);
      } else {
        treeBuildingBlocks.push(`/${spacesToString}\\`);
      }
    }
    
    /* 
    For loop to add each line in the "treeBuildingBlocks" array to the console with
    spacing outside of the tree
    */
    const numberOfSpacesOutsideTree = treeBuildingBlocks.length;
    treeBuildingBlocks.map((treeBuild, index) => {
      let spaces = [];
      for (let i = 0; i < numberOfSpacesOutsideTree - index; i++) {
        if ((i) % 3 === 0 && i !== 0) {
          continue;
        } else {
          spaces.push(" ");
        }
      }
      let spacesToString = spaces.join("");
      console.log(spacesToString + treeBuild + spacesToString);
    })
    
    /* For loop for creating the bottom of the tree */
    for (let i = 0; i < (heightOfTree * widthOfBaseOfTree); i++) {
      bottomOfTree.push("_");
    }
    const bottomOfTreeToString = bottomOfTree.join("")
    console.log(`|${bottomOfTreeToString}|`);
  
     /* For loop for creating the base of the tree */
    for (let i = 0; i < (blocksInTree); i++) {
      spacesForBaseOfTree.push("  ");
    }
    const spacesForBaseOfTreeString = spacesForBaseOfTree.join("");
    console.log(`${spacesForBaseOfTreeString}\\______/${spacesForBaseOfTreeString}`);
  }
                
  christmasTree();