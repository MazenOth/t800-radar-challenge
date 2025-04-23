# 🎯 T-800 Radar System (Objective Selection Module)  

## 📥 Installation & Testing Guide  

### 🚀 Getting Started  

#### 1️⃣ Clone/Download the Project  

```sh
# Download the submission ZIP
unzip mazen-othman_codetest_sonnen.zip -d t800-radar
cd t800-radar-challenge
```

---

### 🛠 Setup  

#### 2️⃣ Install Dependencies  
*Requires Node.js (v20.12.2 recommended)*  

```sh
npm install
```

---

### 🧪 Run Tests  

#### 3️⃣ Start the Server  
```sh
npm run start
# Server runs on http://localhost:3000
```

#### 4️⃣ Execute Test Suite  
*In a new terminal:*  
```sh
chmod +x test_attack.sh  # Make script executable
./test_attack.sh         # Run all test cases
```

✅ Expected output:  
```
Test 1 : [ OK ]
...
Test 7 : [ OK ]
```

---

### 📂 Project Structure  
```
src/
├── controllers/    # API endpoints
├── middlewares/    # Express middleware
├── routes/         # Express routes
├── models/         # Type definitions
├── services/       # Core radar logic
├── app.ts          # Express config
├── utils.ts        # Needed utils
├── types.ts        # Needed types
├── test_attack.sh  # Original test script
├── test_cases.json # Test scenarios
└── server.ts       # Entry point

```

---

💡 **Submission Notes**  
- Original `test_attack.sh` is unmodified  
- All dependencies are in `package.json`  
