import { TGenericCopys } from "../copys";

const tests: TGenericCopys[] = [
    {
        id: "ID PRUEBA",
        description: "ruta de bogotá a medellín",
        homeCiudadOrigen: "BOG",
        homeCiudadDestino: "MDE",
        targetPage: 'home',
        targetMethod: 'homeSeleccionarDestino'
    },
    {
        id: "ID PRUEBA2",
        description: "ruta de bogotá a medellín",
        homeCiudadOrigen: "BOG",
        homeCiudadDestino: "MDE",
        targetPage: 'home',
        targetMethod: 'homeSeleccionarFechaSalida'
    }
]

export { tests };

