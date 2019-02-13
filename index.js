#!/usr/bin/env node

const { h, render, Component, Color, Bold } = require("ink")
const Link = require("ink-link")

class App extends Component {
    componentDidMount() {
        setTimeout(function() {
            process.exit(0)
        }, 1000)
    }

    render() {
        return h(
            Color,
            {
                whiteBright: true,
                bgBlue: true,
            },
            [
                "We’re still building this. ",
                h(
                    Link,
                    {
                        url: "https://twitter.com/gitstoreapp",
                    },
                    [h(Bold, undefined, ["Follow us for updates"])],
                ),
                ".",
            ],
        )
    }
}

render(h(App))
