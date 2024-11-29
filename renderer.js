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

func()
