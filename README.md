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

## Packages Required:-
- Truffle v5.6.7 (core: 5.6.7)
- Ganache v7.5.0
- Solidity v0.5.16 (solc-js)
- Node v16.20.0
- Web3.js v1.7.4
- npm 7.5.1

## Other Requirements:-
1. Any chromium based browser i.e. Chrome 
2. Metamask browser extension
    
## Setup Process 

1. Clone the project
```
git clone https://github.com/rajdeepdas108/RakshaSetu.git
```
2. First step 1:-
```
nvm current 
```
3. First step 2:-
```
npm -v
```
4. Go to the project folder, open terminal there and run following command to install required node_modules:-
```
npm i
```
5. Compile contract source files. (Compilation and deployment can be done using truffle migrate):-
```
npm install truffle -g
```

6. Open Ganache, (to setup local blockchain)
    - crerate new workspace
    - add truffle-config.js  in truffle project 
    - change port to 7545 in server settings (same as port in truffle-config.js)

7. In terminal, run following commands:-

- Run migrations to deploy contracts.
```
truffle migrate
```    
8. In chrome, open metamask 
   - add new test network using  
        - NETWORK ID (i.e. 5777 ,from Ganache Server settings) 
        - RPC SERVER (i.e HTTP://127.0.0.1:7545 ,from Ganache Server settings)
        - CHAIN CODE (i.e. 1337)
   - import account using private key of any account from local blockchain available in Ganache.


9. To start a server and it will open a homepage (index.html) file in the default browser.
```
npm run dev 
``` 
10. Login to metamask ,and connect the added account to local blockchain by clicking the 'Connect Wallet' button on the homescreen.
11. Interact with website
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
