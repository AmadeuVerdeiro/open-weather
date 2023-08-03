export const getCityData = async ()=>{                                                       //chave do email familia verdeiro
      return fetch(`http://api.openweathermap.org/geo/1.0/direct?q=Palencia,ES&limit=5&appid=0ddd08bdbcb58d9e02db1d8ef58d9056`) 
      .then(res => {
          return res.json();
        });
    }

/* async function API_GET_WEATHER(lat: number, lon: number): Promise<any>{
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
} */