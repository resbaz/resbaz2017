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

### Contribution Guide

To create a page for your local site (which is referred to as City in this example), submit the following in a pull request: 

1. Create `city.html` in the base directory by copy and editing `template.html`
2. Add City to the `sites.geojson` file in the base directory
3. Add a `city.geojson` file in the `sites/` directory
4. Add a `city.jpg` background image in the `img/` directory

If you have any trouble creating the pull request,
please feel free to open an issue and one of the site maintainers will help you out.
