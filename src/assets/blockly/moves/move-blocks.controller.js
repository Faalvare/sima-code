/** 
 * MOVIMIENTOS
 **/
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
        }
    }
    return command;
}

/**
 * Sima saluda
 */
function salute() {
    const options = Array('S', 'F', 'k');
    command.push({
        comando: options[Math.floor(Math.random() * options.length)],
        expresion: null,
        video: null,
        imagen: null,
        sonido: null
    });
    return command;
}

/**
 * Sima baila
 */
function dance() {
    const options = Array('l', 'd');
    command.push({
        comando: options[Math.floor(Math.random() * options.length)],
        expresion: null,
        video: null,
        imagen: null,
        sonido: null
    });
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
    } else {
        command.push({
            comando: 'f',
            expresion: null,
            video: null,
            imagen: null,
            sonido: null
        });
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
    } else {
        command.push({
            comando: 'Z',
            expresion: null,
            video: null,
            imagen: null,
            sonido: null
        });
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
        if (direction == 'Up') {
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
        if (direction == 'Up') {
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
        if (action == 'Kick') {
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
        if (action == 'Kick') {
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
    return command;
}

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
    return command;
}

Blockly.JavaScript['start'] = function (block) {
    var statements_commands = Blockly.JavaScript.statementToCode(block, 'commands');
    var code = '  start();\n' + statements_commands;
    return code;
};

Blockly.JavaScript['move'] = function (block) {
    var direction = block.getFieldValue('direction');
    var step = Blockly.JavaScript.valueToCode(block, 'steps', Blockly.JavaScript.ORDER_ATOMIC);
    var code = 'move(' + direction + ',' + step + ');\n';//'move('+direction+', '+step+');\n';
    return code;
};

Blockly.JavaScript['turn'] = function (block) {
    var direction = block.getFieldValue('direction');
    var code = 'turn(' + direction + ');\n';
    return code;
};

Blockly.JavaScript['salute'] = function (block) {
    var code = 'salute();\n';
    return code;
};

Blockly.JavaScript['dance'] = function (block) {
    var code = 'dance();\n';
    return code;
};

Blockly.JavaScript['stop'] = function (block) {
    var code = 'stop();\n';
    return code;
};

Blockly.JavaScript['surprise'] = function (block) {
    var code = 'surprise();\n';
    return code;
};

Blockly.JavaScript['off'] = function (block) {
    var code = 'off();\n';
    return code;
};

Blockly.JavaScript['celebrate'] = function (block) {
    var code = 'celebrate();\n';
    return code;
};

Blockly.JavaScript['wave'] = function (block) {
    var code = 'wave();\n';
    return code;
};

Blockly.JavaScript['dance'] = function (block) {

    var code = 'dance();\n';
    return code;
};

Blockly.JavaScript['balance'] = function (block) {
    var code = 'balance();\n';
    return code;
};

Blockly.JavaScript['hug'] = function (block) {
    var code = 'hug();\n';
    return code;
};

Blockly.JavaScript['tilt'] = function (block) {
    var direction = block.getFieldValue('direction');
    var code = 'tilt(' + direction + ');\n';
    return code;
};

Blockly.JavaScript['move_hands'] = function (block) {
    var hand = block.getFieldValue('hand');
    var direction = block.getFieldValue('direction');
    var code = 'move_hands(' + hand + ', ' + direction + ');\n';
    return code;
};

Blockly.JavaScript['move_legs'] = function (block) {
    var leg = block.getFieldValue('leg');
    var action = block.getFieldValue('action');
    var code = 'move_legs(' + leg + ', ' + action + ');\n';
    return code;
};

Blockly.JavaScript['walk-slowly'] = function (block) {
    var code = 'walkSlowly();\n';
    return code;
};

Blockly.JavaScript['stretch'] = function (block) {
    var side = block.getFieldValue('side');
    var code = 'stretch(' + side + ');\n';
    return code;
};