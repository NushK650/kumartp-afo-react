





export async function getComputerChoice() {
    try {
        const response = await fetch("https://kumartc-allforone-byf7akcedfckc0dh.westus-01.azurewebsites.net/Magic8Ball/Magic8Ball/userinput"); 
        const data = await response.text();
      return data; 
    } catch (error) {
      console.log("Error", error);
      
    }
  }



export default getComputerChoice;


