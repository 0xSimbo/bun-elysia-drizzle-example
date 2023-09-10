# Elysia, Drizzle, Postgres and Bun example project

## About
- [Elysia](https://elysiajs.com/) is a fast, and friendly Bun web framework, it is very flexible and easy to use, You shall be able to customize most of the library to fits your needs.
- [Drizzle](https://orm.drizzle.team/) Drizzle is ORM for sql database incredibly fast and easy to use, "if u know sql u know drizzle".
- [Bun](https://bun.sh/) is runtime for javascript, just like nodejs but much faster, it can also be used as package manager.

## How to install Bun
```bash
# Linux, macOS, or WSL
curl -fsSL https://bun.sh/install | bash
# homebrew
brew tap oven-sh/bun 
brew install bun
# check if bun is installed
bun upgrade 

# create new nextjs project (example)
## bun create next-app
```

## Getting Started
To get started with this template, simply clone the repository and run:
Beware to put your postgres credentials in .env file
```bash
git clone https://github.com/lucabrx/bun-elysia-drizzle-example.git
```
## run app with docker-compose
```bash
docker-compose up -d 
```

## commands
```bash
# run drizzle postgres migration
bun db:generate 
# push migration to postgres
bun db:push
# generate mock data
bun db:seed
```
