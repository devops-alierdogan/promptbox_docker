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

 
 

Client ID: 79795455903-lqmrps1dpsfe2nu5pejo5rlm3jop0lqs.apps.googleusercontent.com
Client secret: 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

{"web":{"client_id":"79795455903-lqmrps1dpsfe2nu5pejo5rlm3jop0lqs.apps.googleusercontent.com","project_id":"softtech-vector-database-test","auth_uri":"https://accounts.google.com/o/oauth2/auth","token_uri":"https://oauth2.googleapis.com/token","auth_provider_x509_cert_url":"https://www.googleapis.com/oauth2/v1/certs","client_secret":"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"}}
