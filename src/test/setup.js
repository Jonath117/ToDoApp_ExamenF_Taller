import '@testing-library/jest-dom'

vi.mock("../services/tareaService", () => ({
  createTask: vi.fn(),
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
    },
    from: () => ({
      select: () => ({
        eq: () => Promise.resolve({ data: [{ id: 1, name: "Trabajo", user_id: "123" }] })
      })
    })
  }
}));

vi.mock("react-router-dom", async () => {
  const actual = await vi.importActual("react-router-dom");
  return {
    ...actual,
    useNavigate: () => vi.fn()
  };
});
