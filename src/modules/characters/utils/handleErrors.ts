export const handleErrors = (code: number) => {
    if (code >= 500) {
        return "Error de servidor"
    } else if (code === 404) {
        return "No se encontraron personajes"
    } else if (code >= 400 && code < 500) {
        return "Error de solicitud"
    }
}