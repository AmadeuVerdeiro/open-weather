export const getCityData = async ()=>{
      return fetch(`http://api.openweathermap.org/geo/1.0/direct?q=Palencia,ES&limit=5&appid=738f1520be45386f1ced0f24044be646`)
      .then(res => {
          return res.json();
        });
    }

/* 
export async function getCityData(city: string, country: string): Promise<DataCity> {
    try{
        const response = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${city},${country}&limit=5&appid=738f1520be45386f1ced0f24044be646`);
        
        if (!response.ok){
            throw new Error(`Error resquest data: ${response.status}`);
        }
        const jasonData = await response.json();
        return jasonData;

    }catch(error){
        console.error(`Error fetching JSON data: `, error);
        throw error;
    } 
};*/

async function API_GET_WEATHER(lat: number, lon: number): Promise<any>{
    try{
        const response = await fetch(`openweathermap.org/data/2.5/onecall?${lat}&${lon}&units=metric&appid=439d4b804bc8187953eb36d2a8c26a02`);
        if (!response.ok){
            throw new Error(`Erro no request: ${response.status}`);
        }
        const jasonData = await response.json();
        return jasonData;
    }catch(error){
        console.error(`Error fetching JSON data: `, error);
        throw error;
    }finally{
        console.log('ok');
    }
}