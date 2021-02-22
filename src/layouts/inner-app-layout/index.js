import React, { useState } from 'react'
import PropTypes from "prop-types";



export const InnerAppLayout = props => {

	return (
		<>
		</>
	)
}

InnerAppLayout.propTypes = {
	sideContent: PropTypes.node,
	mainContent: PropTypes.node,
	pageHeader: PropTypes.bool,
	sideContentWidth: PropTypes.number,
	border: PropTypes.bool,
	sideContentGutter: PropTypes.bool
};

export default InnerAppLayout
