#!/bin/bash -e
docker build -t groupclap .

docker run --rm -it -d --name groupclap \
	-v $PWD:/home/app -w /home/app \
	-e "PORT=3000" -p 3000:3000  \
	groupclap

echo "-------------------------------------------"
echo "      Running on localhost:3000 "
echo ""
echo " If you need to enter the container, use:"
echo "    docker exec -it groupclap /bin/bash"
echo "-------------------------------------------"
