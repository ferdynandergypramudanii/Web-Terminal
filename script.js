import { help, whoami, blog, projects, social, secret, email, history, time, visit } from './commands.js';

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
        commandDiv.classList.add("input");
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
    let  result2;
    const now = new Date();
    const timeString = now.toLocaleTimeString('en-US', { timeZone: 'Asia/Jakarta' });
    time.push(timeString);
    history.push(command);
    switch (command.toLowerCase()) {
        case 'help':
            result = help;
            break;
        case 'clear':
            result = 'clear';
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
            result = 'history';
            break;
        case 'email':
           const resultE = document.createElement('div');
           resultE.innerHTML = email;
           resultE.style.marginTop =  '10px';
           resultE.style.marginBottom= '10px';
           outputDiv.appendChild(resultE);
           window.location.href = 'ferdynandergypramudani11@gmail.com';
           return;
        case 'visit':
            const resultV = document.createElement('div');
            resultV.innerHTML = visit;
            resultV.style.marginTop =  '10px';
            resultV.style.marginBottom= '10px';
            outputDiv.appendChild(resultV);
            window.location.href = 'mailto:ferdynandergypramudani11@gmail.com';

            return;  
        default:
            result = `Command not found: ${command}`;
    }

    if(result !== 'clear' && result !== 'history') {
        const resultDiv = document.createElement('div');
        resultDiv.innerHTML = result;
        resultDiv.id = "temp-div";
        resultDiv.style.marginBottom= '10px';
        resultDiv.style.marginTop= '10px';
        outputDiv.appendChild(resultDiv);
    } else if(result === 'history') {
        const ul = document.createElement("ul");
        ul.style.marginTop = '10px';
        ul.style.marginBottom= '10px';
    
        time.forEach(function(t, index) {
            const li = document.createElement("li");
            li.style.listStyleType = 'none';
            li.style.paddingLeft = '42px';
            li.textContent = t;
    
            // Membuat span untuk waktu dan menambahkannya ke li
            const span = document.createElement("span");
            span.classList.add('cmd');
            span.style.marginLeft = '42px';
            span.textContent = history[index]; // Menggunakan waktu yang sesuai untuk cmd
    
            li.appendChild(span);
            ul.appendChild(li);
        });
    
        outputDiv.appendChild(ul);
    } else {
        outputDiv.innerHTML = '';
    }
    
}


// 1. document.addEventListener
// 2. addInputEventListener
// 3. handleCommand


// masalah : 
// kurang email
// typewriter agar output yang ditampilkan lebih pelan
// caret, buat custom caret (lebih lebar) yang selalu mengikuti gerak caret pada element input

// otw bikin banner