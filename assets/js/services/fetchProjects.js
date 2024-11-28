async function fetchProjects() {
  try {
    const response = await fetch(`assets/data/projects.json`);

    if (!response.ok) {
      throw new Error("Failed to load projects");
    }

  const data = await response.json();
  // console.log(data);
  return data;

  } catch (error) {
    console.error("Error fetching projects:", error);
  } 
}

export {fetchProjects}
  