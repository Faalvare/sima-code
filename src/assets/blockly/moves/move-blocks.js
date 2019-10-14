Blockly.Blocks['start'] = {
    init: function () {
        this.appendStatementInput('commands')
            .setCheck('String')
            .appendField('Inicio');
        this.setColour(290);
        this.setTooltip('');
        this.setHelpUrl('');
    }
};

Blockly.Blocks['move'] = {
    init: function () {
        this.appendDummyInput()
            .appendField('Muevete')
            .appendField(new Blockly.FieldDropdown([['Adelante\u0020\u2191', 'Forward'], ['Atrás\u0020\u2193', 'Backward']]), 'direction');
        this.appendValueInput('steps')
            .setCheck('Number')
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField(', pasos');
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(290);
        this.setTooltip('');
        this.setHelpUrl('');
    }
};

Blockly.Blocks['salute'] = {
    init: function () {
        this.appendDummyInput()
            .appendField('Saluda');
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(290);
        this.setTooltip('');
        this.setHelpUrl('');
    }
};

Blockly.Blocks['dance'] = {
    init: function () {
        this.appendDummyInput()
            .appendField('Baila');
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(290);
        this.setTooltip('');
        this.setHelpUrl('');
    }
};

Blockly.Blocks['wave'] = {
    init: function () {
        this.appendDummyInput()
            .appendField('Ola');
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(290);
        this.setTooltip('');
        this.setHelpUrl('');
    }
};

Blockly.Blocks['stop'] = {
    init: function () {
        this.appendDummyInput()
            .appendField('Parar');
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(290);
        this.setTooltip('');
        this.setHelpUrl('');
    }
};

Blockly.Blocks['surprise'] = {
    init: function () {
        this.appendDummyInput()
            .appendField('Sorpresa');
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(290);
        this.setTooltip('');
        this.setHelpUrl('');
    }
};

Blockly.Blocks['off'] = {
    init: function () {
        this.appendDummyInput()
            .appendField('Apagar');
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(290);
        this.setTooltip('');
        this.setHelpUrl('');
    }
};

Blockly.Blocks['celebrate'] = {
    init: function () {
        this.appendDummyInput()
            .appendField('Celebrar');
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(290);
        this.setTooltip('');
        this.setHelpUrl('');
    }
};

Blockly.Blocks['tilt'] = {
    init: function () {
        this.appendDummyInput()
            .appendField('Inclinate')
            .appendField(new Blockly.FieldDropdown([['Adelante\u0020\u2191', 'Forward'], ['Derecha\u0020\u2192', 'Right'], ['Izquierda\u0020\u2190', 'Left']]), 'direction');
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(290);
        this.setTooltip('');
        this.setHelpUrl('');
    }
};

Blockly.Blocks['move_hands'] = {
    init: function () {
        this.appendDummyInput()
            .appendField('Mueve la mano')
            .appendField(new Blockly.FieldDropdown([['Derecha', 'Right'], ['Izquierda', 'Left'], ['Ambas', 'Both']]), 'hand')
            .appendField(new Blockly.FieldDropdown([['Arriba\u0020\u2191', 'Up'], ['Abajo\u0020\u2193', 'Down']]), 'direction');
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(290);
        this.setTooltip('');
        this.setHelpUrl('');
    }
};

Blockly.Blocks['move_legs'] = {
    init: function () {
        this.appendDummyInput()
            .appendField('Mueve la Pierna')
            .appendField(new Blockly.FieldDropdown([['Derecha', 'Right'], ['Izquierda', 'Left']]), 'leg')
            .appendField('para')
            .appendField(new Blockly.FieldDropdown([['Patear', 'Kick'], ['Balancear', 'Swing']]), 'action');
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(290);
        this.setTooltip('');
        this.setHelpUrl('');
    }
};

Blockly.Blocks['balance'] = {
    init: function () {
        this.appendDummyInput()
            .appendField('Balancear');
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(290);
        this.setTooltip('');
        this.setHelpUrl('');
    }
};

Blockly.Blocks['hug'] = {
    init: function () {
        this.appendDummyInput()
            .appendField('Abrazar');
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(290);
        this.setTooltip('');
        this.setHelpUrl('');
    }
};

Blockly.Blocks['walk-slowly'] = {
    init: function () {
        this.appendDummyInput()
            .appendField('Caminar Lentamente');
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(290);
        this.setTooltip('');
        this.setHelpUrl('');
    }
};

Blockly.Blocks['stretch'] = {
    init: function () {
        this.appendDummyInput()
            .appendField('Estirar el lado')
            .appendField(new Blockly.FieldDropdown([['Derecho', 'Right'], ['Izquierda', 'Left']]), 'side');
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(290);
        this.setTooltip('');
        this.setHelpUrl('');
    }
};
