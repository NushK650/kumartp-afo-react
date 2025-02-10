





export async function getComputerChoice(name, place, adjective, activity) {
    try {
        const response = await fetch(`https://kumartc-allforone-byf7akcedfckc0dh.westus-01.azurewebsites.net/MadLib/MadLib/${name}/${place}/${adjective}/${activity}`); 
        const data = await response.text();
      return data; 
    } catch (error) {
      console.log("Error", error);
      
    }
  }



export default getComputerChoice;


