import { tokenInstance } from ".";

const instance = tokenInstance();

export async function getToDos() {
  try {
    const res = await instance.get("/todos");
    console.log(res);
  } catch (error) {
    console.log(error);
  }
}

export async function getTodoById() {
  try {
    const res = await instance.get("/todos");
    console.log(res);
  } catch (error) {
    console.log(error);
  }
}

export async function createTodo(id: string) {
  try {
    const res = await instance.get(`/todos/${id}`);
    console.log(res);
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
    console.log(res);
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
