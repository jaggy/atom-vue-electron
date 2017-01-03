const events = require('./event-types')
const { app, Menu } = require('electron')

const ATOM = {
  label: 'Atom',
  submenu: [
    { label: 'About Atom', selector: 'orderFrontStandardAboutPanel:' },
    { type: 'separator' },
    { label: 'Quit', accelerator: 'Command+Q', click: () => app.quit() }
  ]
}

const FILE = {
  label: 'File',
  submenu: [
    { label: 'Open Project', accelerator: 'CommandOrControl+O', click: (menuItem, window) => window.webContents.send(events.SELECT_PROJECT) },
    { type: 'separator' },
    { label: 'Close Current File', accelerator: 'CommandOrControl+W', click: (menuItem, window) => window.webContents.send(events.CLOSE_CURRENT_FILE) }
  ]
}

const EDIT = {
  label: 'Edit',
  submenu: [
    { label: 'Undo', accelerator: 'CommandOrControl+Z', click: (menuItem, window) => window.webContents.undo() },
    { label: 'Redo', accelerator: 'CommandOrControl+Shift+Z', click: (menuItem, window) => window.webContents.redo() },
    { type: 'separator' }
  ]
}

let VIEW = {
  label: 'View',
  submenu: [
    { label: 'Reload', accelerator: 'CommandOrControl+R', click: (menuItem, window) => window.reload() }
  ]
}

const PLUGINS = {
  label: 'Plugins',
  submenu: [
    {
      label: 'Tree View',
      submenu: [
        { label: 'Toggle', accelerator: 'Control+E', click: (menuItem, window) => window.webContents.send(events.TOGGLE_TREE) }
      ]
    },
    {
      label: 'Fuzzy Finder',
      submenu: [
        { label: 'Toggle', accelerator: 'Control+P', click: (menuItem, window) => window.webContents.send(events.TOGGLE_FUZZY_FINDER) }
      ]
    }
  ]
}

const DEVELOPER = {
  label: 'Developer',
  submenu: [
    { label: 'Open Dev Tools', accelerator: 'CommandOrControl+Option+I', click: (menuItem, window) => window.webContents.toggleDevTools() }
  ]
}

let template = [ATOM, FILE, EDIT, VIEW, PLUGINS, DEVELOPER]

Menu.setApplicationMenu(Menu.buildFromTemplate(template))

