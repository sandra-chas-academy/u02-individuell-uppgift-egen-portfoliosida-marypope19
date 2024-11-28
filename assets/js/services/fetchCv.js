async function fetchCv() {
  try {
    const response = await fetch(`assets/data/cv.json`);

    if (!response.ok) {
      throw new Error("Failed to load CV");
    }

  const data = await response.json();
  // console.log(data);
  return data;

  } catch (error) {
    console.error("Error fetching CV:", error);
  } 
}

export {fetchCv}
  