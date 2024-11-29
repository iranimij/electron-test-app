const { app, BrowserWindow, shell } = require('electron')

const createWindow = () => {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
    })

    win.loadFile('index.html');

    shell.openExternal('https://kreando.ch');
    shell.openExternal('https://sunliner.de');
    shell.openExternal('https://das-radhaus.de');
    shell.showItemInFolder('./test.md');
    shell.beep();
    // shell.trashItem('/Users/imanaboheydary/Desktop/projects/electron/ke/test.md');
}

app.whenReady().then(() => {
    createWindow();

    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) {
            createWindow()
        }
    })
})