module.exports = {
    apps: [
        {
            name: "patient-survey",
            script: ".next/standalone/server.js",
            interpreter: "bun",
            instances: 1,
            exec_mode: "fork",
            autorestart: true,
            max_memory_restart: "1G",
            env: {
                NODE_ENV: "production",
                PORT: 3838,
                HOSTNAME: "0.0.0.0",
            },
        },
    ],
};
