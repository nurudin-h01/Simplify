import axios from "axios";

export async function getClass() {

  try {
    const response = await axios.get('https://motionless-fox-jumper.cyclic.app/class/all');
    return response.data || [];
  } catch (error) {
    throw new Error(
      console.log(error)
    );
  }
}