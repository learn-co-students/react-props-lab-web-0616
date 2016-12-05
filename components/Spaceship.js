const React = require('react');

class Spaceship extends React.Component {
  render() {
    return (
      <div className='spaceship'>
        <h1>Name: {this.props.name}</h1>
        <h3>Speed: {this.props.speed}</h3>
        <p>Has rockets: {this.props.hasRockets ? 'Yes' : 'No'}</p>
        <p>Colors: {this.props.colors.join(', ')}</p>
      </div>
    )
  }
};


Spaceship.defaultProps = {
  hasRockets: false,
  colors: ['black', 'red'],
};

module.exports = Spaceship;
