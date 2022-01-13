import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Users from "./routes/users/users";
import Tasks from "./routes/tasks/Tasks";
import App from "./App";

// tutaj trymam wszystkie sprawy wziązane z routingiem - kompozycja

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="users/*" element={<Users />} />
          <Route path="tasks" element={<Tasks />} />
          <Route
            path="*"
            element={
              <main style={{ padding: "1rem" }}>
                <p>
                  Zgubiłeś się? Wróć na stronę główną i poszukaj jeszcze raz.
                </p>
              </main>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
  rootElement
);
