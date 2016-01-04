# 6: He Tasks Me

<!-- TOC depthFrom:2 depthTo:6 withLinks:1 updateOnSave:1 orderedList:0 -->

- [App Details](#app-details)
	- [Authentication](#authentication)
	- [Linking Firebase and Google](#linking-firebase-and-google)
	- [Features](#features)
- [The Development Process](#the-development-process)
	- [Where's the Code?](#wheres-the-code)
	- [Git Discipline](#git-discipline)
	- [Process steps](#process-steps)
	- [Team Assignment](#team-assignment)
- [Project Evaluation](#project-evaluation)

<!-- /TOC -->

> He tasks me; he heaps me; I see in him outrageous strength, with an inscrutable malice sinewing it. That inscrutable thing is chiefly what I hate; and be the white whale agent, or be the white whale principal, I will wreak that hate upon him. Talk not to me of blasphemy, man; I’d strike the sun if it insulted me.
>
> -Captain Ahab, *Moby Dick*

At last, we are ready to build our first app. Since we actually want this to be a useful app, we're going to make ourselves a Homework Reminder app. Here's the "elevator pitch" for the thing:

>Mirman students need better ways to track the work they need to do. Moodle helps, but it isn't enough. It's time we took ownership of our homework with a tool designed exactly for our needs. Forget Notes. Forget Reminders.
>
Introducing **Mirmindr**.

We can change the name.

## App Details
**Mirmindr** will be a web-based AngularJS app using Firebase as a backend to store user data. That means logging in. But we don't want to have to store user passwords if we can get away with it, so we'll use our Google accounts to log in, and offload authentication to Google.

Thanks, Google!

### Authentication
You've seen this before:

![google-signin](http://ucollect.biz/wp-content/uploads/2015/03/Red-signin_Long_base_44dp.png)

That's how we log into the Moodle, and that's how we're going to log into our Firebase database. See, we're going to protect each user's reminders, assignments, whatever-you-call-them, behind a login. Only by correctly authenticating will a user be able to access/update their tasks. Since we're making this app for Mirman users, and we know all of them have Google accounts, we can safely use Google authentication and only Google authentication.

Other services like Facebook, Twitter, even GitHub, offer similar authentication methods. They're all built on (surprise surprise) an open standard known as **OAuth**. Actually, OAuth 2.0. The image below demonstrates how it works:

![oauth](https://developers.google.com/accounts/images/webflow.png)

So authentication is all handled by Google. All we have to store is a JSON object for each user ID.

### Linking Firebase and Google
Say it with me one more time: [READ THE DOCS](https://www.firebase.com/docs/web/guide/login/google.html)

[ALSO THESE DOCS](https://www.firebase.com/docs/web/libraries/angular/quickstart.html#section-authentication)

In all seriousness, we'll work together on this one. But AngularFire makes it pretty easy.

### Features
Here is a list of features for the Mirmindr:

1. Google login: Access your tasks anywhere
2. Categorize Tasks: Separate tasks by subject
3. Due Dates: Set due dates and receive alerts when your deadline arrives (or is a certain amount of time away).
4. Prioritize Tasks: Some jobs are more important than others
5. ???

## The Development Process

### Where's the Code?
Yeah, we're going to do this a little differently than the exercises hitherto. This is not a drill. This is a real-life project that actual, human organisms will use. So instead of the code residing in our class repo, it will exist in its own repository. All of us will be contributors to this repo:

[https://github.com/mirman-school/mirmindr](https://github.com/mirman-school/mirmindr)

You've been invited to join the **webapps2** team on GitHub. That means you'll have permission to commit code to our repo.

### Git Discipline
Here's where Git shines, but also where you need to use it correctly. If we're all just committing to the master branch, things are going to get messy. What we want instead are separate **branches** and **pull requests**. We'll go over these together.

### Process steps
I know it's just so tempting to jump in and start hacking. But with apps like this, where the whole team needs to work together, following a process is important. We're laying out a game plan for success here—it's a good idea if we follow it.

- [ ] Featureset definition
- [ ] Design Mockups
- [ ] Process flowchart
- [ ] Mockup to HTML/CSS
- [ ] JavaScript business logic (Firebase, auth)
- [ ] Join HTML/JS (`ng-model`)
- [ ] Alpha/Beta test releases
- [ ] Debug to stable Beta
- [ ] SHIP
- [ ] Party

I'm not kidding about the last one. A release party is a *crucial* part of the development process.

### Team Assignment
Here are the teams. Yes, not every team is responsible for the same stuff. Deal with it.

1. Mockup/Process Flow
2. Design (HTML/CSS/Sass)
3. Logic (JavaScript)
4. Documentation

We'll assign these teams in class. Responsibilities might change throughout the process, and assignments might be fluid. Such is life. What won't change is that you all are responsible for the end product's quality.

How shall we judge its quality? Well, I've made a rubric.

## Project Evaluation

Criterion | 4 | 3 | 2 | 1
-- | --
**Teamwork** | Works seamlessly. | Some conflicts, but the work gets done. | Constant arguing, questionable output. | Total system collapse.
**Code** | Elegant, functional, all features included. | Minor bugs, but usable code. Follows best practices. | Showstopper bugs, features missing. | Most features unusable.
**Design** | Pleasant UX/UI. I look forward to opening this app. | Some rough edges, but mostly polished and professional. | I *can* use it, but I'd rather not. | Just ew.
**Documentation** | Clear and helpful. Great writers, these coders. | Helpful, but maybe some more English classes would help. | Wait, what? | I'm now more confused than before.
**Total** | **16** | **12** | **8** | **4**

There now. You have all the info you need to get started. Let's make an app.
