# Getting Started

This getting started guide assumes you have some knowledge of the command line
and git. If not [here's a great site to learn git](http://learngitbranching.js.org/),
and [here's a code academy course on the command line](https://www.codecademy.com/learn/learn-the-command-line).


## Installation


### Method 1: Install node through the node.js website

You can install node.js on your computer [here](https://nodejs.org/en/). As far
as I know it's pretty straightforward, if you have issues just Google it, there
are plenty of installation guides online.

### Method 2: Use a package manager

If you'r on a mac and have homebrew install I know the command is:

```
brew install node
```

If you're on linux or windows just Google it, I'm sure something will pop up.

## Running

1. First thing your going to want to do is clone this repository and then cd
into the React/ui/ directory.

2. In order to run you'll need to download all the necessary modules. Assuming
you have node.js installed the command is:

```
npm install
```

3. You can then run a development server locally with the command
```
npm start
```

4. Open up your browser and go to localhost:8080 and everything should be
running.

## Docker

If you have docker I set up some rudimentary docker files to run everything.
If you don't you can install docker [here](https://www.docker.com/community-edition).
Then simply cd into the React/ directory and run:
```
docker-compose up
```
This will set up the proper volumes and everything. Then just open your browser
and go to localhost:8080

# Contact

If any of this stuff interests you and you're looking for a internship this
summer Custom Orthopaedic Solutions (COS) is hiring, that's where I interned
there last summer and learned everything I covered in my talk and more there.
Just email Rakesh Guha at rguha@customorthopaedics.com He's a super nice guy
and a relatively recent Case grad.

If you have any questions about my talk, my experience at COS, or anything else.
don't hesitate to reach out, the best email to reach me is me@adamcollins.io.
My case id is adc82, but I get a lot of junk to that email so I tend to not
check it as carefully...

# Shameless Plug

I'm currently running a weekly newsletter, we're interviewing people about
their careers. [you can subscribe here.](http://www.clktech.io/)
So far we've interviewed a couple case alum including Andrew Mason and Stephanie
Hippo. Our biggest interview by far was Asheem Chandna, he's a partner in Greylock
an enterprise VC firmin Silicon Valley. One of their biggest investments
was AppDyanmics, they were recently bought by Cisco for a couple billion.


# Interesting links

If this talk interested you and you're looking to dive deeper any of the
material here are some great links.

- [This is a full-stack Redux Tutorial. When I was learning React/Redux I
probably went through this tutorial 10 times](https://teropa.info/blog/2015/09/10/full-stack-redux-tutorial.html)
- [This is one of my favorite tech talks ever. It was given at React.js Conf
2015 on immutable.js, but covers a lot of topics such as why immutable data is
important and functional programming principles. I think everyone should watch
this even if you don't care about JavaScript](https://www.youtube.com/watch?v=I7IdS-PbEgI)
- [React documentation](https://facebook.github.io/react/)
- [Immutable.js documentation](https://facebook.github.io/immutable-js/)
