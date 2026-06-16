import API from "../api";

export default function PanicButton() {
  const sendAlert = async () => {
    try {
      const response = await API.post("/alerts/trigger", {
        message: "Emergency from frontend",
        latitude: "28.6139",
        longitude: "77.2090"
      });

      console.log("Alert Response:", response.data);
      alert("🚨 Alert Sent Successfully!");
    } catch (error) {
      console.error("Alert Error:", error);

      if (error.response) {
        console.log("Backend Response:", error.response.data);
      }

      alert("Failed to send alert");
    }
  };

  return (
    <div
      style={{
        textAlign: "center",
        marginTop: "80px"
      }}
    >
      <h1>🚨 AI Emergency System</h1>

      <button
        onClick={sendAlert}
        style={{
          padding: "20px 40px",
          fontSize: "20px",
          backgroundColor: "red",
          color: "white",
          border: "none",
          borderRadius: "10px",
          cursor: "pointer"
        }}
      >
        PANIC BUTTON
      </button>
    </div>
  );
}