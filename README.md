# About
Aim of the task is to implement "Observer" pattern. This task will help you
to understand core concept of "Reactive Programming".

# Task
**1. Create class "Publisher".** It is the class that provides three public
methods: **publish**, **addSubscriber** and **removeSubscriber**.

**2. Create class "Subscriber".** It is the class that represents "subscribers"
of the "publisher". This one has single public method: **trigger** (this method)
will be called by the "publisher" to provide some "payload", i.e. information).

**3. Set up "pub/sub" operations.** Create instance of the **Publisher** and
several instances of the **Subscriber**'s. Add listeners to subscriber and
publish several events. Your listeners have to _react_ on these events some way 
(e.g., modal window, "console.log", "alert", etc.).

# Quick commands
_(You can run this commands in console of your browser.)_
* `run()` Runs your code.

# GitHub Repository
https://github.com/balovbohdan/epam-rd-lecture-task-js-patterns

# Contributing
Pull requests are welcome. You can use this code freely for
your own projects and/or experiments. If you have some questions or proposals
feel free to message me (<balovbohdan@gmail.com>) or open an
[issue](https://github.com/balovbohdan/epam-rd-lecture-task-js-patterns/issues).
