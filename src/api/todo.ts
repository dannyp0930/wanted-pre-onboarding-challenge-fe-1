import { tokenInstance } from ".";

const instance = tokenInstance();

export async function getTodos() {
  try {
    const res = await instance.get("/todos");
    return res.data.data
  } catch (error) {
    console.log(error);
  }
}

export async function getTodoById() {
  try {
    const res = await instance.get("/todos");
    return res
  } catch (error) {
    console.log(error);
  }
}

export async function createTodo(title: string, content: string) {
  try {
    const res = await instance.post("/todos", {
      title: title,
      content: content,
    });
    return res
  } catch (error) {
    console.log(error);
  }
}

export async function updateTodo(id: string, title: string, content: string) {
  try {
    const res = await instance.put(`/todos/${id}`, {
      title: title,
      content: content,
    });
    return res
  } catch (error) {
    console.log(error);
  }
}

export async function deleteTodo(id: string) {
  try {
    const res = await instance.delete(`/todos/${id}`);
    console.log(res);
  } catch (error) {
    console.log(error);
  }
}
