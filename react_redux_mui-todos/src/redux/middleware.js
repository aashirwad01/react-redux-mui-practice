import { ADD_TODO } from "./actions";

import {takeEvery} from "@redux-saga/core/effects"

export function* addTodo(){
    yield takeEvery(ADD_TODO,function*(){
        // we can perform sync operations here
        // no need of async calls here now
    });
}

export default function* yieldTodo (){
    yield* addTodo();
}