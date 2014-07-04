/*!
 *  command-palette.js
 */

var CP = CP || {};

(function() {
    'use strict';

    var elements = {
            workspace: document.getElementById('s4-workspace')
        },
        constants = {
            commandHeight: 30,
            commandsInOneScreen: 8,
        },
        model = new CommandPaletteModel();

    function CommandPaletteModel() {
        var palette = this;

        CP.CommandList.sort(function(a, b) {
            if (a.command < b.command) {
                return -1;
            }
            
            if (a.command > b.command) {
                return 1;
            }
            
            return 0;
        });

        palette.command  = ko.observable('');
        palette.selected = ko.observable(0);

        palette.filteredCommands = ko.computed(function() {
            var filter = palette.command().toLowerCase();

            if (!filter) {
                return CP.CommandList;
            } else {
                return ko.utils.arrayFilter(CP.CommandList, function(command) {
                    palette.selected(0);
                    return command.command.toLowerCase().indexOf(filter) > -1;
                });
            }
        });

        palette.moveDown = function() {
            if (palette.selected() === palette.filteredCommands().length - 1) {
                palette.selected(0);

                elements.commandList.scrollTop = 0;
            } else {
                var paletteIndex = palette.selected() + 1;
                palette.selected(paletteIndex);
                elements.commandList.scrollTop = (paletteIndex - 5) * constants.commandHeight;
            }
        };

        palette.moveUp = function() {
            if (palette.selected() === 0) {
                palette.selected(palette.filteredCommands().length - 1);

                elements.commandList.scrollTop = elements.commandList.scrollHeight;
            } else {
                var paletteIndex = palette.selected() - 1;
                palette.selected(paletteIndex);
                elements.commandList.scrollTop = (paletteIndex - 5) * constants.commandHeight;
            }
        };

        palette.runFunction = function() {
            var index = palette.selected();
            palette.filteredCommands()[index].fn();
            hideInput();
        };
    }

    function createCommandPalette() {
        if (!elements.commandPalette) {
            var html = '\
                <div class="sp-commandpalette"> \
                    <input type="text" class="mousetrap" data-bind="value: command, valueUpdate: \'input\'"> \
                    <ul class="sp-commandpalette-command-list" data-bind="foreach: filteredCommands"> \
                        <li class="sp-commandpalette-command" data-bind="click: $parent.runFunction, css: { \'sp-commandpalette-command--selected\': $parent.selected() == $index() }, text: command"></li> \
                    </ul> \
                    <p data-bind="visible: filteredCommands().length == 0">No results</p> \
                </div> \
            ';

            elements.commandPalette = document.createElement('div');
            elements.commandPalette.id = 'sp-commandpalette';
            elements.commandPalette.innerHTML = html;

            elements.workspace.appendChild(elements.commandPalette);

            elements.commandList = document.querySelectorAll('.sp-commandpalette-command-list')[0];

            ko.applyBindings(model);

            hideInput();
        }
    }

    function appendStyles() {
        elements.head = document.getElementsByTagName('head')[0];

        var style = document.createElement('style');
            style.innerHTML = " \
.sp-commandpalette { \
    background: #41454e; \
    box-shadow: 0 0 30px 0 rgba(0,0,0,0.47); \
    margin-left: -250px; \
    position: absolute; \
    top: 100px; \
    left: 50%; \
    width: 500px; \
} \
\
.sp-commandpalette input { \
    background: #e6e6e6; \
    box-sizing: border-box; \
    font-size: 24px; \
    height: 40px; \
    margin: 5px; \
    width: 490px; \
} \
\
.sp-commandpalette p { \
    color: #e6e6e6; \
    margin: 10px; \
    margin-top: 5px; \
} \
\
.sp-commandpalette-command-list { \
    list-style: none; \
    margin: 0px 5px 5px; \
    max-height: 330px; \
    overflow-y: auto; \
    padding: 0; \
} \
\
.sp-commandpalette-command { \
    color: #e6e6e6; \
    cursor: pointer; \
    padding: 5px; \
    height: 20px; \
    overflow: hidden; \
    text-overflow: ellipsis; \
    white-space: nowrap; \
} \
\
.sp-commandpalette-command:hover { \
    background: #205b8a; \
    color: #fff; \
} \
\
.sp-commandpalette-command--selected { \
    background: #0072c6; \
    color: #fff; \
} \
        ";

        elements.head.appendChild(style);
    }


    function isInputVisible() {
        return elements.commandPalette.style['display'] === 'block';
    }

    function showInput() {
        if (elements.commandPalette) {
            elements.commandPalette.style['display'] = 'block';
            elements.commandPalette.getElementsByTagName('input')[0].focus();
        }
    }

    function hideInput() {
        if (elements.commandPalette) {
            elements.commandPalette.style['display'] = 'none';
            elements.commandPalette.getElementsByTagName('input')[0].value = '';

            model.selected(0);
            model.command('');
        }
    }

    function visibleHotkeyHanlder(key, callback) {
        Mousetrap.bind(key, function(e) {
            if (isInputVisible()) {
                e.preventDefault();
                callback();
            }
        });
    }

    function hotkeyHandler() {
        Mousetrap.bind('ctrl+shift+l', function(e) {
            e.preventDefault();
            showInput();
        });

        visibleHotkeyHanlder('esc', hideInput);
        visibleHotkeyHanlder('up', model.moveUp);
        visibleHotkeyHanlder('down', model.moveDown);
        visibleHotkeyHanlder('enter', model.runFunction);
    }

    function initialise() {
        appendStyles();
        createCommandPalette();
        hotkeyHandler();
    }

    initialise();
})();