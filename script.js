console.log("JavaScript is working!");

const registrationForm = document.getElementById("registrationForm");
const message = document.getElementById("message");

if (registrationForm && message) {
    registrationForm.addEventListener("submit", async function (event) {
        event.preventDefault();

        const registrationData = {
            name: document.getElementById("name").value.trim(),
            age: Number(document.getElementById("age").value),
            gender: document.getElementById("gender").value,
            phone: document.getElementById("phone").value.trim(),
            email: document.getElementById("email").value.trim(),
            date: document.getElementById("date").value,
            address: document.getElementById("address").value.trim()
        };

        message.textContent = "Submitting registration...";
        message.style.color = "#087f8c";

        try {
            const response = await fetch("/api/registrations", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(registrationData)
            });

            const result = await response.json();

            if (!response.ok) {
                throw new Error(result.message || "Registration failed.");
            }

            message.textContent =
                "Registration successful! Your Registration ID is: " +
                result.registrationId;

            message.style.color = "green";
            registrationForm.reset();

        } catch (error) {
            console.error("Registration error:", error);

            message.textContent =
                error.message || "Unable to connect to the server.";

            message.style.color = "red";
        }
    });
} else {
    console.error("Registration form or message element not found.");
}