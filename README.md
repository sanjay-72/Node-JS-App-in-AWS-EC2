# Node-JS-App-in-AWS-EC2
This repository gives a quick glance about launching Node JS app in AWS EC2

# Node Hello World

This is a great start for simple deployments in AWS EC2.

Before going to step - 1 make sure your instance is running perfectly fine and you have connected to it using PuTTY or EC2 Instance Connect or Any other SSH.
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
git — version
```

This command will print the git version in the terminal.

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

But even after doing all these things your server get closed when you close your current session.
<br>
If you need to run it 24*7 you need to install pm2 and run the app using it.

```bash
npm install pm2
pm2 start app.js
```

