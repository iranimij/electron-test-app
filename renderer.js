const func = async () => {
    let response = 'false';
    document.getElementById('button').addEventListener('click', async () => {
        response = await window.versions.switch(response)
        const information = document.getElementById('info')
        information.innerText = response
    })

    const information = document.getElementById('info')
    information.innerText = response
}

func();
console.log('here');
const information = document.getElementById('system-info')
information.innerText = `This app is using Chrome (v${versions.chrome()}), Node.js (v${versions.node()}), and Electron (v${versions.electron()})`
