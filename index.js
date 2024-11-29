const { app, BrowserWindow, WebContentsView } = require('electron')

const createWindow = () => {
    const win = new BrowserWindow({
        width: 1200,
        height: 800,
    })

    const view1 = new WebContentsView()
    win.contentView.addChildView(view1)
    view1.webContents.loadURL('https://sunliner.de')
    view1.setBounds({ x: 0, y: 0, width: 400, height: 400 })

    const view2 = new WebContentsView()
    win.contentView.addChildView(view2)
    view2.webContents.loadURL('https://kreando.ch')
    view2.setBounds({ x: 400, y: 0, width: 400, height: 400 })

    const view3 = new WebContentsView()
    win.contentView.addChildView(view3)
    view3.webContents.loadURL('https://das-radhaus.de')
    view3.setBounds({ x: 0, y: 400, width: 400, height: 400 })
}

app.whenReady().then(() => {
    createWindow();

    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) {
            createWindow()
        }
    })
})