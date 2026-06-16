import { useEffect, useState } from "react";

export default function AlertsFeed() {

  const [alerts, setAlerts] = useState([]);

  useEffect(() => {

    const ws = new WebSocket("ws://127.0.0.1:8000/ws/alerts");

    ws.onmessage = (event) => {
      setAlerts((prev) => [event.data, ...prev]);
    };

    ws.onerror = (error) => {
      console.log("WebSocket error:", error);
    };

    return () => ws.close();

  }, []);

  return (
    <div style={{ marginTop: "40px", textAlign: "center" }}>
      <h3>📡 Live Emergency Alerts</h3>

      <div style={{ marginTop: "20px" }}>
        {alerts.length === 0 ? (
          <p>No alerts yet</p>
        ) : (
          alerts.map((alert, index) => (
            <div
              key={index}
              style={{
                background: "#ffe5e5",
                margin: "10px auto",
                padding: "10px",
                width: "60%",
                borderRadius: "8px",
                color: "red"
              }}
            >
              {alert}
            </div>
          ))
        )}
      </div>
    </div>
  );
}