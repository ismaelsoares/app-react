import React from 'react';

var Filters = React.createClass({
  handleFilterChange: function() {
    var value = this.refs.filterInput.getDOMNode().value;
    this.props.updateFilter(value);
  },
  render: function() {
    return <input type="text" ref="filterInput" onChange={this.handleFilterChange} placeholder="Filter" />;
  }
});

var List = React.createClass({
  getInitialState: function() {
    return {
      listItems: ['Chicago', 'New York', 'Tokyo', 'London', 'San Francisco', 'Amsterdam', 'Hong Kong'],
      nameFilter: ''
    };
  },
  handleFilterUpdate: function(filterValue) {
    this.setState({
      nameFilter: filterValue
    });
  },
  render: function() {
    var displayedItems = this.state.listItems.filter(function(item) {
      var match = item.toLowerCase().indexOf(this.state.nameFilter.toLowerCase());
      return (match !== -1);
    }.bind(this));

    var content;
    if (displayedItems.length > 0) {
      var items = displayedItems.map(function(item) {
        return <li>{item}</li>;
      });
      content = <ul>{items}</ul>
    } else {
      content = <p>No items matching this filter</p>;
    }

    return (
      <div>
        <Filters updateFilter={this.handleFilterUpdate} />
        <h4>Results</h4>
        {content}
      </div>
    );
  }
});

export default List;
