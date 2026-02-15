# 🚀 Node.js High-Performance Clustered Server

A high-performance web server demonstration using **Node.js Clustering** to handle CPU-intensive tasks without blocking the event loop. 



---

## 🛠 Features
* **Multi-Core Scaling:** Detects available CPUs and forks worker processes for maximum performance.
* **Auto-Recovery:** The primary process monitors workers and automatically spawns replacements if one crashes.
* **ES Modules (ESM):** Built using modern `import/export` syntax.
* **Influencer Hub UI:** A professional landing page built with **EJS**, **Tailwind CSS**, and **Lucide Icons**.
* **Load Balancing:** Proven via process ID (PID) tracking in responses.

---

## 📂 Project Structure
```text
.
├── primary.js        # The Manager (Primary process)
├── index.js          # The Web Server (Worker logic)
├── package.json      # Configuration & Dependencies
└── primary.js        # The Manager (Primary process)

npx loadtest -n 1000 -c 100 http://localhost:3000/heavy

-n 1000: Total requests

-c 100: Concurrent users

Dependencies
Express: Web framework for the worker logic.
PM2: (Optional) For production-grade process management.
Loadte<img width="583" height="717" alt="Screenshot 2026-02-15 143614" src="https://github.com/user-attachments/assets/c04acec4-fd33-4f66-ae68-c3aa54828f4c" />
st: For benchmarking concurrency.

![Uploading Screenshot 2026-02-15 143614.png…]()
