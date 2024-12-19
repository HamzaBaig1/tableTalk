import { WhatsApp } from "@mui/icons-material";
import "./whatsappButton.css";

function WhatsappButton({ data }) {
  const phoneNumber = "+923350787287";
  const message = ` Hello there! I want to know details about ${data.model}`;

  function handleClick() {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(url, "_blank");
  }
  return (
    <button
      // type="button"
      className="contact-us ms-auto"
      onClick={handleClick}
    >
      Contact Us{" "}
      <WhatsApp
        style={{ fontSize: "15px", marginLeft: "7px", marginBottom: "2px" }}
      />
    </button>
  );
}

export default WhatsappButton;
