# Node-JS-App-in-AWS-EC2
This repository gives a quick glance about launching Node JS apps in AWS EC2

# Node Random Quote Generator

This is a great start for simple deployments in AWS EC2. The app I built is very simple and it generates the quotes with their author name randomly on every visit. The total count of quotes are around 102.

## Let's start with creating an instance.
Navigate to EC2 section under Services -> Compute -> EC2 or You can directly search for EC2.


![image](https://user-images.githubusercontent.com/94333583/213897342-019c7d4c-94dc-45ed-9a7f-1327cabbde6b.png)

Then click on Launch instance.

![image](https://user-images.githubusercontent.com/94333583/213901715-3d06cf57-2876-484e-968c-8c9a448ea0b6.png)


## My instance configuration settings.

![image](https://user-images.githubusercontent.com/94333583/213897576-f742e5f7-bcd9-49eb-bae4-4d8c87bde355.png)


I've selected t2.micro as it is free tier eligible. I already have some key pairs but still, for your clarity I'll create new key pairs now.


![image](https://user-images.githubusercontent.com/94333583/213897678-1fdd0107-b190-4395-9f55-8246105fd01e.png)

## Creating Key pairs

Here I'm just giving a simple name and leaving the remaining settings as default. If we are using puTTY for connection we can change to different settings but here I'll show you some other easy way. So, we don't need to change anything else here.

![image](https://user-images.githubusercontent.com/94333583/213897772-88f49ad5-5dac-4f67-bfe5-76261b9a6139.png)

### Save the key pairs safely in your local desktop. 🛑🛑🛑Never let them go public.

## Network settings and launching instance

We should allow SSH, HTTP and HTTPS traffic to the instance so that we anyone can connect to it. By doing this your app which is launched on Port: 80 can be directly accessed throught the public DNS link of instance.

![image](https://user-images.githubusercontent.com/94333583/213897930-954c82fe-e87a-477b-9ac5-c8bfaa944e16.png)


Before going to step - 1 make sure your instance is running perfectly fine and you have connected to it using PuTTY or EC2 Instance Connect or any other SSH. Here I'll use EC2 Instance connect method for simplicity. You can check the status of running instances in EC2 instances section. Wait till the instance starts and its status turns to "Running".


![image](https://user-images.githubusercontent.com/94333583/213898143-5279c5d3-5880-4015-8d22-3fa7c0e536f9.png)


If you are planning to run the app on some other port follow the next step.

### <a href = "https://github.com/sanjay-72/Node-JS-App-in-AWS-EC2/blob/main/DeploymentInOtherPort/Process.md" target = "_blank">Additional settings for running app on other port.(PORT:3000) is considered in this example</a>

After doing all these things save the settings.

## Go to instance page and click connect over there.

![image](https://user-images.githubusercontent.com/94333583/213899134-81d8d092-e415-46ff-9b9e-8cb5b836eb9d.png)

![image](https://user-images.githubusercontent.com/94333583/213899197-80391163-62cf-4f1d-91b5-700407700d82.png)

## We are now connected to our instance 😊

![image](https://user-images.githubusercontent.com/94333583/213899303-0b126216-7fb6-49ee-aea3-b1afa53d2b40.png)

Follow the steps carefully and deploy your application.

## Step 1: Install NodeJS and NPM using nvm

Install node version manager (nvm) by typing the following at the command line.

```bash
sudo su -
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.32.0/install.sh | bash
```
Activate nvm by typing the following at the command line.

```bash
. ~/.nvm/nvm.sh
```

Use nvm to install the latest version of Node.js by typing the following at the command line.

```bash
nvm install 15.0.0
```

Test that node and npm are installed and running correctly by typing the following at the terminal:

```bash
node -v
npm -v
```

## Step 2: Install Git and clone repository from GitHub
To install git, run below commands in the terminal window:

```bash
yum install git -y
```

Just to verify if system has git installed or not, please run below command in terminal:
```bash
git -v
```

This command will print the git version in the terminal.

## Step 3: Cloning the code from repository and running it.
Run below command to clone the code repository from Github:

```bash
git clone https://github.com/sanjay-72/Node-JS-App-in-AWS-EC2
```

Get inside the directory and Install all the required Packages

```bash
cd Node-JS-App-in-AWS-EC2
npm install
```

Start the application
To start the application, run the below command in the terminal:

```bash
node app.js
```

But even after doing all these things your server get closed when you close your current session. So we need to use pm2 for running it continuously.
Before proceeding you should end node server with shortcut <strong>Ctrl+C</strong>
<br>
## Step 4:Running the app 24X7
If you need to run it 24*7 you need to install pm2 and run the app using it.

```bash
npm install pm2 -g
```
```bash
pm2 startup
pm2 save
pm2 start app.js
pm2 save
```

# Some useful pm2 commands
```bash
pm2 list
pm2 logs
pm2 monit
pm2 restart app_name
pm2 reload app_name
pm2 stop app_name
pm2 delete app_name
```

# Checking your app on cloud.

![image](https://user-images.githubusercontent.com/94333583/213899423-0a77a39e-9ba4-4253-a402-dc7611fb0c65.png)

If you are using any other port you can just add ":PORT" at the end of the link.

*PORT refers to your port number.
