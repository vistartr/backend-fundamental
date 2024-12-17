const fs = require('fs');

const fileReadCallback = (error, data) => {
    if(error) {
        console.log('Gagal membuka berkas');
        return;
    }
    console.log(data);
};

fs.readFile('todo.txt', 'utf-8', fileReadCallback);