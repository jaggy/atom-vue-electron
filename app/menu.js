const { app, dialog, Menu } = require('electron')

let template = [
  {
    label: "Atom",
    submenu: [
      { label: "About Atom", selector: "orderFrontStandardAboutPanel:" },
      { type: "separator" },
      { label: "Quit", accelerator: "Command+Q", click: () => app.quit() }
    ]
  },
  {
    label: "File",
    submenu: [
      { label: "Open Project", accelerator: "CommandOrControl+O", click: (menuItem, window) => window.webContents.send('SELECT_PROJECT') }
    ]
  },
  {
    label: "View",
    submenu: [
      { label: "Reload", accelerator: "CommandOrControl+R", click: (menuItem, window) => window.reload() }
    ]
  },
  {
    label: "Plugins",
    submenu: [
      {
        label: "Tree View",
        submenu: [
          { label: "Toggle", accelerator: "Control+E", click: (menuItem, window) => window.webContents.send('TOGGLE_TREE') }
        ]
      }
    ]
  }
]

Menu.setApplicationMenu(Menu.buildFromTemplate(template))

