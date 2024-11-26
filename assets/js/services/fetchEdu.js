async function fetchEdu() {
  try {
    const response = await fetch(`assets/data/edu.json`);

    if (!response.ok) {
      throw new Error("Failed to load education");
    }

  const data = await response.json();
  // console.log(data);
  return data;

  } catch (error) {
    console.error("Error fetching education", error);
  } 
}

export {fetchEdu}
  