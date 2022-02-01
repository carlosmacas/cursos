const urlCrud = 'http://localhost:3001';

const getListaCursos = async () => {
    const response = await fetch(`${urlCrud}/cursos/`);    
    const data = await response.json();
    console.log(data)
    return  data;
}

export {
    getListaCursos
}
