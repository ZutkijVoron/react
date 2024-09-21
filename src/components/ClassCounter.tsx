import React from 'react'

class ClassCounter extends React.Component {
	constructor() {
		super({})
		this.state = {
			count: 0,
		}

		this.decrement = this.decrement.bind(this)
		this.increment = this.increment.bind(this)
	}

	state: { count: number }

	decrement() {
		this.setState({ count: this.state.count - 1 })
	}

	increment() {
		this.setState({ count: this.state.count + 1 })
	}

	render() {
		return (
			<div className='counter'>
				<div className='counter__value'>{this.state.count}</div>
				<div className='counter__control'>
					<button onClick={this.increment} className='counter__control__btn'>
						like
					</button>
					<button onClick={this.decrement} className='counter__control__btn'>
						dislike
					</button>
				</div>
			</div>
		)
	}
}

export default ClassCounter
