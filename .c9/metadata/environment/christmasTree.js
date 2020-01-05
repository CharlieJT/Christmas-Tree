{"filter":false,"title":"christmasTree.js","tooltip":"/christmasTree.js","undoManager":{"mark":28,"position":28,"stack":[[{"start":{"row":0,"column":0},"end":{"row":81,"column":18},"action":"insert","lines":["const christmasTree = () => {","  ","    // Edit \"blocksInTree\" to change how many blocks are in the christmas tree","    ","    // vvvvvvvv","    ","    const blocksInTree = 6;","    ","    // ^^^^^^^^","    ","    // Parts of Tree","    const heightOfTree = (blocksInTree * 3) + 1;","    const spacesInsideOfTree = [];","    const spacesForBaseOfTree = [];","    const treeBuildingBlocks = [];","    const bottomOfTree = [];","    ","    // Calculation for width of base of tree","    let baseCalculation;","    switch(blocksInTree) {","      case 1:","        baseCalculation = 2.4;","        break;","      case 2:","        baseCalculation = 3.8;","        break;","      default:","        baseCalculation = 4.1;","    }","    const widthOfBaseOfTree = blocksInTree / ((heightOfTree - 3) / baseCalculation);","    ","    /* ","    For loop to create the building blocks for the tree with spacing inside of the tree ","    */","    for (let i = 0; i < heightOfTree; i++) {","      spacesInsideOfTree.push(\"  \");","      spacesToString = spacesInsideOfTree.join(\"\");","      if(i === 0) {","        treeBuildingBlocks.push(\"  |   \");","      } else if (i % 3 === 0 && (i + 1) !== heightOfTree) {","        spacesInsideOfTree.pop(\"   \");","        spacesToString = spacesInsideOfTree.join(\"\");","        treeBuildingBlocks.push(`/_${spacesToString}_\\\\`);","      } else {","        treeBuildingBlocks.push(`/${spacesToString}\\\\`);","      }","    }","    ","    /* ","    For loop to add each line in the \"treeBuildingBlocks\" array to the console with","    spacing outside of the tree","    */","    const numberOfSpacesOutsideTree = treeBuildingBlocks.length;","    treeBuildingBlocks.map((treeBuild, index) => {","      let spaces = [];","      for (let i = 0; i < numberOfSpacesOutsideTree - index; i++) {","        if ((i) % 3 === 0 && i !== 0) {","          continue;","        } else {","          spaces.push(\" \");","        }","      }","      let spacesToString = spaces.join(\"\");","      console.log(spacesToString + treeBuild + spacesToString);","    })","    ","    /* For loop for creating the bottom of the tree */","    for (let i = 0; i < (heightOfTree * widthOfBaseOfTree); i++) {","      bottomOfTree.push(\"_\");","    }","    const bottomOfTreeToString = bottomOfTree.join(\"\")","    console.log(`|${bottomOfTreeToString}|`);","  ","     /* For loop for creating the base of the tree */","    for (let i = 0; i < (blocksInTree); i++) {","      spacesForBaseOfTree.push(\"  \");","    }","    const spacesForBaseOfTreeString = spacesForBaseOfTree.join(\"\");","    console.log(`${spacesForBaseOfTreeString}\\\\______/${spacesForBaseOfTreeString}`);","  }","                ","  christmasTree();"],"id":1}],[{"start":{"row":0,"column":0},"end":{"row":81,"column":18},"action":"remove","lines":["const christmasTree = () => {","  ","    // Edit \"blocksInTree\" to change how many blocks are in the christmas tree","    ","    // vvvvvvvv","    ","    const blocksInTree = 6;","    ","    // ^^^^^^^^","    ","    // Parts of Tree","    const heightOfTree = (blocksInTree * 3) + 1;","    const spacesInsideOfTree = [];","    const spacesForBaseOfTree = [];","    const treeBuildingBlocks = [];","    const bottomOfTree = [];","    ","    // Calculation for width of base of tree","    let baseCalculation;","    switch(blocksInTree) {","      case 1:","        baseCalculation = 2.4;","        break;","      case 2:","        baseCalculation = 3.8;","        break;","      default:","        baseCalculation = 4.1;","    }","    const widthOfBaseOfTree = blocksInTree / ((heightOfTree - 3) / baseCalculation);","    ","    /* ","    For loop to create the building blocks for the tree with spacing inside of the tree ","    */","    for (let i = 0; i < heightOfTree; i++) {","      spacesInsideOfTree.push(\"  \");","      spacesToString = spacesInsideOfTree.join(\"\");","      if(i === 0) {","        treeBuildingBlocks.push(\"  |   \");","      } else if (i % 3 === 0 && (i + 1) !== heightOfTree) {","        spacesInsideOfTree.pop(\"   \");","        spacesToString = spacesInsideOfTree.join(\"\");","        treeBuildingBlocks.push(`/_${spacesToString}_\\\\`);","      } else {","        treeBuildingBlocks.push(`/${spacesToString}\\\\`);","      }","    }","    ","    /* ","    For loop to add each line in the \"treeBuildingBlocks\" array to the console with","    spacing outside of the tree","    */","    const numberOfSpacesOutsideTree = treeBuildingBlocks.length;","    treeBuildingBlocks.map((treeBuild, index) => {","      let spaces = [];","      for (let i = 0; i < numberOfSpacesOutsideTree - index; i++) {","        if ((i) % 3 === 0 && i !== 0) {","          continue;","        } else {","          spaces.push(\" \");","        }","      }","      let spacesToString = spaces.join(\"\");","      console.log(spacesToString + treeBuild + spacesToString);","    })","    ","    /* For loop for creating the bottom of the tree */","    for (let i = 0; i < (heightOfTree * widthOfBaseOfTree); i++) {","      bottomOfTree.push(\"_\");","    }","    const bottomOfTreeToString = bottomOfTree.join(\"\")","    console.log(`|${bottomOfTreeToString}|`);","  ","     /* For loop for creating the base of the tree */","    for (let i = 0; i < (blocksInTree); i++) {","      spacesForBaseOfTree.push(\"  \");","    }","    const spacesForBaseOfTreeString = spacesForBaseOfTree.join(\"\");","    console.log(`${spacesForBaseOfTreeString}\\\\______/${spacesForBaseOfTreeString}`);","  }","                ","  christmasTree();"],"id":21},{"start":{"row":0,"column":0},"end":{"row":83,"column":0},"action":"insert","lines":[" ","const christmasTree = () => {","  ","    // Edit \"blocksInTree\" to change how many blocks are in the christmas tree","    ","    // vvvvvvvv","    ","    const blocksInTree = 6;","    ","    // ^^^^^^^^","    ","    // Parts of Tree","    const heightOfTree = (blocksInTree * 3) + 1;","    const spacesInsideOfTree = [];","    const spacesForBaseOfTree = [];","    const treeBuildingBlocks = [];","    const bottomOfTree = [];","    ","    // Calculation for width of base of tree","    let baseCalculation;","    switch(blocksInTree) {","      case 1:","        baseCalculation = 2.4;","        break;","      case 2:","        baseCalculation = 3.8;","        break;","      default:","        baseCalculation = 4.1;","    }","    const widthOfBaseOfTree = blocksInTree / ((heightOfTree - 3) / baseCalculation);","    ","    /* ","    For loop to create the building blocks for the tree with spacing inside of the tree ","    */","    for (let i = 0; i < heightOfTree; i++) {","      spacesInsideOfTree.push(\"\\xa0\\xa0\");","      spacesToString = spacesInsideOfTree.join(\"\");","      if(i === 0) {","        treeBuildingBlocks.push(\"\\xa0\\xa0|\\xa0\\xa0\\xa0\");","      } else if (i % 3 === 0 && (i + 1) !== heightOfTree) {","        spacesInsideOfTree.pop(\"\\xa0\\xa0\\xa0\");","        spacesToString = spacesInsideOfTree.join(\"\");","        treeBuildingBlocks.push(`/_${spacesToString}_\\\\`);","      } else {","        treeBuildingBlocks.push(`/${spacesToString}\\\\`);","      }","    }","    ","    /* ","    For loop to add each line in the \"treeBuildingBlocks\" array to the console with","    spacing outside of the tree","    */","    const numberOfSpacesOutsideTree = treeBuildingBlocks.length;","    treeBuildingBlocks.map((treeBuild, index) => {","      let spaces = [];","      for (let i = 0; i < numberOfSpacesOutsideTree - index; i++) {","        if (i % 3 === 0 && i !== 0) {","          continue;","        } else {","          spaces.push(\"\\xa0\");","        }","      }","      let spacesToString = spaces.join(\"\");","      console.log(spacesToString + treeBuild + spacesToString);","    });","    ","    /* For loop for creating the bottom of the tree */","    for (let i = 0; i < (heightOfTree * widthOfBaseOfTree); i++) {","      bottomOfTree.push(\"_\");","    }","    const bottomOfTreeToString = bottomOfTree.join(\"\");","    console.log(`|${bottomOfTreeToString}|`);","  ","     /* For loop for creating the base of the tree */","    for (let i = 0; i < blocksInTree; i++) {","      spacesForBaseOfTree.push(\"\\xa0\\xa0\");","    }","    const spacesForBaseOfTreeString = spacesForBaseOfTree.join(\"\");","    console.log(`${spacesForBaseOfTreeString}\\\\______/${spacesForBaseOfTreeString}`);","  }","                ","  christmasTree();",""]}],[{"start":{"row":82,"column":18},"end":{"row":83,"column":0},"action":"remove","lines":["",""],"id":22}],[{"start":{"row":0,"column":0},"end":{"row":82,"column":18},"action":"remove","lines":[" ","const christmasTree = () => {","  ","    // Edit \"blocksInTree\" to change how many blocks are in the christmas tree","    ","    // vvvvvvvv","    ","    const blocksInTree = 6;","    ","    // ^^^^^^^^","    ","    // Parts of Tree","    const heightOfTree = (blocksInTree * 3) + 1;","    const spacesInsideOfTree = [];","    const spacesForBaseOfTree = [];","    const treeBuildingBlocks = [];","    const bottomOfTree = [];","    ","    // Calculation for width of base of tree","    let baseCalculation;","    switch(blocksInTree) {","      case 1:","        baseCalculation = 2.4;","        break;","      case 2:","        baseCalculation = 3.8;","        break;","      default:","        baseCalculation = 4.1;","    }","    const widthOfBaseOfTree = blocksInTree / ((heightOfTree - 3) / baseCalculation);","    ","    /* ","    For loop to create the building blocks for the tree with spacing inside of the tree ","    */","    for (let i = 0; i < heightOfTree; i++) {","      spacesInsideOfTree.push(\"\\xa0\\xa0\");","      spacesToString = spacesInsideOfTree.join(\"\");","      if(i === 0) {","        treeBuildingBlocks.push(\"\\xa0\\xa0|\\xa0\\xa0\\xa0\");","      } else if (i % 3 === 0 && (i + 1) !== heightOfTree) {","        spacesInsideOfTree.pop(\"\\xa0\\xa0\\xa0\");","        spacesToString = spacesInsideOfTree.join(\"\");","        treeBuildingBlocks.push(`/_${spacesToString}_\\\\`);","      } else {","        treeBuildingBlocks.push(`/${spacesToString}\\\\`);","      }","    }","    ","    /* ","    For loop to add each line in the \"treeBuildingBlocks\" array to the console with","    spacing outside of the tree","    */","    const numberOfSpacesOutsideTree = treeBuildingBlocks.length;","    treeBuildingBlocks.map((treeBuild, index) => {","      let spaces = [];","      for (let i = 0; i < numberOfSpacesOutsideTree - index; i++) {","        if (i % 3 === 0 && i !== 0) {","          continue;","        } else {","          spaces.push(\"\\xa0\");","        }","      }","      let spacesToString = spaces.join(\"\");","      console.log(spacesToString + treeBuild + spacesToString);","    });","    ","    /* For loop for creating the bottom of the tree */","    for (let i = 0; i < (heightOfTree * widthOfBaseOfTree); i++) {","      bottomOfTree.push(\"_\");","    }","    const bottomOfTreeToString = bottomOfTree.join(\"\");","    console.log(`|${bottomOfTreeToString}|`);","  ","     /* For loop for creating the base of the tree */","    for (let i = 0; i < blocksInTree; i++) {","      spacesForBaseOfTree.push(\"\\xa0\\xa0\");","    }","    const spacesForBaseOfTreeString = spacesForBaseOfTree.join(\"\");","    console.log(`${spacesForBaseOfTreeString}\\\\______/${spacesForBaseOfTreeString}`);","  }","                ","  christmasTree();"],"id":23},{"start":{"row":0,"column":0},"end":{"row":85,"column":0},"action":"insert","lines":["const christmasTree = () => {","  ","    /*","      Play around with the \"blocksInTree\" & \"heightOfBlocksInTree\" variables","      Edit \"blocksInTree\" to change how many blocks are in the christmas tree","      Edit \"heightOfBlocksInTree\" to change how high each of the blocks are in the christmas tree","    */","    ","    // vvvvvvvv","    ","    const blocksInTree = 6;","    ","    const heightOfBlocksInTree = 3;","  ","    // ^^^^^^^^","  ","  ","  ","    // Parts of Tree","    const heightOfTree = (blocksInTree * heightOfBlocksInTree) + 1;","    const spacesInsideOfTree = [];","    const spacesForBaseOfTree = [];","    const treeBuildingBlocks = [];","    const bottomOfTree = [];","    const lengthOfTreeBuild = [];","    ","    /* ","    For loop to create the building blocks for the tree with spacing inside of the tree ","    */","    for (let i = 0; i < heightOfTree; i++) {","      spacesInsideOfTree.push(\"\\xa0\\xa0\");","      spacesToString = spacesInsideOfTree.join(\"\");","      if(i === 0) {","        treeBuildingBlocks.push(\"\\xa0\\xa0|\\xa0\\xa0\\xa0\");","      } else if ((i + 1) === heightOfTree) {","        let treeBuild = `/${spacesToString}\\\\`;","        lengthOfTreeBuild.push(treeBuild);","        treeBuildingBlocks.push(treeBuild);","      } else if (i % heightOfBlocksInTree === 0) {","        spacesInsideOfTree.pop(\"\\xa0\\xa0\\xa0\");","        spacesToString = spacesInsideOfTree.join(\"\");","        treeBuildingBlocks.push(`/_${spacesToString}_\\\\`);","      } else {","        treeBuildingBlocks.push(`/${spacesToString}\\\\`);","      }","    }","    ","    /* ","    For loop to add each line in the \"treeBuildingBlocks\" array to the console with","    spacing outside of the tree","    */","    const numberOfSpacesOutsideTree = treeBuildingBlocks.length;","    treeBuildingBlocks.map((treeBuild, index) => {","      let spaces = [];","      for (let i = 0; i < numberOfSpacesOutsideTree - index; i++) {","        if (i % heightOfBlocksInTree === 0 && i !== 0) {","          continue;","        } else {","          spaces.push(\"\\xa0\");","        }","      }","      spacesToString = spaces.join(\"\");","      console.log(spacesToString + treeBuild + spacesToString);","    });","    ","    /* For loop for creating the bottom of the tree */","    for (let i = 0; i < lengthOfTreeBuild[0].length; i++) {","      bottomOfTree.push(\"_\");","    }","    const bottomOfTreeToString = bottomOfTree.join(\"\");","    console.log(`|${bottomOfTreeToString}|`);","  ","     /* For loop for creating the base of the tree */","    for (let i = 0; i < blocksInTree; i++) {","      for (let j = 0; j < heightOfBlocksInTree; j++) {","        spacesForBaseOfTree.push(\"\\xa0\");","      }","      spacesForBaseOfTree.pop();","    }","  ","    const spacesForBaseOfTreeString = spacesForBaseOfTree.join(\"\");","    console.log(`${spacesForBaseOfTreeString}\\\\______/${spacesForBaseOfTreeString}`);","  }","                ","  christmasTree();",""]}],[{"start":{"row":0,"column":0},"end":{"row":85,"column":0},"action":"remove","lines":["const christmasTree = () => {","  ","    /*","      Play around with the \"blocksInTree\" & \"heightOfBlocksInTree\" variables","      Edit \"blocksInTree\" to change how many blocks are in the christmas tree","      Edit \"heightOfBlocksInTree\" to change how high each of the blocks are in the christmas tree","    */","    ","    // vvvvvvvv","    ","    const blocksInTree = 6;","    ","    const heightOfBlocksInTree = 3;","  ","    // ^^^^^^^^","  ","  ","  ","    // Parts of Tree","    const heightOfTree = (blocksInTree * heightOfBlocksInTree) + 1;","    const spacesInsideOfTree = [];","    const spacesForBaseOfTree = [];","    const treeBuildingBlocks = [];","    const bottomOfTree = [];","    const lengthOfTreeBuild = [];","    ","    /* ","    For loop to create the building blocks for the tree with spacing inside of the tree ","    */","    for (let i = 0; i < heightOfTree; i++) {","      spacesInsideOfTree.push(\"\\xa0\\xa0\");","      spacesToString = spacesInsideOfTree.join(\"\");","      if(i === 0) {","        treeBuildingBlocks.push(\"\\xa0\\xa0|\\xa0\\xa0\\xa0\");","      } else if ((i + 1) === heightOfTree) {","        let treeBuild = `/${spacesToString}\\\\`;","        lengthOfTreeBuild.push(treeBuild);","        treeBuildingBlocks.push(treeBuild);","      } else if (i % heightOfBlocksInTree === 0) {","        spacesInsideOfTree.pop(\"\\xa0\\xa0\\xa0\");","        spacesToString = spacesInsideOfTree.join(\"\");","        treeBuildingBlocks.push(`/_${spacesToString}_\\\\`);","      } else {","        treeBuildingBlocks.push(`/${spacesToString}\\\\`);","      }","    }","    ","    /* ","    For loop to add each line in the \"treeBuildingBlocks\" array to the console with","    spacing outside of the tree","    */","    const numberOfSpacesOutsideTree = treeBuildingBlocks.length;","    treeBuildingBlocks.map((treeBuild, index) => {","      let spaces = [];","      for (let i = 0; i < numberOfSpacesOutsideTree - index; i++) {","        if (i % heightOfBlocksInTree === 0 && i !== 0) {","          continue;","        } else {","          spaces.push(\"\\xa0\");","        }","      }","      spacesToString = spaces.join(\"\");","      console.log(spacesToString + treeBuild + spacesToString);","    });","    ","    /* For loop for creating the bottom of the tree */","    for (let i = 0; i < lengthOfTreeBuild[0].length; i++) {","      bottomOfTree.push(\"_\");","    }","    const bottomOfTreeToString = bottomOfTree.join(\"\");","    console.log(`|${bottomOfTreeToString}|`);","  ","     /* For loop for creating the base of the tree */","    for (let i = 0; i < blocksInTree; i++) {","      for (let j = 0; j < heightOfBlocksInTree; j++) {","        spacesForBaseOfTree.push(\"\\xa0\");","      }","      spacesForBaseOfTree.pop();","    }","  ","    const spacesForBaseOfTreeString = spacesForBaseOfTree.join(\"\");","    console.log(`${spacesForBaseOfTreeString}\\\\______/${spacesForBaseOfTreeString}`);","  }","                ","  christmasTree();",""],"id":24},{"start":{"row":0,"column":0},"end":{"row":85,"column":0},"action":"insert","lines":["const christmasTree = () => {","  ","    /*","      Play around with the \"blocksInTree\" & \"heightOfBlocksInTree\" variables","      Edit \"blocksInTree\" to change how many blocks are in the christmas tree","      Edit \"heightOfBlocksInTree\" to change how high each of the blocks are in the christmas tree","    */","    ","    // vvvvvvvv","    ","    const blocksInTree = 6;","    ","    const heightOfBlocksInTree = 3;","  ","    // ^^^^^^^^","  ","  ","  ","    // Parts of Tree","    const heightOfTree = (blocksInTree * heightOfBlocksInTree) + 1;","    const spacesInsideOfTree = [];","    const spacesForBaseOfTree = [];","    const treeBuildingBlocks = [];","    const bottomOfTree = [];","    const lengthOfTreeBuild = [];","    ","    /* ","    For loop to create the building blocks for the tree with spacing inside of the tree ","    */","    for (let i = 0; i < heightOfTree; i++) {","      spacesInsideOfTree.push(\"\\xa0\\xa0\");","      spacesToString = spacesInsideOfTree.join(\"\");","      let treeBuild = `/${spacesToString}\\\\`;","      if(i === 0) {","        treeBuildingBlocks.push(\"\\xa0\\xa0|\\xa0\\xa0\\xa0\");","      } else if ((i + 1) === heightOfTree) {","        lengthOfTreeBuild.push(treeBuild);","        treeBuildingBlocks.push(treeBuild);","      } else if (i % heightOfBlocksInTree === 0) {","        spacesInsideOfTree.pop(\"\\xa0\\xa0\\xa0\");","        spacesToString = spacesInsideOfTree.join(\"\");","        treeBuildingBlocks.push(`/_${spacesToString}_\\\\`);","      } else {","        treeBuildingBlocks.push(treeBuild);","      }","    }","    ","    /* ","    For loop to add each line in the \"treeBuildingBlocks\" array to the console with","    spacing outside of the tree","    */","    const numberOfSpacesOutsideTree = treeBuildingBlocks.length;","    treeBuildingBlocks.map((treeBuild, index) => {","      let spaces = [];","      for (let i = 0; i < numberOfSpacesOutsideTree - index; i++) {","        if (i % heightOfBlocksInTree === 0 && i !== 0) {","          continue;","        } else {","          spaces.push(\"\\xa0\");","        }","      }","      spacesToString = spaces.join(\"\");","      console.log(spacesToString + treeBuild + spacesToString);","    });","    ","    /* For loop for creating the bottom of the tree */","    for (let i = 0; i < lengthOfTreeBuild[0].length; i++) {","      bottomOfTree.push(\"_\");","    }","    const bottomOfTreeToString = bottomOfTree.join(\"\");","    console.log(`|${bottomOfTreeToString}|`);","  ","     /* For loop for creating the base of the tree */","    for (let i = 0; i < blocksInTree; i++) {","      for (let j = 0; j < heightOfBlocksInTree; j++) {","        spacesForBaseOfTree.push(\"\\xa0\");","      }","      spacesForBaseOfTree.pop();","    }","  ","    const spacesForBaseOfTreeString = spacesForBaseOfTree.join(\"\");","    console.log(`${spacesForBaseOfTreeString}\\\\______/${spacesForBaseOfTreeString}`);","  }","                ","  christmasTree();",""]}],[{"start":{"row":0,"column":0},"end":{"row":85,"column":0},"action":"remove","lines":["const christmasTree = () => {","  ","    /*","      Play around with the \"blocksInTree\" & \"heightOfBlocksInTree\" variables","      Edit \"blocksInTree\" to change how many blocks are in the christmas tree","      Edit \"heightOfBlocksInTree\" to change how high each of the blocks are in the christmas tree","    */","    ","    // vvvvvvvv","    ","    const blocksInTree = 6;","    ","    const heightOfBlocksInTree = 3;","  ","    // ^^^^^^^^","  ","  ","  ","    // Parts of Tree","    const heightOfTree = (blocksInTree * heightOfBlocksInTree) + 1;","    const spacesInsideOfTree = [];","    const spacesForBaseOfTree = [];","    const treeBuildingBlocks = [];","    const bottomOfTree = [];","    const lengthOfTreeBuild = [];","    ","    /* ","    For loop to create the building blocks for the tree with spacing inside of the tree ","    */","    for (let i = 0; i < heightOfTree; i++) {","      spacesInsideOfTree.push(\"\\xa0\\xa0\");","      spacesToString = spacesInsideOfTree.join(\"\");","      let treeBuild = `/${spacesToString}\\\\`;","      if(i === 0) {","        treeBuildingBlocks.push(\"\\xa0\\xa0|\\xa0\\xa0\\xa0\");","      } else if ((i + 1) === heightOfTree) {","        lengthOfTreeBuild.push(treeBuild);","        treeBuildingBlocks.push(treeBuild);","      } else if (i % heightOfBlocksInTree === 0) {","        spacesInsideOfTree.pop(\"\\xa0\\xa0\\xa0\");","        spacesToString = spacesInsideOfTree.join(\"\");","        treeBuildingBlocks.push(`/_${spacesToString}_\\\\`);","      } else {","        treeBuildingBlocks.push(treeBuild);","      }","    }","    ","    /* ","    For loop to add each line in the \"treeBuildingBlocks\" array to the console with","    spacing outside of the tree","    */","    const numberOfSpacesOutsideTree = treeBuildingBlocks.length;","    treeBuildingBlocks.map((treeBuild, index) => {","      let spaces = [];","      for (let i = 0; i < numberOfSpacesOutsideTree - index; i++) {","        if (i % heightOfBlocksInTree === 0 && i !== 0) {","          continue;","        } else {","          spaces.push(\"\\xa0\");","        }","      }","      spacesToString = spaces.join(\"\");","      console.log(spacesToString + treeBuild + spacesToString);","    });","    ","    /* For loop for creating the bottom of the tree */","    for (let i = 0; i < lengthOfTreeBuild[0].length; i++) {","      bottomOfTree.push(\"_\");","    }","    const bottomOfTreeToString = bottomOfTree.join(\"\");","    console.log(`|${bottomOfTreeToString}|`);","  ","     /* For loop for creating the base of the tree */","    for (let i = 0; i < blocksInTree; i++) {","      for (let j = 0; j < heightOfBlocksInTree; j++) {","        spacesForBaseOfTree.push(\"\\xa0\");","      }","      spacesForBaseOfTree.pop();","    }","  ","    const spacesForBaseOfTreeString = spacesForBaseOfTree.join(\"\");","    console.log(`${spacesForBaseOfTreeString}\\\\______/${spacesForBaseOfTreeString}`);","  }","                ","  christmasTree();",""],"id":25},{"start":{"row":0,"column":0},"end":{"row":94,"column":18},"action":"insert","lines":["const christmasTree = () => {","  ","    /*","      Play around with the \"blocksInTree\" & \"heightOfBlocksInTree\" variables","      Edit \"blocksInTree\" to change how many blocks are in the christmas tree","      Edit \"heightOfBlocksInTree\" to change how high each of the blocks are in the christmas tree","    */","    ","    // vvvvvvvv","    ","    const blocksInTree = 6;","    ","    const heightOfBlocksInTree = 3;","  ","    // ^^^^^^^^","  ","  ","  ","    // Parts of Tree","    const heightOfTree = (blocksInTree * heightOfBlocksInTree) + 1;","    const spacesInsideOfTree = [];","    const spacesForBaseOfTree = [];","    const treeBuildingBlocks = [];","    const bottomOfTree = [];","    const lengthOfTreeBuild = [];","    ","    /* ","    For loop to create the building blocks for the tree with spacing inside of the tree ","    */","    for (let i = 0; i < heightOfTree; i++) {","      if (i === 0) {","        treeBuildingBlocks.push(\"\\xa0|\\xa0\");","      } else if (i === 1) {","        spacesInsideOfTree.push(\"\\xa0\");","      } else {","        spacesInsideOfTree.push(\"\\xa0\\xa0\");","      }","      spacesToString = spacesInsideOfTree.join(\"\");","      let treeBuild = `/${spacesToString}\\\\`;","      if(i === 0) {","        ","      } else if ((i + 1) === heightOfTree) {","        lengthOfTreeBuild.push(treeBuild);","        treeBuildingBlocks.push(treeBuild);","      } else if (i % heightOfBlocksInTree === 0) {","        spacesInsideOfTree.pop(\"\\xa0\\xa0\\xa0\");","        spacesToString = spacesInsideOfTree.join(\"\");","        treeBuildingBlocks.push(`/_${spacesToString}_\\\\`);","      } else {","        treeBuildingBlocks.push(treeBuild);","      }","    }","    ","    /* ","    For loop to add each line in the \"treeBuildingBlocks\" array to the console with","    spacing outside of the tree","    */","    const numberOfSpacesOutsideTree = treeBuildingBlocks.length;","    treeBuildingBlocks.map((treeBuild, index) => {","      let spaces = [];","      for (let i = 0; i < numberOfSpacesOutsideTree - index; i++) {","        if (i % heightOfBlocksInTree === 0 && i !== 0) {","          continue;","        } else {","          spaces.push(\"\\xa0\");","        }","      }","      spacesToString = spaces.join(\"\");","      console.log(spacesToString + treeBuild + spacesToString);","    });","    ","    /* For loop for creating the bottom of the tree */","    for (let i = 0; i < lengthOfTreeBuild[0].length; i++) {","      bottomOfTree.push(\"_\");","    }","    const bottomOfTreeToString = bottomOfTree.join(\"\");","    console.log(`|${bottomOfTreeToString}|`);","  ","    /* For loop for creating the base of the tree */","    for (let i = 0; i < blocksInTree; i++) {","      for (let j = 0; j < heightOfBlocksInTree; j++) {","        spacesForBaseOfTree.push(\"\\xa0\");","      }","      spacesForBaseOfTree.pop();","    }","    /* Final for loop for the removing the remaining spaces in the tree */","    for (let i = 0; i < 2; i++) {","      spacesForBaseOfTree.pop();","    }","  ","    const spacesForBaseOfTreeString = spacesForBaseOfTree.join(\"\");","    console.log(`${spacesForBaseOfTreeString}\\\\_______/${spacesForBaseOfTreeString}`);","  }","                ","  christmasTree();"]}],[{"start":{"row":16,"column":2},"end":{"row":17,"column":2},"action":"remove","lines":["","  "],"id":26}],[{"start":{"row":14,"column":1},"end":{"row":14,"column":15},"action":"remove","lines":["   // ^^^^^^^^"],"id":27},{"start":{"row":14,"column":0},"end":{"row":14,"column":1},"action":"remove","lines":[" "]},{"start":{"row":13,"column":2},"end":{"row":14,"column":0},"action":"remove","lines":["",""]}],[{"start":{"row":8,"column":0},"end":{"row":8,"column":15},"action":"remove","lines":["    // vvvvvvvv"],"id":28}],[{"start":{"row":10,"column":27},"end":{"row":10,"column":28},"action":"insert","lines":[" "],"id":29},{"start":{"row":10,"column":28},"end":{"row":10,"column":29},"action":"insert","lines":["/"]},{"start":{"row":10,"column":29},"end":{"row":10,"column":30},"action":"insert","lines":["/"]}],[{"start":{"row":10,"column":30},"end":{"row":10,"column":31},"action":"insert","lines":[" "],"id":30}],[{"start":{"row":10,"column":31},"end":{"row":10,"column":32},"action":"insert","lines":["C"],"id":31},{"start":{"row":10,"column":32},"end":{"row":10,"column":33},"action":"insert","lines":["h"]},{"start":{"row":10,"column":33},"end":{"row":10,"column":34},"action":"insert","lines":["a"]},{"start":{"row":10,"column":34},"end":{"row":10,"column":35},"action":"insert","lines":["n"]},{"start":{"row":10,"column":35},"end":{"row":10,"column":36},"action":"insert","lines":["e"]}],[{"start":{"row":10,"column":35},"end":{"row":10,"column":36},"action":"remove","lines":["e"],"id":32}],[{"start":{"row":10,"column":35},"end":{"row":10,"column":36},"action":"insert","lines":["g"],"id":33},{"start":{"row":10,"column":36},"end":{"row":10,"column":37},"action":"insert","lines":["e"]}],[{"start":{"row":10,"column":37},"end":{"row":10,"column":38},"action":"insert","lines":[" "],"id":34},{"start":{"row":10,"column":38},"end":{"row":10,"column":39},"action":"insert","lines":["h"]},{"start":{"row":10,"column":39},"end":{"row":10,"column":40},"action":"insert","lines":["o"]},{"start":{"row":10,"column":40},"end":{"row":10,"column":41},"action":"insert","lines":["w"]}],[{"start":{"row":10,"column":41},"end":{"row":10,"column":42},"action":"insert","lines":[" "],"id":35},{"start":{"row":10,"column":42},"end":{"row":10,"column":43},"action":"insert","lines":["m"]},{"start":{"row":10,"column":43},"end":{"row":10,"column":44},"action":"insert","lines":["a"]},{"start":{"row":10,"column":44},"end":{"row":10,"column":45},"action":"insert","lines":["n"]},{"start":{"row":10,"column":45},"end":{"row":10,"column":46},"action":"insert","lines":["y"]}],[{"start":{"row":10,"column":46},"end":{"row":10,"column":47},"action":"insert","lines":[" "],"id":36},{"start":{"row":10,"column":47},"end":{"row":10,"column":48},"action":"insert","lines":["b"]},{"start":{"row":10,"column":48},"end":{"row":10,"column":49},"action":"insert","lines":["l"]},{"start":{"row":10,"column":49},"end":{"row":10,"column":50},"action":"insert","lines":["o"]},{"start":{"row":10,"column":50},"end":{"row":10,"column":51},"action":"insert","lines":["c"]},{"start":{"row":10,"column":51},"end":{"row":10,"column":52},"action":"insert","lines":["k"]},{"start":{"row":10,"column":52},"end":{"row":10,"column":53},"action":"insert","lines":["s"]}],[{"start":{"row":10,"column":53},"end":{"row":10,"column":54},"action":"insert","lines":[" "],"id":37},{"start":{"row":10,"column":54},"end":{"row":10,"column":55},"action":"insert","lines":["t"]},{"start":{"row":10,"column":55},"end":{"row":10,"column":56},"action":"insert","lines":["h"]},{"start":{"row":10,"column":56},"end":{"row":10,"column":57},"action":"insert","lines":["e"]},{"start":{"row":10,"column":57},"end":{"row":10,"column":58},"action":"insert","lines":["r"]},{"start":{"row":10,"column":58},"end":{"row":10,"column":59},"action":"insert","lines":["e"]}],[{"start":{"row":10,"column":59},"end":{"row":10,"column":60},"action":"insert","lines":[" "],"id":38},{"start":{"row":10,"column":60},"end":{"row":10,"column":61},"action":"insert","lines":["a"]},{"start":{"row":10,"column":61},"end":{"row":10,"column":62},"action":"insert","lines":["r"]},{"start":{"row":10,"column":62},"end":{"row":10,"column":63},"action":"insert","lines":["e"]}],[{"start":{"row":10,"column":63},"end":{"row":10,"column":64},"action":"insert","lines":[" "],"id":39},{"start":{"row":10,"column":64},"end":{"row":10,"column":65},"action":"insert","lines":["i"]},{"start":{"row":10,"column":65},"end":{"row":10,"column":66},"action":"insert","lines":["n"]}],[{"start":{"row":10,"column":66},"end":{"row":10,"column":67},"action":"insert","lines":[" "],"id":40},{"start":{"row":10,"column":67},"end":{"row":10,"column":68},"action":"insert","lines":["t"]},{"start":{"row":10,"column":68},"end":{"row":10,"column":69},"action":"insert","lines":["h"]},{"start":{"row":10,"column":69},"end":{"row":10,"column":70},"action":"insert","lines":["e"]}],[{"start":{"row":10,"column":70},"end":{"row":10,"column":71},"action":"insert","lines":[" "],"id":41},{"start":{"row":10,"column":71},"end":{"row":10,"column":72},"action":"insert","lines":["t"]},{"start":{"row":10,"column":72},"end":{"row":10,"column":73},"action":"insert","lines":["r"]},{"start":{"row":10,"column":73},"end":{"row":10,"column":74},"action":"insert","lines":["e"]},{"start":{"row":10,"column":74},"end":{"row":10,"column":75},"action":"insert","lines":["e"]}],[{"start":{"row":12,"column":35},"end":{"row":12,"column":36},"action":"insert","lines":[" "],"id":42}],[{"start":{"row":12,"column":36},"end":{"row":12,"column":83},"action":"insert","lines":["// Change how many blocks there are in the tree"],"id":43}],[{"start":{"row":12,"column":46},"end":{"row":12,"column":54},"action":"remove","lines":["how many"],"id":44},{"start":{"row":12,"column":46},"end":{"row":12,"column":47},"action":"insert","lines":["t"]},{"start":{"row":12,"column":47},"end":{"row":12,"column":48},"action":"insert","lines":["h"]},{"start":{"row":12,"column":48},"end":{"row":12,"column":49},"action":"insert","lines":["e"]}],[{"start":{"row":12,"column":49},"end":{"row":12,"column":50},"action":"insert","lines":[" "],"id":45},{"start":{"row":12,"column":50},"end":{"row":12,"column":51},"action":"insert","lines":["h"]},{"start":{"row":12,"column":51},"end":{"row":12,"column":52},"action":"insert","lines":["e"]},{"start":{"row":12,"column":52},"end":{"row":12,"column":53},"action":"insert","lines":["i"]},{"start":{"row":12,"column":53},"end":{"row":12,"column":54},"action":"insert","lines":["g"]},{"start":{"row":12,"column":54},"end":{"row":12,"column":55},"action":"insert","lines":["h"]},{"start":{"row":12,"column":55},"end":{"row":12,"column":56},"action":"insert","lines":["t"]}],[{"start":{"row":12,"column":56},"end":{"row":12,"column":57},"action":"insert","lines":[" "],"id":46},{"start":{"row":12,"column":57},"end":{"row":12,"column":58},"action":"insert","lines":["o"]},{"start":{"row":12,"column":58},"end":{"row":12,"column":59},"action":"insert","lines":["f"]}],[{"start":{"row":12,"column":59},"end":{"row":12,"column":60},"action":"insert","lines":[" "],"id":47},{"start":{"row":12,"column":60},"end":{"row":12,"column":61},"action":"insert","lines":["t"]},{"start":{"row":12,"column":61},"end":{"row":12,"column":62},"action":"insert","lines":["h"]},{"start":{"row":12,"column":62},"end":{"row":12,"column":63},"action":"insert","lines":["e"]}],[{"start":{"row":12,"column":70},"end":{"row":12,"column":80},"action":"remove","lines":[" there are"],"id":48}]]},"ace":{"folds":[],"scrolltop":1162,"scrollleft":0,"selection":{"start":{"row":84,"column":23},"end":{"row":84,"column":23},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":{"row":71,"state":"start","mode":"ace/mode/javascript"}},"timestamp":1578261754908,"hash":"8367bdca97bd295aa0b2ddf793e8cf510db4f776"}