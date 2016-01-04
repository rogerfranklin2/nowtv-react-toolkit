# Contributing

1. Raise an issue if there is not already one.
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

Run unit tests:
 * `npm test`

Run functional tests:
 * `npm run selenium:start`
 * `npm run test:functional`


## Troubleshooting

 * if the tests or server don't run, try :
   * `rm -rf node_modules && npm i`

