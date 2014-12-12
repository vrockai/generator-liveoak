![](http://design.jboss.org/liveoak/banner/images/liveoak-banner-1180px.png)

# generator-liveoak

## Getting Started

### What is Yeoman?

Trick question. It's not a thing. It's this guy:
![](http://i.imgur.com/JHaAlBJ.png)

Basically, he wears a top hat, lives in your computer, and waits for you to tell him what kind of application you wish to create.

Not every new computer comes with a Yeoman pre-installed. He lives in the [npm](https://npmjs.org) package repository. You only have to ask for him once, then he packs up and moves into your hard drive. *Make sure you clean up, he likes new and shiny things.*

```bash
npm install -g yo
```

### Yeoman Generators

Yeoman travels light. He didn't pack any generators when he moved in. You can think of a generator like a plug-in. You get to choose what type of application you wish to create, such as a Backbone application or even a Chrome extension.

To install generator-liveoak from npm, run:

```bash
npm install -g generator-liveoak
```

### LiveOak Generator

The liveoak-generator is used to quickly scaffold a simple [LiveOak](http://liveoak.io) (chat) application, very similar to the [LiveOak](http://liveoak.io) [liveoak-example-chat-html](https://github.com/liveoak-io/liveoak-example-chat-html) example. It's using many [LiveOak](http://liveoak.io) features OOTB, like the storage and subscriptions. To scaffold new project, just create a new directory, access it and run:

```bash
yo liveoak myApp
```

You'll be prompted to provide the host and port of your [LiveOak](http://liveoak.io) server. If you're running the server on your localhost, just press enter and the default value `http://localhost:8080` will be used. This will create new Angular.JS based [LiveOak](http://liveoak.io) project called `myApp`. You can initialize the project without the application name, like:

```bash
yo liveoak
```

In that case, the name of the current folder will be used as the application name.

After the initialization you need to create an application with the same name in [LiveOak](http://liveoak.io). Creating a basic application with default settings is recommended for this newly created project to operate correctly.

To start the actual application, simply run:

```bash
grunt serve
```

This will start the Node.JS web server hosting your application and start a web browser, opening the application. If you want to host the application directly on the [LiveOak](http://liveoak.io) server, you need to build it first with:

```bash
grunt build
```

After the build process you'll be able to locally import the application directory to the [LiveOak](http://liveoak.io) server or you can even push it to github and import from there. The build process is basically a rip-off of the [generator-angular](https://github.com/yeoman/generator-angular). It minimize and concat the js and css files and make the whole project ready for production. Visit the generator project [page](https://github.com/yeoman/generator-angular) to learn more.

### Getting To Know Yeoman

Yeoman has a heart of gold. He's a person with feelings and opinions, but he's very easy to work with. If you think he's too opinionated, he can be easily convinced.

If you'd like to get to know Yeoman better and meet some of his friends, [Grunt](http://gruntjs.com) and [Bower](http://bower.io), check out the complete [Getting Started Guide](https://github.com/yeoman/yeoman/wiki/Getting-Started).


## License

MIT
