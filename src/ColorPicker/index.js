import React, { Component } from 'react';
import { colors } from '../utils/palettes';

// The example solution uses component injection (Swatch props is capital because it is reserved for a component)

const ColorSwatch = ({ onClick, colorCode }) => (
  <button
    onClick={() => onClick(colorCode)}
    style={{ background: colorCode }}
  />
)

export class Picker extends Component {
  state = {
    visible: false,
  };

  handleClick = () => {
    this.setState(previousState => {
      return { visible: !previousState.visible };
    });
  }

  render() {
    return (
      <div style={styles.pickerContainer}>
        <div>
          <button
            className="btn btn-default"
            style={styles.button}
            onClick={this.handleClick}
          >
            {this.props.label}
          </button>
        </div>
        {this.state.visible && (
          <div style={styles.colorContainer}>
            {colors.map((colorCode) =>
              <ColorSwatch key={colorCode} colorCode={colorCode} onClick={this.props.onSelect} />
            )}
          </div>
        )}
      </div>
    )
  }
}

const ColorPicker = props => <Picker palettes={colors} Swatch={ColorSwatch} {...props} />;

const styles = {
  button: {
    backgroundColor: '#ffffff',
    border: '1px solid black',
  },
  colorContainer: {
    display: 'flex',
    alignContent: 'center',
    border: '1px solid black',
    justifyContent: 'center',
    backgroundColor: '#ffffff',
    margin: '2rem',
    padding: '2rem',
  }
}

export default ColorPicker;
