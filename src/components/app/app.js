import {Component} from 'react'

class User extends Component{
    constructor(props){
        super(props)
        this.state = {
            counter: 0, age: ''
        }
    }

    onIncrement =()=>{
        this.setState(prevState =>({
            counter: prevState.counter+1,
        }))
    }   

    onDecrement=()=>{
        this.setState(prevState => ({
            counter: prevState.counter - 1,
        }))
    }

    onRestart = () => {
        this.setState({
            counter: 0,
        })
    }

    changeHandler = (e, name) => {
        console.log(name)
        this.setState({
            age : e.target.value
        })
    }

    render() {
        const {firstName, lastName, link} = this.props
        const {age, counter} = this.state
    
    return(
        <div className='w-50 mx-auto'>
            <div className='border p-3 mt-5'>
                <h4>
                    My name is {firstName} {lastName}, I am {age} years old
                </h4>
                <a href = {link}>My YouTube channel</a>
            </div>
            <div className='mt-3'>
                <button onClick={this.onIncrement} className='btn btn-success'>Increment</button>
                <button onClick={this.onDecrement} className='btn btn-danger mx-2'>Decrement</button>
                <button onClick={this.onRestart} className='btn btn-info'>Restart</button>
                <form className=' form-control mt-2'>
                    <span>Enter your age: </span>
                <input type="text" onClick={(e) => this.changeHandler(e, 'javlonbek')} />
                </form>
            <p>{counter}</p>
            </div>
        </div>
        )
    }
}

const App = ()=>{
    return (
        <div>
            <User firstName = "Javlonbek" lastName="Fayzullaev" link = "google.com" />
            <User firstName = "Javlonbek" lastName="Komilov" link = "youtube.com" />
        </div>
    )
}
export default App