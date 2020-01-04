const christmasTree = () => {
  
    /*
      Play around with the "blocksInTree" & "heightOfBlocksInTree" variables
      Edit "blocksInTree" to change how many blocks are in the christmas tree
      Edit "heightOfBlocksInTree" to change how high each of the blocks are in the christmas tree
    */
    
    // vvvvvvvv
    
    const blocksInTree = 6;
    
    const heightOfBlocksInTree = 3;
  
    // ^^^^^^^^
  
  
  
    // Parts of Tree
    const heightOfTree = (blocksInTree * heightOfBlocksInTree) + 1;
    const spacesInsideOfTree = [];
    const spacesForBaseOfTree = [];
    const treeBuildingBlocks = [];
    const bottomOfTree = [];
    const lengthOfTreeBuild = [];
    
    /* 
    For loop to create the building blocks for the tree with spacing inside of the tree 
    */
    for (let i = 0; i < heightOfTree; i++) {
      spacesInsideOfTree.push("\xa0\xa0");
      spacesToString = spacesInsideOfTree.join("");
      let treeBuild = `/${spacesToString}\\`;
      if(i === 0) {
        treeBuildingBlocks.push("\xa0\xa0|\xa0\xa0\xa0");
      } else if ((i + 1) === heightOfTree) {
        lengthOfTreeBuild.push(treeBuild);
        treeBuildingBlocks.push(treeBuild);
      } else if (i % heightOfBlocksInTree === 0) {
        spacesInsideOfTree.pop("\xa0\xa0\xa0");
        spacesToString = spacesInsideOfTree.join("");
        treeBuildingBlocks.push(`/_${spacesToString}_\\`);
      } else {
        treeBuildingBlocks.push(treeBuild);
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
        if (i % heightOfBlocksInTree === 0 && i !== 0) {
          continue;
        } else {
          spaces.push("\xa0");
        }
      }
      spacesToString = spaces.join("");
      console.log(spacesToString + treeBuild + spacesToString);
    });
    
    /* For loop for creating the bottom of the tree */
    for (let i = 0; i < lengthOfTreeBuild[0].length; i++) {
      bottomOfTree.push("_");
    }
    const bottomOfTreeToString = bottomOfTree.join("");
    console.log(`|${bottomOfTreeToString}|`);
  
     /* For loop for creating the base of the tree */
    for (let i = 0; i < blocksInTree; i++) {
      for (let j = 0; j < heightOfBlocksInTree; j++) {
        spacesForBaseOfTree.push("\xa0");
      }
      spacesForBaseOfTree.pop();
    }
  
    const spacesForBaseOfTreeString = spacesForBaseOfTree.join("");
    console.log(`${spacesForBaseOfTreeString}\\______/${spacesForBaseOfTreeString}`);
  }
                
  christmasTree();
