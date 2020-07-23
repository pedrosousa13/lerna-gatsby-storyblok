import PropTypes from "prop-types";
import React from "react";

import { resizeWithFocusPoint } from "../../helpers/imageService";

class FocusPointBg extends React.Component {
  render() {
    const { customTag, focusPoint, size, style, ...attributes } = this.props;
    const CustomTag = customTag;
    const resizedImage = resizeWithFocusPoint(
      focusPoint.image,
      focusPoint.imageSize,
      focusPoint.focusPoint,
      size
    );

    if (
      typeof focusPoint != "object" ||
      (focusPoint.image && focusPoint.image.length < 1)
    ) {
      return null;
    }

    return (
      <CustomTag
        style={Object.assign({}, style, {
          backgroundRepeat: "no-repeat",
          backgroundImage: `url('${resizedImage.url}')`,
          backgroundPosition: `${focusPoint.focusPoint.x}% ${focusPoint.focusPoint.y}%`
        })}
        {...attributes}
      />
    );
  }
}

FocusPointBg.propTypes = {
  focusPoint: PropTypes.object.isRequired,
  size: PropTypes.object.isRequired,
  customTag: PropTypes.any
};

FocusPointBg.defaultProps = {
  customTag: "div"
};

export default FocusPointBg;
