# Contributing

1. Raise an issue if there is not already one.
  1. Ensure you raise the issue under *your* github username
  2. Failing this, ensure that you tag yourself and your team in the comments
  3. Also include any screenshots within the comment that might help explain.
2. Clone the project `git clone git@github.com:sky-uk/nowtv-react-toolkit.git`
3. Create a branch with your feature or fix and push it to GitHub.
4. Create a pull request.

## Prerequisites

PhantomJS v2 i required for tests.  If you haven't already got it installed please do the following:

 * `brew install upx`
 * `npm run phantom:install`

## Developing

 * `npm start`

## Testing

You will need selenium server installed locally.  If you do not have this already, please run :
 * `npm run selenium:install`

Run unit tests:
 * `npm test`

Run functional tests:
 * `npm run selenium:start`
 * `npm run test:functional`

## Running Feature Tests

To run the feature tests, you have 2 options, run chrome locally, or all tests through browserstack.

For both of these options, you will need to start the docs server first
```
npm run start
```

To run only chrome locally, you can simply run: `npm run test:feature`

To run the full browserstack suite of feature tests.

First start browserstack supplying the browserstack-key
```
./bin/BrowserStackLocal-osx <PUT-THE-BROWSERSTACK-KEY-HERE>
```

Next, run `npm run test:feature-bs -- --bskey=<PUT-THE-BROWSERSTACK-KEY-HERE>`, also supplying the same broserstack-key.

## Troubleshooting

 * if the tests or server don't run, try :
   * `rm -rf node_modules && npm i`

## Releasing to NPM

In order to release to NPM you need to be logged in as NowTV. You can release by running the following:

```
  npm run release:[major|minor|patch]
```

