echo '------ [SHPP] CodeRunner Service ------';
echo '------ centOS/7 bootstrap script ------';

VAGR_HOME=$(echo ~vagrant)/sync

echo '---| info: updating grub command line to enable memory swapping'
[[ -r /etc/default/grub ]] && echo "---| info: writing changes to file /etc/default/grub" || echo "---| error: /etc/default/grub is unavailable"
sudo bash -c 'echo "GRUB_CMDLINE_LINUX="cgroup_enable=memory swapaccount=1"" >> /etc/default/grub'

echo '---| info: updating repositories data'
#sudo yum update --assumeyes


echo '---| info: checking package: docker'
tmp=$(type docker)
if [[ $tmp = '' ]]
then
	echo '---| info: can not find docker, installing'
	sudo yum install docker --assumeyes
else
	echo '---| info: docker is allready installed'
fi

echo '---| info: checking package: curl'
tmp=$(type curl)
if [[ $tmp = '' ]]
then
	echo '---| info: can not find curl, installing'
	sudo yum install curl --assumeyes
else
	echo '---| info: curl is allready installed'
fi

echo '---| info: checking package: git'
tmp=$(type git)
if [[ $tmp = '' ]]
then
	echo '---| info: can not find git, installing'
	sudo yum install git --assumeyes
else
	echo '---| info: git is allready installed'
fi

echo '---| info: checking package: node.js'
tmp=$(type node)
if [[ $tmp = '' ]]
then
	echo '---| info: can not find node.js, installing'
	curl --silent --location https://rpm.nodesource.com/setup_5.x | sudo bash -
	sudo yum -y install nodejs --assumeyes
else
	echo '---| info: node.js is allready installed'
fi

echo '---| info: cloning CodeRunner git repository'
cd $VAGR_HOME

#git clone https://github.com/holateam/coderunner

if ! [[ -r $VAGR_HOME/coderunner/setup-everything.sh ]]
then
	echo "---| info: repository clonned successfully"
	cd $VAGR_HOME
	echo "---| info: starting server deployment"
	echo "---| info: adding non sudo docker usage"
	sudo groupadd docker
	sudo gpasswd -a vagrant docker
	sudo service docker restart
	newgrp docker
	echo '---| info: looking for available docker language compilers'
	for file in `find $VAGR_HOME/docker/* -type d`
	do
		lang=$(basename $file)
		echo "---| Found language: $lang. Creating docker container"
		cd $file
		sudo docker build -t ${lang}_img .
	done
	echo '---| info: installing node.ls npm modules and dependencies'
	cd $VAGR_HOME/node
	npm install
	echo "---| info: starting CodeRunner service"
	npm install -g forever forever-service
	forever-service install -s $VAGR_HOME/node/server.js --start
	echo -e "---------------------------------------\n---| All preparetions done succsessfully. You need to restart Vagrant now.\n---| Exit Vagrant shell.\n---| Use $ vagrant halt to stop Vagrant\n---| Use vagrant up to start virtual machine"
else
	echo "---| error: troubles while clonning repository"
fi
