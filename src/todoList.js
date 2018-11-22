import React, { Component } from 'react'
import { connect } from 'react-redux'
import { 
  View, 
  Text, 
  FlatList,
  TextInput,
  Button,
  Image,
  TouchableOpacity
} from 'react-native'
import { addTodo, getTodoList, deleteTodo } from './actions'

class TodoListContainer extends Component {
  constructor(props) {
    super(props)
    this.state = { text: '', isCompleted: false }
    // this.handleClick = this.handleClick.bind(this);
  }
  componentDidMount(){
    this.props.getTodoList()
  }

  _onCheck = ()=> {
    alert('Hi')
  }

  componentWillUpdate(nextProps) {
    if(nextProps.todos !== this.props.todos) {
      this.props.getTodoList()
    }
  }

  render () {
    const { text, isCompleted } = this.state
    return (
      <View style={{flex: 1, backgroundColor: '#F3F8F1'}}>
        <View style={{
          height: 70, 
          backgroundColor: '#E9967A', 
          justifyContent: 'center',
          alignItems: 'center',
          paddingTop: 20
        }}>
          <Text style={{fontSize: 20}}>TODO</Text>
        </View>
        <View style={{flex: 1, paddingVertical: 30, paddingHorizontal: 30 }}>
          <View style={{ width: 300, justifyContent: 'center' }}>
            <TextInput 
              style={{height: 40, borderColor: 'gray', borderWidth: 1}}
              onChangeText={(text) => this.setState({text})}
              value={this.state.text}
              clearTextOnFocus={true}
            />
            <View 
              style={{
                width: 160, 
                height: 44, 
                backgroundColor: "#ff1654",
                borderWidth: 0,
                borderRadius: 10,
                marginTop: 20,
                borderColor: "#867979"
              }}>
              <Button 
                title="Add todo"
                color="black"
                onPress={() => this.props.addTodo(text, isCompleted)}
              />
            </View>
          </View>
          <FlatList
            data={this.props.todos}
            renderItem={
                ({item}) => 
              <View style={{flex: 1, flexDirection: 'column'}}>
                <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                  <Text>{item.text}</Text>
                  <TouchableOpacity onPress={()=>this.props.deleteTodo(item.id)}>
                    <Image
                      style={{width: 30, height: 30}} 
                      source={require('./images/exit-button.png')} />
                  </TouchableOpacity>
                </View>
              </View>
            }
          />
        </View>
      </View>
    )
  }
}

export const mapStateToProps = state => {
  const todos = state.todos
  return ({
    todos
  })
}

export const mapDispatchToProps = dispatch => {
  return {
    addTodo: (text, isCompleted) => {
      dispatch(addTodo(text, isCompleted))
    },
    getTodoList: () => {
      dispatch(getTodoList())
    },
    deleteTodo: (id) => {
      dispatch(deleteTodo(id))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoListContainer)