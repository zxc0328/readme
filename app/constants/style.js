const two_column_block = {
	display: 'inline-block',
  minHeight: '876px',
  verticalAlign: 'top'
}

export default {
  two_column:{
  	block_0:{
			width: '30%',
  		backgroundColor: '#00bfa5',
  		...two_column_block
  	},
  	block_1:{
			width: '70%',
  		padding: '20px',
  		boxSizing: 'border-box',
  		...two_column_block
  	}
  },
  top_one_bottom_two:{
  	block_0:{
			display:'block',
			height:'150px',
			backgroundColor:'#333'
  	},
  	block_1:{
  		width: '50%',
  		...two_column_block
  	},
  	block_2:{
  		width: '50%',
  		...two_column_block
  	}
  }
};