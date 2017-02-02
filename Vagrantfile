$ubuntu_packages_script = <<SCRIPT
echo Installing prerequisites for Jekyll and GitHub Pages
apt-get update
apt-get -y install ruby2.3-dev nodejs zlib1g-dev gcc make ruby-bundler
SCRIPT

$ruby_script = <<SCRIPT
echo Installing Ruby stuff
cd /vagrant/
bundle install
SCRIPT


Vagrant.configure(2) do |config|
  config.vm.box = "ubuntu/yakkety64"
  config.vm.provision "shell", inline: $ubuntu_packages_script
  config.vm.provision "shell", privileged: false, inline: $ruby_script
  config.vm.network "private_network", ip: "10.0.30.15"
end
