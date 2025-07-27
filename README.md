Commands to run Dockerfile:

1. Create a docker image from Dockerfile
    ```bash
    docker build . -t portfolio-app:latest

3. Run a container from a docker image
    ```bash
    docker run -d -p 5000:5000 portfolio-app:latest

PS. This app runs on port 5000; make sure to enable or forward the port. 
