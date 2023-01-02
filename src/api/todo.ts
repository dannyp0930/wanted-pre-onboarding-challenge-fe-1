import { tokenInstance } from ".";

const instance = tokenInstance();

export async function getToDos() {
  try {
    const res = await instance.get("/todos");
    console.log(res)
  } catch (error) {
    console.log(error)
  }
}
