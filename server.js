const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

const dataDirectory = path.join(__dirname, "data");
const dataFile = path.join(dataDirectory, "registrations.json");

// Create data folder and JSON file if they don't exist
if (!fs.existsSync(dataDirectory)) {
    fs.mkdirSync(dataDirectory);
}

if (!fs.existsSync(dataFile)) {
    fs.writeFileSync(dataFile, "[]", "utf8");
}

// Middleware
app.use(express.json());
app.use(express.static(__dirname));

// Read registrations
app.get("/api/registrations", (req, res) => {
    try {
        const registrations = JSON.parse(
            fs.readFileSync(dataFile, "utf8")
        );

        res.json(registrations);
    } catch (error) {
        res.status(500).json({
            message: "Unable to read registrations."
        });
    }
});

// Save a new registration
app.post("/api/registrations", (req, res) => {
    try {
        const {
            name,
            age,
            gender,
            phone,
            email,
            date,
            address
        } = req.body;

        if (
            !name?.trim() ||
            !Number.isInteger(Number(age)) ||
            Number(age) < 1 ||
            Number(age) > 120 ||
            !gender ||
            !/^\d{10}$/.test(phone || "") ||
            !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email || "") ||
            !date ||
            !address?.trim()
        ) {
            return res.status(400).json({
                message: "Please provide valid registration details."
            });
        }

        const registrations = JSON.parse(
            fs.readFileSync(dataFile, "utf8")
        );

        const registration = {
            id: Date.now().toString(),
            name: name.trim(),
            age: Number(age),
            gender,
            phone,
            email,
            date,
            address: address.trim(),
            registeredAt: new Date().toISOString()
        };

        registrations.push(registration);

        fs.writeFileSync(
            dataFile,
            JSON.stringify(registrations, null, 2),
            "utf8"
        );

        res.status(201).json({
            message: "Registration saved successfully!",
            registrationId: registration.id
        });
    } catch (error) {
        res.status(500).json({
            message: "Unable to save registration."
        });
    }
});

// Start server
app.listen(PORT, () => {
    console.log(`Medical Camp Portal running at http://localhost:${PORT}`);
});
