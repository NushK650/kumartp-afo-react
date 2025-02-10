export async function getComputerChoice(UserInput, UserInput2) {
  try {
    const response = await fetch(
      `https://kumartc-allforone-byf7akcedfckc0dh.westus-01.azurewebsites.net/GreaterOrLess/GreaterOrLess/${UserInput}/${UserInput2}`
    );
    const data = await response.text();
    return data;
  } catch (error) {
    console.log("Error", error);
  }
}

export default getComputerChoice;
