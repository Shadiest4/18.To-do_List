import React, { useState } from "react";

export const TodoList = () => {
  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && inputValue.trim() !== "") {
      setTasks([...tasks, inputValue.trim()]);
      setInputValue("");
    }
  };

  const removeTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  const cardStyle = {
    background: "#363636",
    border: "0.5px solid rgb(187, 187, 187)",
    borderRadius: "20px",
    width: "100%",
    maxWidth: "420px",
    overflow: "hidden"
  };

  const rowStyle = (isHovered) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "16px 20px",
    borderBottom: "0.5px solid rgba(187, 187, 187, 0.25)",
    background: isHovered ? "#2f2f2f" : "transparent",
    transition: "background 0.15s"
  });

  return (
    <div style={{
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      fontFamily: "'Doto', sans-serif",
      gap: "24px",
      padding: "24px"
    }}>
      <h1 style={{
        color: "rgb(151, 151, 151)",
        fontSize: "64px",
        fontWeight: 700,
        letterSpacing: "2px",
        margin: 0
      }}>
        To-Do's
      </h1>

      <div style={cardStyle}>
        <div style={{ padding: "20px 20px 16px" }}>
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="¿Qué necesita ser hecho?"
            style={{
              width: "100%",
              background: "transparent",
              border: "none",
              outline: "none",
              color: "#f0f0f0",
              fontFamily: "'Doto', sans-serif",
              fontSize: "16px"
            }}
          />
        </div>

        {tasks.length === 0 ? (
          <div style={{ padding: "20px", textAlign: "center", color: "#aaa", fontSize: "14px" }}>
            No hay tareas, añadir tareas
          </div>
        ) : (
          <>
            {tasks.map((task, index) => (
              <div
                key={index}
                style={rowStyle(hoveredIndex === index)}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <span style={{ color: "#f0f0f0", fontSize: "15px" }}>{task}</span>
                {hoveredIndex === index && (
                  <span
                    onClick={() => removeTask(index)}
                    style={{
                      color: "#ff3b3b",
                      cursor: "pointer",
                      fontSize: "16px",
                      fontWeight: 700
                    }}
                  >
                    &times;
                  </span>
                )}
              </div>
            ))}
            <div style={{ padding: "12px 20px", color: "#aaa", fontSize: "12px" }}>
              {tasks.length} item{tasks.length !== 1 ? "s" : ""} left
            </div>
          </>
        )}
      </div>
    </div>
  );
};