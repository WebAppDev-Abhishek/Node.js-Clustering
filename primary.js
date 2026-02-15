import cluster from "cluster";
import os from "os";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

// 1. Setup paths correctly
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// 2. Define the worker file path
const workerPath = join(__dirname, "index.js");
const cpuCount = os.cpus().length;

if (cluster.isPrimary) {
    console.log(`The total number of CPUs is ${cpuCount}`);
    console.log(`Primary process (PID: ${process.pid}) is running`);

    // 3. Point the workers to your Express app file
    cluster.setupPrimary({
        exec: workerPath,
    });

    // 4. Create workers
    for (let i = 0; i < cpuCount; i++) {
        cluster.fork();
    }

    // 5. Lifecycle Management
    cluster.on("online", (worker) => {
        console.log(`Worker PID: ${worker.process.pid} is online and ready`);
    });

    cluster.on("exit", (worker, code, signal) => {
        console.log(`Worker PID: ${worker.process.pid} died (Code: ${code}, Signal: ${signal})`);
        console.log("Spinning up a replacement worker...");
        cluster.fork();
    });
}