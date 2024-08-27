# Build and Run Wedding container

docker build . -t wedding && docker rm -f wedding && docker run -p 9013:80 --name wedding -d wedding
