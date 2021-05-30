#This shell script takes an input $EC2_INSTANCE
#This is the address to ssh into for deployment.


#Push built docker images to hub
docker-compose push

#Sets file modification times to last commit they were changed.
#Done to minimize files sent using rsync.
python3 git-restore-mtime

#Remove dockerfiles
rm frontend-Flickr/Dockerfile*

#Sending of project files to be used as volumes,
#allowing static files to be changed without reloading containers
rsync -e "ssh -o StrictHostKeyChecking=no" -au frontend-Flickr upload/docker-compose.yml ubuntu@$EC2_INSTANCE:fotone

#From instance, pulls updated images and reloads the containers if they were changed.
ssh ubuntu@$EC2_INSTANCE "cd fotone; sudo docker-compose pull; sudo docker-compose up --build -d"
