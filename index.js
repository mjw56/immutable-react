var List = React.createClass({

  shouldComponentUpdate: function(nextProps) {
    console.log('shouldComponentUpdate:', nextProps.items !== this.props.items)
    return nextProps.items !== this.props.items;
  },

  _renderList: function() {
    return this.props.items.toJS().map(function(item, i) {
      return React.createElement('li', { key: i}, item);
    });
  },

  render: function() {
    return (
      React.createElement('ul', null, this._renderList())
    );
  }
});

var ListContainer = React.createClass({

  getInitialState: function() {
    return {
      items: Immutable.List.of(1, 2, 3)
    }
  },

  componentDidMount: function() {
    var i = 0,
        j = 4;

    var _this = this;
    var interval = setInterval(function() {
      if (i % 2 === 0) {
        _this.setState({
          items: _this.state.items.push(j++)
        })
      } else {
        _this.forceUpdate();
      }
      i++;
    }, 500);

    var timeout = setTimeout(function() {
      timeout = null;
      clearInterval(interval);
    }, 20000)
  },

  render: function() {
    return (
      React.createElement('div', null,
        React.createElement(List, { items: this.state.items })
      )
    );
  }
});

ReactDOM.render(
  React.createElement(ListContainer),
  document.getElementById('root')
);