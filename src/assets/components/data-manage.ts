export function ConversorKelvin(kelvin: number){
    const result = (kelvin - 273.15);
    return `${Math.round(result)}º`;
};

