# cicd-nodejschat

[![Build Status](https://travis-ci.org/redklouds/cicd-nodejschat.svg?branch=master)](https://travis-ci.org/redklouds/cicd-nodejschat)

---
In this project I explore how socket IO works, since there has been alot of talk about its ability to scale massive real time data analytics over the websocket of the transport protocol. I Am able to explore this through a real-time chat client, which uses NodeJS programming language backed by ExpressJS and pug(old jade templating engine). Through this project i also demonstrate continuous integration and continuous deployment to a live demo cluster using Docker Swarm. The swarm cluster is held by 3 manager and 3 workers 3 nodes are from digital ocean and the remaning 3 are from amazon EC2 instance. This pip line uses Mocha and Chai as testing frameworks to ensure we are testing often, to ensure good code quality.

Hosted on http://lydanny.com:79790. for a live example(hopefully still running since I
have student credits)

* http://lydanny.com:7979
* http://lydanny.com:7979/hello

If you also want to see the condition of the swarm check out

* http://lydanny.com:8080

Description: Here we have a example of a python flask *complete* continuous
Integration continuous deployment pipline, the features and technologies used
are:
---
1. Docker 
2. Docker swarm
3. Docker Hub
4. Travis CI
6. Mocha
7. Express
8. Pug(Jade Renamed)
9. Sherperd 
10. Git
11. Mongodb
---

The pipline starts at our local development system , cloning the git repo we
begin the development, as we develop we can branch to feature branches or stay
with master, changing the code base and checking the features on our local
machine with docker local host machine.

As we commit and push our code changes, this is sent to travis CI for unit
testing and docker build confirmations, this is done with python pytest, to test
our new feature builds. Travis will clone our entire repo as well as start its
own virtual env on their services, following the defined .travis.yml
instructions to set up the build enviroment. 

Once the build environment is setup our unit test(pytest) scripts are called,
any of the 4 stages of travis build stages that return a *non-zero* exit code
are considered broken build:
[before_install],[after_install],[install],[script]. if any of these return
non-zero exit codes then travis will notify the users (defined within the
travis.yml config)
once a build has passed the predefined unittest code, it then moves to a script
to test docker image build passes, sometimes unittest passes however the docker
build image (in production may fail) so we test this here. If the building and
running of the docker image does NOT return a non-zero exit code, we move to
start building the actual image appending the latest build version tag to it.
once the build has completed travis is instructed to upload/push the new image
to our docker hub repo.

We use shepered (very small 4mb) docker image running on our docker swarm, to
periodically check for updates on our containers currently running on the
cluster, if there is a new digest in our dockerhub( which is all taken care of
by docker hub itself) then sherpered will, gracefully perform a *rolling update*
on the current running containers, pulling the new build-passed code updates to
the running environment(production)

This example concludes there are alot of configurations to learn and undertand
however please check out these tools.

[Travis CI](https://travis-ci.org/)
[Sheperd](https://github.com/djmaze/shepherd)
[Docker](https://www.docker.com/)
[ExpressJS](https://expressjs.com/)
[Pug](https://pugjs.org/api/getting-started.html)
[Mocha](https://mochajs.org/)
[Chai](http://chaijs.com/)



