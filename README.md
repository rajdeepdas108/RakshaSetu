# 💊 Fake Medicine Detection System Using QR & Blockchain

## 📝 Overview  
This project tackles counterfeit drugs by creating a secure verification system using QR codes and blockchain-like security. Designed for hackathons, it empowers consumers to instantly validate medicines via a web/mobile app while maintaining tamper-proof records.  

---

## 🔥 Features  
- ✅ **QR Code Verification**: Scan medicine packages for real-time authenticity checks.  
- 🔒 **Immutable Records**: SHA256 hashing mimics blockchain integrity.  
- 📱 **Cross-Platform**: Works on any device with a camera.  
- 🚨 **Tamper Alerts**: Flags mismatched hashes or duplicate entries.  
- 📊 **Supply Chain Tracking**: Logs timestamps for distribution stages (beginner-friendly).  

---

## 🛠 Technologies Used  
- ⛓ **Database**: Firebase Firestore (NoSQL)  
- 🔑 **Security**: SHA256 Hashing  
- 📲 **QR Generation**: `qrcode.js` / `python-qrcode`  
- 🔍 **QR Scanning**: `jsQR` Library  
- 🖥 **Frontend**: HTML/CSS/JavaScript  

---

## 🚀 Installation  
1. Clone the repository:  
   ```sh  
   git clone https://github.com/yourusername/fake-medicine-detector.git  
   ```  
2. Set up Firebase:  
   - Create a project at [Firebase Console](https://console.firebase.google.com/)  
   - Replace config in `src/firebase.js`  
3. Install dependencies:  
   ```sh  
   npm install qrcode jsqr  # For JavaScript  
   pip install python-qrcode # For Python (optional)  
   ```  

---

## 🎯 Usage  
1. **Admin Registration**:  
   - Open `/admin/index.html`  
   - Enter medicine details (name, batch, expiry) → Generate QR.  
2. **Consumer Verification**:  
   - Scan QR via `/user/index.html` on any device.  
   - Instant result: ✅ Valid (shows details) / ❌ Fake (alert).  

---

## 🔐 Security Measures  
- 🔑 **SHA256 Hashing**: Unique IDs prevent data tampering.  
- 🔒 **Firebase Rules**: Restrict write access to admins.  
- 🚫 **QR Anti-Reuse**: Timestamps detect duplicate scans.  

---

## 🤝 Contributing  
1. 🍴 Fork the repository.  
2. 🌱 Create a branch (`feature-xyz`).  
3. 💾 Commit changes.  
4. 🚀 Push and submit a **Pull Request**.  

---

## 📜 License  
MIT License - see [LICENSE](LICENSE).  

---

## 📧 Contact  
For questions, email [your.email@example.com](mailto:your.email@example.com).  

---

## 📂 File Structure  
```
fake-medicine-detector/  
├── public/  
│   ├── index.html            # Landing page  
│   └── styles.css           # Global CSS  
├── src/  
│   ├── admin/  
│   │   ├── index.html       # Admin registration form  
│   │   └── admin.js        # QR generation + Firebase upload  
│   ├── user/  
│   │   ├── index.html       # User scanner interface  
│   │   └── scanner.js      # jsQR integration  
│   └── firebase.js         # Firebase config  
├── README.md  
└── LICENSE  
```  
``` 

---

**Note**: Add screenshots/GIFs under the *Usage* section to showcase your prototype! 🎥
