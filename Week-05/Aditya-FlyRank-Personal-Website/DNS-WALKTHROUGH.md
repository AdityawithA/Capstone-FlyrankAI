# DNS Walkthrough — Aditya Kumar Personal Portfolio

**Live Website:** https://aditya-kumar-flyrankai.netlify.app/

## 1. What is DNS?

DNS stands for **Domain Name System**.

DNS is responsible for translating human-readable website names into information that computers can use to locate a website.

For example, instead of remembering a server address, a user can open:

`https://aditya-kumar-flyrankai.netlify.app/`

The browser uses DNS to determine where that hostname is served.

In simple terms:

> **DNS works like the internet's address book.**

It connects a hostname that humans can remember with the infrastructure that serves the website.

---

## 2. What is a DNS Resolver?

A **DNS resolver** is the service that receives a DNS lookup request from a user's device and finds the required DNS information.

For example, when I open:

`aditya-kumar-flyrankai.netlify.app`

the browser/device needs to find out where that hostname is hosted.

The device asks a DNS resolver.

The resolver may already have the answer cached. If it does not, it performs the required DNS lookup and returns the result to the device.

### Simple flow

```text
Browser
   |
   v
DNS Resolver
   |
   v
DNS lookup
   |
   v
DNS answer
   |
   v
Browser connects to website