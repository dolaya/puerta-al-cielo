if ('serviceWorker' in navigator){
    navigator.serviceWorker.register('./sw.js')
    .then(reg=>console.log('Registro del SW exitoso', reg))
    .catch(err=>console.warn('Error al registrar el SW',err))
}
