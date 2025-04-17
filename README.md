 # 💊 RakshaSetu - Fake Medicine Detection System 

[![License](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![GitHub Stars](https://img.shields.io/github/stars/rajdeepdas108/RakshaSetu)](https://github.com/rajdeepdas108/RakshaSetu/stargazers)
[![GitHub Forks](https://img.shields.io/github/forks/rajdeepdas108/RakshaSetu)](https://github.com/rajdeepdas108/RakshaSetu/network)
[![GitHub Issues](https://img.shields.io/github/issues/rajdeepdas108/RakshaSetu)](https://github.com/rajdeepdas108/RakshaSetu/issues)

A blockchain-inspired system to combat counterfeit medicines using QR codes and secure verification. Built for hackathons! 🔍✨

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

---

## 🚀 Highlights
- ✅ **Instant QR Verification**: Validate medicine authenticity in 2 seconds.
- 🔗 **Tamper-Proof Records**: SHA256 hashing ensures data integrity.
- 📱 **Zero App Installation**: Works directly via web browsers.
- 🚨 **Duplicate Scan Detection**: Flags suspicious QR reuse.
- 🏥 **Supply Chain Transparency**: Track medicine journey from factory to pharmacy.

---

## 🛠️ Tech Stack
| **Component**       | **Tools**                                                                 |
|----------------------|---------------------------------------------------------------------------|
| **Frontend**         | HTML, CSS, JavaScript                                                    |
| **Database**         | Firebase Firestore                                                        |
| **QR Generation**    | qrcode.js                                                               |
| **Security**         | SHA256 Hashing                                                            |
| **Hosting**          | Firebase Hosting                                                          |

---

## ⚙️ Installation
1. Clone the repo:
   
bash
   git clone https://github.com/rajdeepdas108/RakshaSetu.git

2. Firebase Setup:
   - Create project at [Firebase Console](https://console.firebase.google.com/)
   - Update config in src/firebase.js
3. Install dependencies:
   
bash
   cd RakshaSetu && npm install qrcode jsqr


---

## 🎮 Usage
### **Admin Panel** (Manufacturers)
1. Visit /admin/index.html
2. Register medicine:
   - Enter name, batch, expiry date
   - Generate & print QR code
3. Data auto-saves to Firebase

### **Consumers**
1. Open /user/index.html on any device
2. Scan medicine QR code
3. Get instant result:
   - ✅ **Valid**: Shows manufacturer details + expiry
   - ❌ **Fake**: Red alert with warning siren

---

## 🔐 Security Architecture

1. **Firebase Rules**: Read-only for users, write-only for admins
2. **QR Expiry**: Optional timestamp validation

---

## 🌟 Upcoming Features
- 📍 **Geo-Fencing**: Detect regional counterfeit patterns
- 📲 **WhatsApp Integration**: Scan via WhatsApp camera
- 🔗 **Blockchain Migration**: Ethereum smart contracts
- 📊 **Analytics Dashboard**: Track fake medicine reports



## 🤝 Contribute
1. 🍴 Fork the repository
2. 🔨 Create a feature branch:
   
bash
   git checkout -b feature-anti-counterfeit

3. 💻 Code + Test + Commit
4. 🚀 Push and open a Pull Request

---

## 📜 License
MIT License - See [LICENSE](LICENSE) for details.

---

## 📧 Contact
**Rajdeep Das**  
[![Email](https://img.shields.io/badge/Email-drajdeep00108%40gmail.com-red)](mailto:drajdeep00108@gmail.com)  
[![LinkedIn](https://img.shields.io/badge/LinkedIn-rajdeepdas108-blue)](https://linkedin.com/in/rajdeepdas108)
