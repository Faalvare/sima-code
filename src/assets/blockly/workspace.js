  var blocklyArea = document.getElementById('blocklyArea');
  var blocklyDiv = document.getElementById('blocklyDiv');
  var toolbox = document.getElementById("toolbox");
  var options = {
    toolbox : toolbox,
    collapse : true,
    comments : true,
    disable : true,
    maxBlocks : Infinity,
    trashcan : true,
    horizontalLayout : false,
    toolboxPosition : 'start',
    css : true,
    media : 'https://blockly-demo.appspot.com/static/media/',
    rtl : false,
    scrollbars : true,
    sounds : true,
    oneBasedIndex : true,
    zoom : {
      controls : true,
      wheel : true,
      startScale : 1.2,
      maxcale : 3,
      minScale : 0.3
    }
  };
  var workspace = Blockly.inject(blocklyDiv, options);
  //var workspaceBlocks = document.getElementById("workspaceBlocks");
  //Blockly.Xml.domToWorkspace(workspace, workspaceBlocks);

  var onresize = function(e) {
    // Compute the absolute coordinates and dimensions of blocklyArea.
    var element = blocklyArea;
    var x = 0;
    var y = 0;
    do {
      x += element.offsetLeft;
      y += element.offsetTop;
      element = element.offsetParent;
    } while (element);
    // Position blocklyDiv over blocklyArea.
    blocklyDiv.style.left = x + 'px';
    blocklyDiv.style.top = y + 'px';
    blocklyDiv.style.height = 80 + '%';
    blocklyDiv.style.width = blocklyArea.offsetWidth + 'px';
  };
  window.addEventListener('resize', onresize, false);
  onresize();
  Blockly.svgResize(workspace);
