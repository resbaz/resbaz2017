# ResBaz-2017 Site

Welcome! This repo contains the website for the 2017 Research Bazaar festival. If you'd like to learn more about how to bring ResBaz to your town, have a look at [this blog](https://resbazblog.wordpress.com/) - we'd be delighted to work with you!

## Local Sites

In addition to the main page, this website also offers local listings for each site joining us for ResBaz 2017. If you want your site added, open an issue to start the process, and we'll get you set up right away.

## Contributing

### Setup

This website is built from the [Start Bootstrap Freelancer theme](https://github.com/IronSummitMedia/startbootstrap-freelancer), on [Jekyll](https://jekyllrb.com/) and [Bootstrap](http://getbootstrap.com/). If you'd like to build it on your local machine, do the following:

 - [Install dependencies using Bundler](https://help.github.com/articles/setting-up-your-github-pages-site-locally-with-jekyll/#step-2-install-jekyll-using-bundler): `bundle install`
 - In the base directory of this repo, do `bundle exec jekyll serve`
 - If all has gone well, you'll be able to visit your version of the main website at `http://127.0.0.1:4000/` and the various city pages at `http://127.0.0.1:4000/melbourne`, `http://127.0.0.1:4000/auckland`, etc.

### Alternative Setup Instructions Using Vagrant

If you struggle to get Jekyll working on your computer you could try to use the Vagrant development environment instead. In the base directory of this repo, do:

```bash
vagrant up
vagrant ssh
cd /vagrant/
bundle exec jekyll serve --host 10.0.30.15
```

Note that the `vagrant up` command can take a while the first time you run it.

Then on your computer open `http://10.0.30.15:4000/` in your browser.

When you are done and want to shut the Vagrant virtual machine down:

```bash
# press ctrl-c to stop, and type:
exit  # Logs you out of the Vagrant machine and you should be back in your own terminal
vagrant halt  # Halts the running Vagrant virtual machine
vagrant destroy  # Removes the vagrant machine permanently
```

### Contribution Guide

To create a page for your local site (which is referred to as City in this example), submit the following in a pull request: 

1. Create `city.html` in the base directory by copy and editing `template.html`
2. Add City to the `sites.geojson` file in the base directory
3. Add a `city.geojson` file in the `sites/` directory
4. Add a `city.jpg` background image in the `img/` directory

(If you've got you're own ResBaz website and you simply want to link to it rather than using our template,
you only need step 2.)

If you have any trouble creating the pull request,
please feel free to open an issue and one of the site maintainers will help you out.

Tip: I've found that the YAML text block at the top of the HTML template files can be tricky to get right. Copy and paste the text between the `---` lines into this online validator: <http://yaml-online-parser.appspot.com/>

