import React from 'react';
import { Spin } from '@ant-design/react-native';
//import PropTypes from 'prop-types'
import { LoadingOutlined } from '@ant-design/icons-react-native';

const Icon = <LoadingOutlined style={{ fontSize: 35 }} spin />

const Loading = (props) => {
	const { align, cover } = props
	return (
		<Spin indicator={Icon} />
	)
}

// Loading.propTypes = {
// 	size: PropTypes.string,
// 	cover: PropTypes.string
// }

// Loading.defaultProps = {
// 	align: 'center',
// 	cover: 'inline'
// };

export default Loading