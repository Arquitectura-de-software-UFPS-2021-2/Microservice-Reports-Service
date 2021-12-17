let usuarios = [{
    "code": 1151595,
    "name": "Cristian",
    "last_name": "camargo",
    "address": "calle 23",
    "age": "21",
    "phone": "14131",
    "email": "totobhcc@gmail.com",
    "semester": "decimo",
    "university_career": "ing. sistemas",
    "created_at": "2021-11-12T01:43:56.000000Z",
    "updated_at": "2021-11-12T01:43:56.000000Z"
},
{
    "code": 1151636,
    "name": "sebastian",
    "last_name": "garcia",
    "address": "calle 23",
    "age": "21",
    "phone": "14131",
    "email": "sebastian@gmail.com",
    "semester": "decimo",
    "university_career": "ing. sistemas",
    "created_at": "2021-10-12T19:32:06.000000Z",
    "updated_at": "2021-10-12T19:32:06.000000Z"
},
{
    "code": 1151636,
    "name": "sebastian",
    "last_name": "garcia",
    "address": "calle 23",
    "age": "21",
    "phone": "14131",
    "email": "sebastian@gmail.com",
    "semester": "decimo",
    "university_career": "ing. sistemas",
    "created_at": "2022-10-12T19:32:06.000000Z",
    "updated_at": "2022-10-12T19:32:06.000000Z"
},
{
    "code": 1151650,
    "name": "gabriel",
    "last_name": "garcia",
    "address": "calle 23",
    "age": "21",
    "phone": "14131",
    "email": "gabrielarturo@gil.com",
    "semester": "decimo",
    "university_career": "ing. sistemas",
    "created_at": "2021-12-12T23:08:55.000000Z",
    "updated_at": "2021-12-12T23:08:55.000000Z"
},
{
    "code": 1151651,
    "name": "gabriel",
    "last_name": "garcia",
    "address": "calle 23",
    "age": "21",
    "phone": "14131",
    "email": "gabrielarturo@gmail.com",
    "semester": "decimo",
    "university_career": "ing. sistemas",
    "created_at": "2021-12-07T21:10:38.000000Z",
    "updated_at": "2021-12-07T21:10:38.000000Z"
},
{
    "code": 1151654,
    "name": "gabriel",
    "last_name": "garcia",
    "address": "calle 21",
    "age": "21",
    "phone": "5242424",
    "email": "gabrielarturogq@ufps.edu.co",
    "semester": "10",
    "university_career": "ing. sistemas",
    "created_at": null,
    "updated_at": null
},
{
    "code": 1151698,
    "name": "arturo",
    "last_name": "quintero",
    "address": "calle 23",
    "age": "21",
    "phone": "14131",
    "email": "arturo@gmail.com",
    "semester": "decimo",
    "university_career": "ing. sistemas",
    "created_at": "2021-12-13T15:44:54.000000Z",
    "updated_at": "2021-12-13T15:44:54.000000Z"
}
]

const agrupadosPorMes = {
    1: [],
    2: [],
    3: [],
    4: [],
    5: [],
    6: [],
    7: [],
    8: [],
    9: [],
    10: [],
    11: [],
    12: [],
    sinFecha: [],
};

const agrupadosPorAnio = {
    sinFecha: []
};

const agruparPorMes = (usuario) => {
    let fecha = usuario.fecha;
    if (fecha !== "") {
        let mes = fecha.split('-')[1];
        agrupadosPorMes[mes].push(usuario);
    } else {
        agrupadosPorMes['sinFecha'].push(usuario);
    }
};

const agruparPorAnio = (usuario) => {
    let fecha = usuario.fecha;
    if (fecha !== "") {
        let anio = fecha.split('-')[0];
        agrupadosPorAnio[anio] = agrupadosPorAnio[anio] || [];
        agrupadosPorAnio[anio].push(usuario);
    } else {
        agrupadosPorAnio['sinFecha'].push(usuario);
    }
};

const getEstudiantesPorMes = (anio) => {
    init();
    for (const key in agrupadosPorMes) {
        if (Object.hasOwnProperty.call(agrupadosPorMes, key)) {
            agrupadosPorMes[key] = agrupadosPorMes[key].filter(item => item.fecha.split('-')[0] === anio);
        }
    }
    return agrupadosPorMes;
};

const getEstudiantesPorAnio = () => agrupadosPorAnio;

const getEstudiantesPorMesxAnio = (mes, anio) => agrupadosPorMes[mes].filter(item => item.fecha.split('-')[0] === anio);


function loadData() {
    usuarios.forEach(item => {
        let cadFecha = item.created_at + "";
        let fecha = "";
        if (item.created_at !== null) fecha = cadFecha.split("T")[0];
        agruparPorMes({ ...item, fecha });
        agruparPorAnio({ ...item, fecha });
    });
}

loadData();

// console.log(getEstudiantesPorMesxAnio('12', '2021'));
// console.log(getEstudiantesPorMes('2021'));