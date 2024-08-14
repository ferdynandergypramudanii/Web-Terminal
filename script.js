import { help, whoami, blog, projects, social, secret, history } from './commands.js';

// Fungsi untuk menambahkan event listener ke input
function addInputEventListener(inputElement) {
    inputElement.addEventListener('keydown', handleInput);
}

// Fungsi untuk menangani input ketika pengguna menekan 'Enter'
function handleInput(e) {
    if (e.key === 'Enter') {
        const inputText = this.value.trim();
        const outputDiv = document.querySelector('.output');

        // Menambahkan perintah yang beginningdimasukkan ke output
        const commandDiv = document.createElement('div');
        commandDiv.textContent = `visitor@welcome:~$ ${inputText}`;
        outputDiv.appendChild(commandDiv);

        // Menambahkan output berdasarkan perintah
        handleCommand(inputText, outputDiv);

        // Menghapus input yang sekarang
        this.value = '';

        // janggal
        // Menambahkan baris input baru
        const newInputLine = document.createElement('div');
        newInputLine.classList.add('input-line');
        newInputLine.innerHTML = `<span>User@marminal
        document.querySelector('.terminal').appendChild(newInputLine);

        // Fokus pada input yang baru
        const newInput = newInputLine.querySelector('.input');
        newInput.focus();chine:~$</span><input type="text" class="input" autofocus>`;
        // Menghapus element span (html)
        document.getElementsByClassName("input-line-early").remove();
        // Menambahkan input line baru ke te

        // Menambahkan event listener ke input yang baru
        addInputEventListener(newInput);

        // Scroll ke bawah untuk melihat input terbaru
        outputDiv.scrollTop = outputDiv.scrollHeight;

        // Menghapus event listener dari input sebelumnya untuk mencegah multiple listeners
        this.removeEventListener('keydown', handleInput);
    }
}

// Menambahkan event listener pada input pertama kali
document.addEventListener('DOMContentLoaded', () => {
    const initialInput = document.querySelector('.input');
    addInputEventListener(initialInput); 
});

// Fungsi untuk menangani perintah yang dimasukkan
function handleCommand(command, outputDiv) {
    let result;
    switch (command.toLowerCase()) {
        case 'help':
            result = help;
            break;
        case 'clear':
            outputDiv.innerHTML = '';

            break;
        case 'whoami':
            result = whoami;
            break;
        case 'blog':
            result = blog;
            break;
        case 'projects':
            result = projects;
            break;
        case 'social':
            result = social;
            break;
        case 'secret':
            result = secret;
            break;
        case 'history':
            result = history;
            break;    
        default:
            result = `Command not found: ${command}`;
    }

    const resultDiv = document.createElement('div');
    resultDiv.innerHTML = result;
    resultDiv.style.marginBottom= '10px';
    resultDiv.style.marginTop= '10px';
    outputDiv.appendChild(resultDiv);
}



// 1. document.addEventListener
// 2. addInputEventListener
// 3. handleCommand


// masalah : .output appendChild undefined
