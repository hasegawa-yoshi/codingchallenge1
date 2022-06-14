import {createStore as reduxCreateStore} from 'redux'
import { SearchTextReducer } from '../searchtext/reducers'

export default function createStore(){
  return reduxCreateStore(
    SearchTextReducer
  )
}