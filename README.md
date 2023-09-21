## Testing Font Changes

### steps

1) Clone the repo and start the server.

```bash
  git clone git@github.com:turbobeast/dirty-font-server.git
  cd dirty-font-server
  nvm use
  npm install
  node server.js
```


2) Add a custom font.

```html
<style>
  @import url("http://localhost:8080/fonts.css");
</style>
```

3) Edit public/fonts.css and reload the Design Editor