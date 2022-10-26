const path = require('path');

const express = require('express');

const matchSupportedLocales = require('./match-supported-locale');

const port = 8080;

const rootDir = path.join(__dirname, '');

const locales = ['pt-BR', 'es', 'en'];

const defaultLocale = 'pt-BR';

const server = express();

// Serve static files (HTML, CSS, etc.)

server.use(express.static(rootDir));


locales.forEach((locale) => {

  server.get(`/${locale}/*`, (req, res) => {

    res.sendFile(
      path.resolve(rootDir, locale, 'index.html')
    );

  });

});

server.get('/', (req, res) => {
  // console.log(matchSupportedLocales);

  const closestSupportedLocale = matchSupportedLocales(
    req.acceptsLanguages(),
    locales,
    defaultLocale
  );

  return res.redirect(`/${closestSupportedLocale}`);
});

server.get('*', function (req, res) {
  return res.redirect(`/`);
});

server.listen(port, () =>
  console.log(`App running at port ${port}…`)
);