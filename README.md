# groupclap


# Quickstart

## Option A - Local Dev with npm

If you already have npm installed...

```
npm install
node server.js
```

Then open localhost:3000 in a browser.


## Option B - Local Dev with Docker

If you already have docker installed...

```
./docker-dev.sh
```

Then open localhost:3000 in a browser.


# Troubleshooting

If you get an error like "[SyntaxError: Block-scoped declarations (let, const, function, class) not yet supported outside strict mode](https://github.com/tj/connect-redis/issues/245)", you need to upgrade node. Use `nvm`.


