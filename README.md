# NodewithES6

# Node JS?

- Node.js is an open-source, cross-platform runtime environment used for the development of server-side web applications. Node.js applications are written in JavaScript and can be run on a wide variety of operating systems and browsers.

- Node.js is based on an event-driven architecture and a non-blocking Input/Output API that is designed to optimize an application's throughput and scalability for real-time web applications.

- Over a long period of time, the framework available for web development were all based on a stateless model. A stateless model is where the data generated in one session (such as information about user settings and events that occurred) is not maintained for usage in the next session with that user.

- A lot of work had to be done to maintain the session information between requests for a user. But with Node.js, there is finally a way for web applications to have real-time two-way connections, where both the client and server can initiate communication, allowing them to exchange data freely.

 **Node.js = Runtime Environment + JavaScript Library**
 
 # Node vs NPM vs NPX
 **Node:** It's a command to allows you to execute single java script file. 
 
 **NPM(Node Package Manager):** 
 
 - It is an online repository for the publishing of open-source Node.js projects.
 
 - It is a CLI tool that allows you install those packages and manage their versions and dependencies.
 
 **NPX(Node Package Execute):**
 It is a npm package runner. The typical use is to download and run a package temporarily or for trials.
 
  ```sh
 Ex: npx create-react-app
  ```
 create-react-app is an npm package that is expected to be run only once in a project's lifecycle. Hence, it is preferred to use npx to install and run it in a single step.
 
 
 
 # Docker
 
 Docker is possibly the most popular solution to have all your services run in a container. Containers allow us to run and develop an application in the same environment, regardless of what machine you’re on.
 
 Containers are a standardized unit of software that allows developers to isolate their app from its environment, solving the “it works on my machine” headache.

 Docker allows you to package an application with its environment and all of its dependencies into a "box", called a container. Usually, a container consists of an application running in a stripped-to-basics version of a Linux operating system. An image is the blueprint for a container, a container is a running instance of an image.
 
 
Create the image
 ```sh
 docker build –t ‘image_name’ . 
  ```
List of images
  ```sh
 docker images
   ```
Create and run container   
  ```sh
 docker run ‘image_name’
  ```
Create and run contaner on specific port  
 ```sh
 docker run –p 9090:8080 –d ‘image_name’
  ```
 Running your image with -d runs the container in detached mode, leaving the container running in the background. The -p flag redirects a public port to a private port inside the container.
 
List of containers  
 ```sh
 docker ps –a
  ```
Stop container  
 ```sh
 docker stop ‘container id’
  ```
Remove container  
 ```sh
 docker rm ‘container id’
  ```
Remove image file  
 ```sh
 docker image rm ‘image_id’
  ```
Navigate to container terminal 
 ```sh
 docker exec -it  ‘container_id’ /bin/bash
  ```

# ECMA Script

European Computer Manufacturers Association (ECMAScript) or (ES) is a standard for scripting languages like JavaScript, ActionScript and JScript. It was initially created to standardize JavaScript, which is the most popular implementation of ECMAScript.

![alt text](https://github.com/venubothsa/nodewithes6/blob/master/es6/Es6.PNG?raw=true)


# References
[Docker with Node](https://nodejs.org/en/docs/guides/nodejs-docker-webapp/)

[Docker with React](https://medium.com/better-programming/heres-how-you-can-use-docker-with-create-react-app-3ee3a972b04e)


