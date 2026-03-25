#!/bin/bash
cd /home/kavia/workspace/code-generation/react-hello-world-app-336940-336954/hello_world_frontend
npm run build
EXIT_CODE=$?
if [ $EXIT_CODE -ne 0 ]; then
   exit 1
fi

