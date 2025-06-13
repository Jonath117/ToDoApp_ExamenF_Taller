import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import TaskList from "../components/TaskList";
import { getTasks, deleteTask, updateTask } from "../services/tareaService";
import { supabase } from "../services/supabaseClient";
import { describe, it, expect, vi, beforeEach } from "vitest";

vi.mock("../services/tareaService", () => ({
  getTasks: vi.fn(),
  deleteTask: vi.fn(),
  updateTask: vi.fn()
}));

vi.mock("../services/tareaObserver", () => ({
  taskObserver: {
    subscribe: vi.fn(),
    unsubcribe: vi.fn(),
    notify: vi.fn()
  }
}));

vi.mock("../services/supabaseClient", () => ({
  supabase: {
    auth: {
      getUser: vi.fn()
    }
  }
}));

vi.mock("react-router-dom", async () => {
  const actual = await vi.importActual("react-router-dom");
  return {
    ...actual,
    useNavigate: () => vi.fn()
  };
});

describe("TaskList", () => {
  beforeEach(() => {
    supabase.auth.getUser.mockResolvedValue({ data: { user: { id: "123" } } });
    getTasks.mockResolvedValue([
      {
        id: 1,
        title: "Tarea de prueba",
        description: "Descripción",
        due_date: "2025-06-20",
        completed: false,
        category_name: "Trabajo"
      }
    ]);
  });

  it("renderiza tareas del usuario", async () => {
    render(<TaskList />);

    await screen.findByText("Tarea de prueba");
    expect(screen.getByText("Descripción")).toBeInTheDocument();
    expect(screen.getByText("Vence: 2025-06-20")).toBeInTheDocument();
    expect(screen.getByText("Categoría: Trabajo")).toBeInTheDocument();
  });

  it("permite marcar una tarea como completada", async () => {
    render(<TaskList />);
    await screen.findByText("Tarea de prueba");

    fireEvent.click(screen.getByText("Completar"));
    await waitFor(() => {
      expect(updateTask).toHaveBeenCalledWith(1, { completed: true });
    });
  });

  it("permite eliminar una tarea", async () => {
    deleteTask.mockResolvedValue();
    render(<TaskList />);
    await screen.findByText("Tarea de prueba");

    fireEvent.click(screen.getByText("Eliminar"));

    await waitFor(() => {
      expect(deleteTask).toHaveBeenCalledWith(1);
    });
  });
});
