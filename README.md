# cookie-control
An extension to facilitate erasing cookies not on the whitelist


## Usage
Chrome-based browsers allow you to set up a cookie management workflow as follows:

* Cookies are allowed, but should be erased after the current session ends
* Certain sites are permitted to have cookies that persist until they expire

These options are configured at `chrome://settings/content/cookies`, with *Keep local data until you quit your browser*, and *Allow* rules set per domain.

However there may be occasions where you wish to erase all your ephemeral cookies without having to restart the browser. The Clear private data dialog is not sufficiently advanced to do this and will clear all of your cookies.

With this extension, you can open the browser action and clear just the ephemeral cookies (I.e. ones that don't have an *Allow* rule for their domain).
