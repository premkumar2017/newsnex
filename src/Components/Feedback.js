import React, { useState } from "react";
import Navbar from "./Navbar";

const Feedback = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Validation
        if (!name || !email || !message) {
            setError("Please fill out all fields");
            return;
        }

        try {
            const response = await fetch("http://localhost:5000/feedback", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ name, email, message }),
            });

            // Check if response is JSON
            const contentType = response.headers.get("content-type");
            if (contentType && contentType.includes("application/json")) {
                const data = await response.json();
                if (response.ok) {
                    setSuccess(true);
                    setName("");
                    setEmail("");
                    setMessage("");
                    setError(""); // Clear previous errors
                } else {
                    setError(data.error || "Error submitting feedback.");
                }
            } else {
                throw new Error("Unexpected response from server.");
            }
        } catch (error) {
            console.error("Error submitting feedback:", error);
            setError(error.message || "An error occurred. Please try again.");
        }
    };

    return (
        <>
            <Navbar />
            <div className="container my-5">
                <h2 className="text-center">We Value Your Feedback</h2>
                <form onSubmit={handleSubmit} className="mt-4">
                    {error && <div className="alert alert-danger">{error}</div>}
                    {/* Name Input */}
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">Name</label>
                        <input
                            type="text"
                            className="form-control"
                            id="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                    </div>

                    {/* Email Input */}
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email</label>
                        <input
                            type="email"
                            className="form-control"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>

                    {/* Message Input */}
                    <div className="mb-3">
                        <label htmlFor="message" className="form-label">Message</label>
                        <textarea
                            className="form-control"
                            id="message"
                            rows="5"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            required
                        ></textarea>
                    </div>

                    {/* Submit Button */}
                    <button type="submit" className="btn btn-primary">Submit Feedback</button>

                    {/* Success Message */}
                    {success && (
                        <div className="alert alert-success mt-3" role="alert">
                            Thank you for your feedback!
                        </div>
                    )}
                </form>
            </div>
        </>
    );
};

export default Feedback;
