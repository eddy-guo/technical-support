import axios from "axios";
import Head from "next/head";
import { toast } from "react-toastify";
import { useState, useEffect } from "react";
import styles from "../styles/Home.module.css";
import TextareaAutosize from "react-textarea-autosize";

export default function Home() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [URLPath, setURLPath] = useState("");
  const [description, setDescription] = useState("");
  const [buttonLoading, setButtonLoading] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setURLPath(window.location.href);
    }
  }, []);

  const submitRequest = async () => {
    setButtonLoading(true);

    // POST request
    try {
      await axios.post("/api/submit", {
        name,
        email,
        description,
        URLPath
      });

      // Successful
      setName("");
      setEmail("");
      setDescription("");

      // Toastify success
      toast.success("Successfully sent your message!");
    } catch {
      // Toastify error
      toast.error("Error when sending message. Please try again later.");
    }

    setButtonLoading(false);
  };

  return (
    <div>
      {/* HTML Head */}
      <Head>
        {/* Google Fonts — Montserrat */}
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </Head>

      <div className={styles.form}>
        <div className={styles.form__header}>
          <img src="/logo.png" alt="logo" />
          <p>
            Use the form below to contact us. We will get back to you via Email
            within 24 hours.
          </p>
        </div>

        <div className={styles.form__main}>
          <div>
            <label>Your Name</label>
            <span>Please provide your first and last name.</span>
            <input
              type="text"
              placeholder="John Doe"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div>
            <label>Your Email</label>
            <span>Please provide a valid email where we can reach you.</span>
            <input
              type="email"
              placeholder="john@doe.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div>
            <label>Description</label>
            <span>Please describe your request.</span>
            <TextareaAutosize
              minRows={10}
              value={description}
              placeholder="Some description here"
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>

          <button onClick={submitRequest} disabled={buttonLoading}>
            {!buttonLoading
              ? "Submit Support Request"
              : "Submitting Request..."}
          </button>
        </div>
      </div>
    </div>
  );
}
