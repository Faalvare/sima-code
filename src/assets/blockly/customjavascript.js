//Funciones customblocks
var command = [];
var step;
var direction;
var joints;
var Forward = 'Forward';
var Backward = 'Backward';
var Right = 'Right';
var Left = 'Left';
var Arm = 'Arm';
var Leg = 'Leg';
var Knee = 'Knee';
var Foot = 'Foot';
var Up = 'Up';
var Down = 'Down';
var Both = 'Both';
var Kick = 'Kick';
var Swing = 'Swing';

/**
 * Inicia las secuencias de comando
 */
function start() {
  command = [];
  return command;
}

/** 
 * MOVIMIENTOS
 **/

/**
 * Genera los comandos para caminar al frente y atrás
 */
function move(direction, step) {
  if (direction == 'Backward') {
    for (var count = 0; count < step; count++) {
      command.push({
        comando: 's',
        expresion: null,
        video: null,
        imagen: null,
        sonido: null
      });
      // command = String(command) + String('s');
    }
  } else {
    for (var count = 0; count < step; count++) {
      command.push({
        comando: 'a',
        expresion: null,
        video: null,
        imagen: null,
        sonido: null
      });
      // command = String(command) + String('a');
    }
  }
  return command;
}

/**
 * Genera los comandos para caminar a los lados
 */
/* function turn(direction) {
  if (direction == 'Left') {
    command = String(command) + String('d');
  } else {
    command = String(command) + String('f');
  }
  return command;
} */

/**
 * Sima saluda
 */
function salute() {
  const options = Array('S', 'F', 'k');
  command.push({
    comando: options[Math.floor(Math.random()*options.length)],
    expresion: null,
    video: null,
    imagen: null,
    sonido: null
  });
  //command = String(command) + String('k');
  return command;
}

/**
 * Sima baila
 */
function dance() {
  const options = Array('l', 'd');
  command.push({
    comando: options[Math.floor(Math.random()*options.length)],
    expresion: null,
    video: null,
    imagen: null,
    sonido: null
  });
  //command = String(command) + String('l');
  return command;
}

/**
 * Sima para
 */
function stop() {
  command.push({
    comando: 'j',
    expresion: null,
    video: null,
    imagen: null,
    sonido: null
  });
  //command = String(command) + String('j');
  return command;
}

/**
 * Sima se Sorprende
 */
function surprise() {
  command.push({
    comando: 'D',
    expresion: null,
    video: null,
    imagen: null,
    sonido: null
  });
  // command = String(command) + String('D');
  return command;
}

/**
 * Sima baila
 */
function off() {
  command.push({
    comando: 'c',
    expresion: null,
    video: null,
    imagen: null,
    sonido: null
  });
  //command = String(command) + String('c');
  return command;
}

/**
 * Sima celebra
 */
function celebrate() {
  command.push({
    comando: 'k',
    expresion: null,
    video: null,
    imagen: null,
    sonido: null
  });
  //command = String(command) + String('b');
  return command;
}

/**
 * Sima hace una ola
 */
function wave() {
  command.push({
    comando: 'k',
    expresion: null,
    video: null,
    imagen: null,
    sonido: null
  });
  //command = String(command) + String('J');
  return command;
}

function turn(direction) {
  if (direction == 'Left') {
    command.push({
      comando: 'd',
      expresion: null,
      video: null,
      imagen: null,
      sonido: null
    });
    //command = String(command) + String('d');
  } else {
    command.push({
      comando: 'f',
      expresion: null,
      video: null,
      imagen: null,
      sonido: null
    });
    //command = String(command) + String('f');
  }
  return command;
}

function stretch(side) {
  if (side == 'Right') {
    command.push({
      comando: 'L',
      expresion: null,
      video: null,
      imagen: null,
      sonido: null
    });
    //command = String(command) + String('d');
  } else {
    command.push({
      comando: 'Z',
      expresion: null,
      video: null,
      imagen: null,
      sonido: null
    });
    //command = String(command) + String('f');
  }
  return command;
}

function move_hands(hand, direction) {
  if (hand == 'Both') {
    if (direction == 'Up') {
      command.push({
        comando: 'n',
        expresion: null,
        video: null,
        imagen: null,
        sonido: null
      });
    } else {
      command.push({
        comando: 'm',
        expresion: null,
        video: null,
        imagen: null,
        sonido: null
      });
    }
  } else if (hand == 'Right') {
    if(direction == 'Up') {
      command.push({
        comando: 'p',
        expresion: null,
        video: null,
        imagen: null,
        sonido: null
      });
    } else {
      command.push({
        comando: 'x',
        expresion: null,
        video: null,
        imagen: null,
        sonido: null
      });
    }
  } else {
    if(direction == 'Up') {
      command.push({
        comando: 'o',
        expresion: null,
        video: null,
        imagen: null,
        sonido: null
      });
    } else {
      command.push({
        comando: 'z',
        expresion: null,
        video: null,
        imagen: null,
        sonido: null
      });
    }
  }
  return command;
}


function move_legs(leg, action) {
  if (leg == 'Right') {
    if(action == 'Kick') {
      command.push({
        comando: 'O',
        expresion: null,
        video: null,
        imagen: null,
        sonido: null
      });
    } else {
      command.push({
        comando: 'G',
        expresion: null,
        video: null,
        imagen: null,
        sonido: null
      });
    }
  } else {
    if(action == 'Kick') {
      command.push({
        comando: '9',
        expresion: null,
        video: null,
        imagen: null,
        sonido: null
      });
    } else {
      command.push({
        comando: 'H',
        expresion: null,
        video: null,
        imagen: null,
        sonido: null
      });
    }
  }
  return command;
}

/**
 * Sima se balancea
 */
function balance() {
  command.push({
    comando: 'v',
    expresion: null,
    video: null,
    imagen: null,
    sonido: null
  });
  //command = String(command) + String('J');
  return command;
}

/**
 * Sima abraza
 */
function hug() {
  command.push({
    comando: 'X',
    expresion: null,
    video: null,
    imagen: null,
    sonido: null
  });
  //command = String(command) + String('J');
  return command;
}
/**
 * Genera el movimiento de una de las articulaciones
 */
/* function joint(joints, side, angle) {
  if (side == 'Left') {
    if (joints == 'Leg') {
      if (angle > 90) {
        for (var count = 0; count < angle - 90; count++) {
          command = String(command) + String('e');
        }
      } else {
        for (var count = 0; count < 90 - angle; count++) {
          command = String(command) + String('3');
        }
      }
    } else if (joints == 'Knee') {
      if (angle > 90) {
        for (var count = 0; count < angle - 90; count++) {
          command = String(command) + String('w');
        }
      } else {
        for (var count = 0; count < 90 - angle; count++) {
          command = String(command) + String('2');
        }
      }
    } else if (joints == 'Foot') {
      if (angle > 90) {
        for (var count = 0; count < angle - 90; count++) {
          command = String(command) + String('q');
        }
      } else {
        for (var count = 0; count < 90 - angle; count++) {
          command = String(command) + String('1');
        }
      }
    } else {
      if (angle > 90) {
        for (var count = 0; count < angle - 90; count++) {
          command = String(command) + String('r');
        }
      } else {
        for (var count = 0; count < 90 - angle; count++) {
          command = String(command) + String('4');
        }
      }
    }
  } else {
    if (joints == 'Leg') {
      if (angle > 90) {
        for (var count = 0; count < angle - 90; count++) {
          command = String(command) + String('u');
        }
      } else {
        for (var count = 0; count < 90 - angle; count++) {
          command = String(command) + String('7');
        }
      }
    } else if (joints == 'Knee') {
      if (angle > 90) {
        for (var count = 0; count < angle - 90; count++) {
          command = String(command) + String('y');
        }
      } else {
        for (var count = 0; count < 90 - angle; count++) {
          command = String(command) + String('6');
        }
      }
    } else if (joints == 'Foot') {
      if (angle > 90) {
        for (var count = 0; count < angle - 90; count++) {
          command = String(command) + String('t');
        }
      } else {
        for (var count = 0; count < 90 - angle; count++) {
          command = String(command) + String('5');
        }
      }
    } else {
      if (angle > 90) {
        for (var count = 0; count < angle - 90; count++) {
          command = String(command) + String('i');
        }
      } else {
        for (var count = 0; count < 90 - angle; count++) {
          command = String(command) + String('8');
        }
      }
    }
  }
  return command;
} */

/**
 * Sima abraza
 */
function walkSlowly() {
  command.push({
    comando: 'K',
    expresion: null,
    video: null,
    imagen: null,
    sonido: null
  });
  //command = String(command) + String('J');
  return command;
}

Blockly.JavaScript['start'] = function (block) {
  var statements_commands = Blockly.JavaScript.statementToCode(block, 'commands');
  // var command = '';
  // TODO: Assemble JavaScript into code variable.
  //'var command = \'\';\n'+
  //var code = 'start();\n'+statements_commands+';';
  var code = '  start();\n' + statements_commands;
  return code;
};

Blockly.JavaScript['move'] = function (block) {
  var direction = block.getFieldValue('direction');
  var step = Blockly.JavaScript.valueToCode(block, 'steps', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = 'move(' + direction + ',' + step + ');\n';//'move('+direction+', '+step+');\n';
  return code;
};

Blockly.JavaScript['turn'] = function (block) {
  var direction = block.getFieldValue('direction');
  // TODO: Assemble JavaScript into code variable.
  var code = 'turn(' + direction + ');\n';
  return code;
};

Blockly.JavaScript['salute'] = function (block) {
  // TODO: Assemble JavaScript into code variable.
  var code = 'salute();\n';
  return code;
};

Blockly.JavaScript['dance'] = function (block) {
  // TODO: Assemble JavaScript into code variable.
  var code = 'dance();\n';
  return code;
};

Blockly.JavaScript['stop'] = function (block) {
  // TODO: Assemble JavaScript into code variable.
  var code = 'stop();\n';
  return code;
};

Blockly.JavaScript['surprise'] = function (block) {
  // TODO: Assemble JavaScript into code variable.
  var code = 'surprise();\n';
  return code;
};

Blockly.JavaScript['off'] = function (block) {
  // TODO: Assemble JavaScript into code variable.
  var code = 'off();\n';
  return code;
};

Blockly.JavaScript['celebrate'] = function (block) {
  // TODO: Assemble JavaScript into code variable.
  var code = 'celebrate();\n';
  return code;
};

Blockly.JavaScript['wave'] = function (block) {
  // TODO: Assemble JavaScript into code variable.
  var code = 'wave();\n';
  return code;
};

Blockly.JavaScript['dance'] = function (block) {
  // TODO: Assemble JavaScript into code variable.
  var code = 'dance();\n';
  return code;
};

Blockly.JavaScript['balance'] = function (block) {
  // TODO: Assemble JavaScript into code variable.
  var code = 'balance();\n';
  return code;
};

Blockly.JavaScript['hug'] = function (block) {
  // TODO: Assemble JavaScript into code variable.
  var code = 'hug();\n';
  return code;
};

/* Blockly.JavaScript['joint'] = function (block) {
  var joints = block.getFieldValue('joints');
  var side = block.getFieldValue('side');
  var angle = block.getFieldValue('angle');
  // TODO: Assemble JavaScript into code variable.
  var code = 'joint(' + joints + ', ' + side + ', ' + angle + ');\n';
  return code;
}; */


Blockly.JavaScript['tilt'] = function (block) {
  var direction = block.getFieldValue('direction');
  // TODO: Assemble JavaScript into code variable.
  var code = 'tilt(' + direction + ');\n';
  return code;
};

Blockly.JavaScript['move_hands'] = function (block) {
  var hand = block.getFieldValue('hand');
  var direction = block.getFieldValue('direction');
  // TODO: Assemble JavaScript into code variable.
  var code = 'move_hands(' + hand + ', ' + direction + ');\n';
  return code;
};

Blockly.JavaScript['move_legs'] = function (block) {
  var leg = block.getFieldValue('leg');
  var action = block.getFieldValue('action');
  // TODO: Assemble JavaScript into code variable.
  var code = 'move_legs(' + leg + ', ' + action + ');\n';
  return code;
};

Blockly.JavaScript['walk-slowly'] = function (block) {
  // TODO: Assemble JavaScript into code variable.
  var code = 'walkSlowly();\n';
  return code;
};

Blockly.JavaScript['stretch'] = function (block) {
  var side = block.getFieldValue('side');
  // TODO: Assemble JavaScript into code variable.
  var code = 'stretch(' + side + ');\n';
  return code;
};

/**
 * Expresiones
 **/

/**
 * Audios
 **/

/**
 * Imágenes
 **/

/**
 * Cámara
 **/