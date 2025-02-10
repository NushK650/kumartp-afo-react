





export async function getComputerChoice(UserInput) {
    try {
      const response = await fetch(`https://kumartc-allforone-byf7akcedfckc0dh.westus-01.azurewebsites.net/ReverseItNO/ReverseItNO/${UserInput}`); 
      const data = await response.text();
      return data; 
    } catch (error) {
      console.log("Error", error);
      
    }
  }



export default getComputerChoice;


