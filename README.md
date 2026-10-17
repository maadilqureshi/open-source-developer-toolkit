# Open Source Developer Toolkit

A lightweight, browser-based collection of developer text utilities. Built with HTML, CSS and JavaScript, without runtime dependencies or a backend.

## Tools

- JSON formatter and minifier
- Base64 encoder and decoder with UTF-8 support
- URL slug generator
- Text statistics (characters, words, lines)
- Date/time to ISO 8601 converter

Inputs are processed in your browser. The toolkit does not send input to a server. Clipboard access is requested only when you click **Copy output**.

## Getting started

1. Clone or download this repository.
2. Serve the directory with a local static server, for example: `python -m http.server 8000`.
3. Open `http://localhost:8000` in a browser.

Because the application uses JavaScript ES modules, opening `index.html` directly with `file://` may not work.

## Run tests

Requires Node.js 18 or newer:

```sh
npm test
```

No `npm install` is required.

## Files

- `index.html`: main user interface
- `styles.css`: responsive layout
- `src/app.js`: browser UI and event handlers
- `src/utils.js`: reusable utility functions
- `tests/utils.test.js`: automated tests
- `CONTRIBUTING.md`: contribution guidelines
- `LICENSE`: MIT license

## GitHub Pages

To publish the static app, go to **Settings → Pages** and select `main` as the branch and `/(root)` as the folder.

## Limitations

- Slug generation is ASCII-oriented and may return an empty result for some scripts.
- Date parsing follows JavaScript `Date` rules; prefer full ISO timestamps for unambiguous input.
- Word counting is whitespace-based.

## Contributing

Issues and thoughtful pull requests are welcome. Describe the problem and run `npm test` before submitting changes. See [CONTRIBUTING.md](CONTRIBUTING.md).

## License

MIT. See [LICENSE](LICENSE).

Publishing a repository does not by itself establish eligibility for external open-source grants or programs.
