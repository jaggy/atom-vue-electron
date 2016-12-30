const events = require('./event-types')
const { app, dialog, Menu } = require('electron')

const ATOM = {
  label: "Atom",
  submenu: [
    { label: "About Atom", selector: "orderFrontStandardAboutPanel:" },
    { type: "separator" },
    { label: "Quit", accelerator: "Command+Q", click: () => app.quit() }
  ]
}

const FILE = {
  label: "File",
  submenu: [
    { label: "Open Project", accelerator: "CommandOrControl+O", click: (menuItem, window) => window.webContents.send(events.SELECT_PROJECT) },
    { type: "separator" },
    { label: "Close Current File", accelerator: "CommandOrControl+W", click: (menuItem, window) => window.webContents.send(events.CLOSE_CURRENT_FILE) }
  ]
}

let VIEW = {
  label: "View",
  submenu: [
    { label: "Reload", accelerator: "CommandOrControl+R", click: (menuItem, window) => window.reload() }
  ]
}

const PLUGINS = {
  label: "Plugins",
  submenu: [
    {
      label: "Tree View",
      submenu: [
        { label: "Toggle", accelerator: "Control+E", click: (menuItem, window) => window.webContents.send(events.TOGGLE_TREE) }
      ]
    }
  ]
}

let template = [ATOM, FILE, VIEW, PLUGINS]

Menu.setApplicationMenu(Menu.buildFromTemplate(template))

