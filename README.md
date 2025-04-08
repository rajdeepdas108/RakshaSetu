🛡️ RakshaSetu – Fake Medicine Detection System
RakshaSetu is a beginner-friendly web app designed to detect counterfeit medicines using QR code verification. Users can scan a QR code printed on medicine packages to instantly verify authenticity through a secure database (or blockchain in advanced versions). Built with simplicity and impact in mind, RakshaSetu is ideal for hackathons, prototypes, and real-world safety solutions.

🔍 Features
📦 Generate & print unique QR codes for each medicine

📱 Scan QR codes via webcam or file upload

💊 Instantly verify authenticity against the database

⚙️ Admin interface to register new medicines

🧠 Scalable to integrate blockchain or smart contracts

🪪 Lightweight, fast, and beginner-friendly

🛠️ Tech Stack
🌐 Frontend: HTML, CSS, JavaScript, html5-qrcode

🖥️ Backend: Node.js + Express

🧰 Database: Firebase Realtime DB (mock blockchain)

📷 QR Code: qrcode, html5-qrcode

📁 Project Structure
php
Copy
Edit
rakshasetu/
├── server.js              # Express server (API & QR logic)
├── package.json           # Node.js project config
├── public/
│   ├── index.html         # Frontend UI
│   ├── style.css          # Optional styling
│   └── script.js          # Frontend logic for scanning
├── assets/
│   └── logo.png           # (Optional) Logo or icons
└── README.md              # Project documentation
🚀 Getting Started
Clone the repo:

bash
Copy
Edit
git clone https://github.com/your-username/rakshasetu.git
cd rakshasetu
Install backend dependencies:

bash
Copy
Edit
npm install
Start the server:

bash
Copy
Edit
node server.js
Open index.html in your browser and scan a medicine QR code.

🧪 Example Use Case
A pharmacist or consumer scans a medicine pack →
RakshaSetu checks the QR code against the secure database →
✅ If found: It shows medicine details.
❌ If not found: Warns that the medicine may be fake.

🙌 Built With ❤️ For
Hackathons 👨‍💻

Healthcare safety 🏥

Educational demos 📚

Early-stage blockchain integration 🚀
