import React, {Children, createContext, useReducer} from "react";

const initalState={
    user:null,
    token: null,
    role:null,
};

const actionTypes={
    LOGIN:"LOGIN",
    LOGOUT: "LOGOUT",
    UPDATE_ROLE: "UPDATE_ROLE",
};

//REDUCER: define cómo se actualiza el estado en función de una acción
const authReducer=(state, action)=>{
    switch(action.type){
        case actionTypes.LOGIN:
            return{
                ...state,
                user:action.payload.user,
                token: action.payload.token,
                role: action.payload.role,
            };

            case actionTypes.LOGOUT:
            return initalState;
            case actionTypes.UPDATE_ROLE:
                return{
                    ...state,
                    role:action.payload.role,
                }
                default:
                    return state;
            };
        };
        
    //crear el contexto
    export const AuthContext=createContext();
    export const AuthProvider=({Children})=>{
        const [state, dispatch]=useReducer(authReducer, initalState);
        const login=(user, token, role)=>{
            dispatch({
                type:actionTypes.LOGIN,
                payload:{user,token,role},
            });
            const logout=()=>{
                dispatch({type: actionTypes.LOGOUT});
            };
            const updateRole=(role)=>{
                dispatch({
                    type:actionTypes.UPDATE_ROLE,
                    payload:{role},
                });
            };
    };

    return(
        <AuthContext.Provider value={{...state, login, logout, updateRole }}>
            {Children}
        </AuthContext.Provider>
    );
};
