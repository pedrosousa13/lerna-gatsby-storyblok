import PropTypes from "prop-types";
import React from "react";

import { resizeWithFocusPoint } from "../../helpers/imageService";

const FocusPointImg = props => {
  const { focusPoint, size, alt, wrapperClassname, ...attributes } = props;
  if (
    typeof focusPoint !== "object" ||
    (focusPoint.image && focusPoint.image.length < 1)
  ) {
    return null;
  }

  const resizedImage = resizeWithFocusPoint(
    focusPoint.image,
    focusPoint.imageSize,
    focusPoint.focusPoint,
    size
  );

  const aspectRatio = resizedImage.size.width / resizedImage.size.height;

  return (
    <div
      className={`focuspoint__img-w ${wrapperClassname}`}
      style={{ paddingBottom: 100 / aspectRatio + "%" }}
    >
      {resizedImage.url !== "" && (
        <img src={resizedImage.url} alt={alt} {...attributes} />
      )}
    </div>
  );
};

FocusPointImg.propTypes = {
  focusPoint: PropTypes.object.isRequired,
  size: PropTypes.object.isRequired,
  alt: PropTypes.string.isRequired,
  wrapperClassname: PropTypes.string
};

export default FocusPointImg;
