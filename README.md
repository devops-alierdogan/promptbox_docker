### install git

    sudo apt update
    sudo apt install git 

### Install docker
    
    sudo apt-get update
    sudo apt-get install docker.io
    sudo systemctl start docker 

    https://github.com/sindresorhus/guides/blob/main/docker-without-sudo.md

    sudo groupadd docker
    sudo gpasswd -a $USER docker
    sudo service docker restart 

    //logout = Ctl + D 

    docker run hello-world 



###  Install docker-compose
 

    wget https://github.com/docker/compose/releases/download/v2.22.0/docker-compose-linux-x86_64  -O /usr/bin/docker-compose

    
    sudo chmod +x /usr/bin/docker-compose
 
    // open 
    nano  ~/.bashrc  

    // add 
    export PATH="${HOME}/bin:${PATH}"
    
   
          
  
### set GCP oAuth Env
 
    echo 'export GOOGLE_CLIENT_ID="XXX"' >> ~/.bashrc
    echo 'export GOOGLE_CLIENT_SECRET="XXX"' >> ~/.bashrc
 
### set SSO SAML 2.0 

SSO URL: https://accounts.google.com/o/saml2/idp?idpid=XXX
Entity ID: https://accounts.google.com/o/saml2?idpid=XXX


### Run App Container 

docker build -t node-app:latest ./promptbox

docker-compose up -d 

docker run -p 3000:3000 node-app

 

### Git 


