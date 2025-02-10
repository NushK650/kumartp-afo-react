export async function getComputerChoice(UserInput, UserInput2) {
  try {
    const response = await fetch(
      `https://kumartc-allforone-byf7akcedfckc0dh.westus-01.azurewebsites.net/Greetings/greetings/${UserInput}/${UserInput2}`
    );
    const data = await response.text();
    return data;
  } catch (error) {
    console.log("Error", error);
  }
}

export default getComputerChoice;
