# PLS wiki website

## Setup

To setup the site locally, you first need to install Jekyll:
```
gem install jekyll bundler
bundle install --path .bundle
```

Finally, you can serve a local copy of the website like this:
```
bundle exec jekyll serve
```
## Adding pages

To add a page, simply create a `.md` file in the home folder with the following preamble:
```
---
layout: page
title: <Your title here>
---
```

For any doubts, check the docs here: https://jekyllrb.com/docs/
