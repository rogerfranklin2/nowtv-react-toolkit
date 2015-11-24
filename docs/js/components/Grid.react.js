import React from 'react';

class Grid extends React.Component {

  render() {
    return (
      <section className="grid">
        <h2 className="section-title">Grid</h2>
        <p>The Grid is a seperate project which can be found on <a href="http://github.com/nowarkdev/grid">GitHub</a>.</p>

        <h3>Installation</h3>
        <pre>
          <code className="sh">
            npm install sky-uk/nowtv-web-grid --save
          </code>
        </pre>

        <h3>Usage</h3>
        <p>Use in your SCSS bundle</p>
        <pre>
          <code className="scss">
            @import "../node_modules/nowtv-web-grid/dist/scss/nowtv_grid.scss";
          </code>
        </pre>

        <p>There is also a compiled CSS version</p>
        <pre>
          <code className="sh">
            "../node_modules/nowtv-web-grid/dist/css/nowtv_grid.css"
            </code>
          </pre>

          <h3>Grid Examples</h3>
          <p>The underlying grid is the bootstrap gird. For examples and docs see <a href="http://getbootstrap.com/examples/grid/">Bootstrap Grid Example</a>.</p>
        </section>
    )
  }
}

export default Grid;
