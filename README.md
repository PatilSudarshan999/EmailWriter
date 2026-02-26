# 📧 MailMind AI

**MailMind AI** is an AI-powered email assistant that helps users **generate, reply, and manage emails** with intelligent suggestions.  
It integrates seamlessly with **Gmail via a Chrome Extension** and provides a **backend service (Java Spring Boot)** for AI processing and management.  

---

## 🚀 Features

* ✨ **AI-Powered Email Replies** – Generates context-aware, professional, or casual replies instantly.  
* 🔍 **Smart Context Extraction** – Reads and understands the selected email before generating responses.  
* 🌐 **Chrome Extension** – Direct integration with Gmail.  
* ⚡ **Backend (Spring Boot)** – Handles AI processing, authentication, and API calls.  
* 🔒 **Secure Storage** – Keeps user data and preferences safe.  

---

## 🏗️ Tech Stack

**Backend:** Java (Spring Boot), REST APIs  
**Extension:** Chrome Extension (Manifest v3, JavaScript)  
**AI Engine:** Gemini API (GPT-based)  
**Database:** MySQL / PostgreSQL (configurable)  

---

## 📂 Project Structure

```
MailMind-AI/
│── MailMind-AI-Ext/        # Chrome Extension  
│── MailMind-AI-Spring/     # Spring Boot Backend  
│── README.md               # Project Documentation  
```

---

## ⚙️ Installation & Setup

### 🔹 1. Clone the Repository

```bash
git clone https://github.com/Vinayak24Patil/MailMind-AI.git
cd MailMind-AI
```

### 🔹 2. Setup Backend (Spring Boot)

```bash
cd MailMind-AI-Spring
./mvnw spring-boot:run
```

Backend will start at: `http://localhost:8080`

### 🔹 3. Load Chrome Extension

1. Go to **chrome://extensions/**  
2. Enable **Developer Mode**  
3. Click **Load unpacked** → Select `MailMind-AI-Ext/`  

---

## 🎯 Usage

1. Open Gmail in your browser.  
2. Select an email → Click on **MailMind AI Extension** icon.  
3. Get AI-generated replies instantly.  

---

## 📸 Screenshots

👉 *[Add your extension screenshots here]*  

---

## 📌 Roadmap

* [ ] Add multiple email client support (Outlook, Yahoo)  
* [ ] Improve personalization (tone, language preferences)  
* [ ] Offline draft saving  
* [ ] Voice-to-email replies  

---

## 🤝 Contributing

Contributions are welcome!  

1. Fork the repo  
2. Create a new branch (`feature-xyz`)  
3. Commit your changes  
4. Open a Pull Request 🚀  

---

## 📜 License

This project is licensed under the **MIT License**.  

---

## 🌟 Support

If you like this project, give it a ⭐ on GitHub and share it with others!
