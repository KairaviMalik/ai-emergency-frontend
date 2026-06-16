import axios from "axios";

export default function PanicButton() {

  const sendAlert = async () => {
    try {
      const response = await axios.post("http://127.0.0.1:8000/alerts/trigger", {
        message: "Emergency from frontend",
        latitude: "28.6139",
        longitude: "77.2090"
      });

      alert("🚨 Alert Sent Successfully!");
      console.log(response.data);

    } catch (error) {
      console.log("Error:", error);
      alert("Failed to send alert");
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "80px" }}>
      <h2>🚨 AI Emergency System</h2>

      <button
        onClick={sendAlert}
        style={{
          padding: "20px",
          fontSize: "18px",
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