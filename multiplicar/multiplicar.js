const fs = require('fs');
const color = require('colors');

let listarTabla = (base, limite = 10) => {
    return new Promise((resolve, reject) => {
        if (!Number(base) || !Number(limite)) {
            reject('Base o Limite no es un número');
            return;
        }

        console.log('========================'.green);
        console.log(`====Tabla de ${base}====`.green);
        console.log('========================'.green);

        for (let i = 1; i <= limite; i++) {
            console.log(`${base} X ${i} = ${base*i}`);
        }
    });
}

let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject('No es un número');
            return;
        }

        let data = '';

        for (let i = 1; i <= limite; i++) {
            data += `${base} X ${i} = ${base*i} \n`;
        }

        fs.writeFile(`Tablas/tabla-${base}.txt`, data, (err) => {
            if (err)
                reject(err);
            else
                resolve(color.green(`tabla-${base}.txt`));
        });
    });

}

module.exports = {
    crearArchivo,
    listarTabla
}