import fs from "fs";

var myHeaders = new Headers();
myHeaders.append("x-apisports-key", "5c77e407c1463da4f572496efab764e5");

var requestOptions = {
  method: "GET",
  headers: myHeaders,
  redirect: "follow",
};

async function getStatus() {
  try {
    const response = await fetch(
      "https://v3.football.api-sports.io/status",
      requestOptions,
    );

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

async function getProfile() {
  const result = await getStatus();
  console.log(
    "PROFILE : " + result.response.account.firstname,
    result.response.account.lastname,
  );
  console.log(result.response.requests.current + "/100 requests");
}

async function getLeague() {
  try {
    const response = await fetch(
      "https://v3.football.api-sports.io/leagues",
      requestOptions,
    );

    if (!response.ok) {
      throw new Error(`HTTP error ${response.status}`);
    }

    const data = await response.json();
    return data; // ✅ data est bien retourné
  } catch (error) {
    console.error("Error fetching data:", error);
    return null; // retourne null si erreur
  }
}

async function saveJSON() {
  const result = await getLeague();

  if (!result) {
    console.log("Aucun JSON à sauvegarder !");
    return;
  }

  fs.writeFileSync("result.json", JSON.stringify(result, null, 2), "utf-8");
  console.log("JSON sauvegardé dans result.json !");
}

getProfile();

// Create a result.json file with the result of getLeague() function.
//saveJSON();
