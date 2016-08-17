import React, {Component, PropTypes} from 'react';
/**
  this is an HOC that pass a property "muiTheme"
  containing the current MUI Theme in the context to the enanched component
  example:
  const MyButton = ({muiTheme,...otherProps) => {
  const textColor = muiTheme.palette.alternateTextColor
    return (
      <FlatButton
        style={{color:textColor}}
        {...otherProps}
      />
    );
  }
  export default withMuiTheme(MyButton);

*/
const withMuiTheme = (Comp) => class WithMuiTheme extends Component {
  static contextTypes = {muiTheme: PropTypes.object};
  render() {
    return <Comp {...this.props} muiTheme={this.context.muiTheme} />;
  }
};
export default withMuiTheme;
