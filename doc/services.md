# Services

In modern software development, monolithic applications, where all components are tightly coupled and deployed as a single unit, are increasingly being replaced by a more modular and scalable approach called microservices architecture. Microservices are small, independent services that work together to form a larger application

The Gridlinks project recognizes the benefits of this architectural style and plans to create a set of microservices, referred to as "gridsvcs". These microservices will support the core Gridlinks application and provide an illustration of how to create and deploy such services.

## Gridsvcs

The "gridsvcs" set of microservices will be deployed as a set of Docker containers. The Docker containers will be deployed to a Kubernetes cluster, which will be managed by a cloud provider. All the details and code for this effort are available in the [gridsvcs](https://github.com/gridlinks/gridsvcs) GitHub repository. And like this doc it is deployed to [codemarc.net/doc/gridsvcs](https://codemarc.net/doc/gridsvcs).

---

[Back «](pages)  __Services__  [» Next](publish)