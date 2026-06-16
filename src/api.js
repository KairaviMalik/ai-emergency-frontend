import API from "../api";

export default function PanicButton() {

  const sendAlert = async () => {
    try {

      const response = await API.post("/alerts/trigger", {
        message: "Emergency from frontend",
        latitude: "28.6139",
        longitude: "77.2090"
      });

      alert("🚨 Alert Sent Successfully!");
      console.log(response.data);

    } catch (error) {
      console.error(error);
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