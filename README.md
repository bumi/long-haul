Long Haul Meetup is a fork of the great [Long Haul jekyll theme](http://github.com/brianmaierjr/long-haul) that adds some functionality to create a website for a meetup or events.

This repo is ment to be used as a starting point for your meetup website. Simply fork it and customize it.

#### [Example page](https://bumi.github.io/long-haul/)

## Features

- all the [Long Haul features](https://github.com/brianmaierjr/long-haul#features) plus:
- customized view for events
- RSVP and list of participants (stored using [stamplay.com](http://stamplay.com))
- embedded google maps

## Setup

1. [Install Jekyll](http://jekyllrb.com)
2. Fork the [Long Haul repo](http://github.com/bumi/long-haul)
3. Clone it
4. bundle install
6. Run Jekyll `bundle exec jekyll serve -w`
7. Run `bundle exec compass watch`
8. Customize!

### How to use RSVP

Jekyll is a static site generator and thus obviously runs without dynamic backend. 
Because we want to store meetup participants and list them on the website this theme uses [Stamplay](http://stamplay.com) as a Backend as a Service provider. 
Stamplay allows us to store and retrieve data using JavaScript. 

1. Sign up for Stamplay: [https://editor.stamplay.com/login](https://editor.stamplay.com/login)
2. Create a new app and add the app_id to the `_config.yml`
3. Create a new object with id `participant` and the following schema:
    * name - string (required)
    * meetup - string (required)
    * email - string
    * gravatarHash - string
4. Go to `Hosting` in Stamplay and add your domain to the CORS enabled domains (or * for all domains)
5. Done.

Have a look at the Stamplay [Quickstart](https://stamplay.com/docs/quickstart) and [JS docs](https://stamplay.com/docs/jssdk)

### Deploy

Before you deploy your site make sure to configure URL and paths correctly in `config.rb` and `_config.yml`.
Then simply push to your GitHub gh-pages branch. ([more information about GitHub pages](http://pages.github.com/)) 

Or simply use the generated site from the `_site` forlder and put it on your preferred hosting provider. Also checkout [5apps.com](http://5apps.com/) for HTML5 app deployment.

## Site Settings

The main settings can be found inside the `_config.yml` file:

- **title:** title of your site
- **description:** description of your site
- **url:** your url
- **paginate:** the amount of posts displayed on homepage
- **navigation:** these are the links in the main site navigation
- **stamplay:** the stamplay app_id to store participants
- **social** diverse social media usernames (optional)
- **google_analytics** Google Analytics key (optional)


## License

This is [MIT](LICENSE) with no added caveats, so feel free to use this Jekyll theme on your site without linking back to me or using a disclaimer.

--------
made with <3 in Kigali Rwanda
