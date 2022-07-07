import axios from "axios";

export async function checkGitHubUser(username: string) {
  try {
    const userData = await axios.get(`https://api.github.com/users/${username}/repos`);

    return userData.data;

  } catch (error) {
    console.error(error.response.status);
    if (error.response.status === 404) {
      throw {
        type: "notFound",
        message: "Invalid GitHub username"
      }
    }
  }
}